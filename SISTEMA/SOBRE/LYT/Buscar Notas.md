---
cssclasses:
  - hide-properties_editing
  - hide-properties_reading
  - wide-page
collection: "[[Mapas]]"
up:
---
```datacorejsx
/// 📄 Configurações Iniciais
////////////////////////////////////////////////////

const initialSettings = {
  vaultName: "Meu Vault",
  queryPath: "",
  initialNameFilter: "",
  viewHeight: "900px",
excludedFolders: ["CALENDÁRIO", "SISTEMA"],
  pagination: { isEnabled: true, itemsPerPage: 4 },
  placeholders: {
    headerTitle: "Buscar Notas",
    nameFilter: "Pesquisa Geral...",
    queryPath: "Caminho da nota...",
    newHeaderLabel: "Novo Cabeçalho",
    newDataField: "Novo Campo",
  },
  dynamicColumnProperties: {
    "Nome da Nota": "name.obsidian",
    "Tags": "tags",
    "Coleções": "collection",
    "Up": "up",
	"Relacionadas": "related",
    "Criadas em": "created", // Coluna movida para o final
  },
  groupByColumns: [],
};

const { useState, useMemo } = dc;

/// 🔧 Funções Auxiliares
////////////////////////////////////////////////////

function getProperty(entry, property) {
  if (!entry) return [""];

  if (property.endsWith(".obsidian")) {
    const key = property.replace(".obsidian", "");
    const obsidianProps = {
      ctime: entry.$ctime?.toISODate?.() ?? "",
      mtime: entry.$ctime?.toISODate?.() ?? "",
      name: entry.$name ?? "",
    };
    return [obsidianProps[key] ?? ""];
  }

  if (property === "tags") {
    return entry.$tags?.length
      ? entry.$tags.map(tag => tag.startsWith("#") ? tag : `#${tag}`)
      : [""];
  }

	if (property === "created") {
	  const createdDate = entry.$ctime?.toISODate?.() ?? "";
	  return [`[[${createdDate}]]`];
	}

  const fm = entry.$frontmatter?.[property];
  if (!fm) return [""];

  if (Array.isArray(fm)) {
    return fm.map(item => resolveLink(item));
  }

  if (typeof fm === "string") {
    return [resolveLink(fm)];
  }

  if (fm.raw && Array.isArray(fm.raw)) {
    return fm.raw.map(item => resolveLink(item));
  }

  if (fm.path) {
    return [`[[${fm.path}]]`];
  }

  return [""]; // fallback
}

function resolveLink(value) {
  const str = String(value).trim();
  if (str.match(/^\[\[.*\]\]$/)) return str;
  return `[[${cleanLink(str)}]]`;
}

function cleanLink(value) {
  if (!value) return "";
  const str = String(value).trim();
  const match = str.match(/\[\[(.*?)\]\]/);
  return match ? match[1] : str;
}

/// 🎨 Estilos
////////////////////////////////////////////////////

const styles = {
  mainContainer: { 
    display: "flex", 
    flexDirection: "column", 
    height: "100%",
    backgroundColor: "var(--background-primary)",
    color: "var(--text-normal)"
  },
  header: { 
    padding: "10px",
    backgroundColor: "var(--background-primary)"
  },
  headerTitle: { 
    margin: 0, 
    paddingBottom: "10px" 
  },
  controlGroup: {
    display: "flex", 
    gap: "10px", 
    flexWrap: "wrap", 
    alignItems: "center"
  },
  textbox: {
    padding: "8px", 
    width: "200px", 
    boxSizing: "border-box",
    border: "1px solid var(--background-modifier-border)",
    backgroundColor: "var(--background-primary)",
    color: "var(--text-normal)"
  },
  tableContainer: { 
    flex: 1, 
    overflowY: "auto" 
  },
  tableHeader: {
    display: "flex", 
    position: "sticky", 
    top: 0, 
    zIndex: 2,
    backgroundColor: "var(--background-primary)",
    borderBottom: "1px solid var(--background-modifier-border)"
  },
  tableHeaderCell: {
    flex: 1, 
    padding: "10px", 
    fontWeight: "bold",
    display: "flex", 
    flexDirection: "column", 
    gap: "5px"
  },
  columnFilter: {
    padding: "4px", 
    fontSize: "0.9em", 
    width: "100%", 
    boxSizing: "border-box",
    border: "1px solid var(--background-modifier-border)",
    backgroundColor: "var(--background-primary)",
    color: "var(--text-normal)"
  },
  tableRow: {
    display: "flex", 
    borderBottom: "1px solid var(--background-modifier-border)"
  },
  tableCell: {
    flex: 1, 
    padding: "10px", 
    display: "flex", 
    flexDirection: "column", 
    gap: "4px"
  },
  tag: { 
    cursor: "pointer", 
    textDecoration: "none", 
    fontSize: "0.9em",
    color: "var(--text-accent)",
    display: "inline-block",
    whiteSpace: "nowrap",
    '&:hover': {
      textDecoration: "underline"
    }
  },
  draggableLink: { 
    cursor: "pointer", 
    color: "var(--text-accent)" 
  },
  pagination: {
    padding: "30px", 
    display: "flex", 
    justifyContent: "center", 
    gap: "10px"
  },
  button: {
    padding: "8px 12px", 
    borderRadius: "4px", 
    cursor: "pointer",
    backgroundColor: "var(--interactive-accent)",
    color: "var(--text-on-accent)",
    border: "none"
  },
  tagContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "4px"
  },
  arrayItem: {
    padding: "2px 0"
  },
  dateCell: {
    fontSize: "0.9em",
    color: "var(--text-muted)"
  }
};

/// 📋 Componentes
////////////////////////////////////////////////////

const NoteLink = ({ entry }) => {
  const title = getProperty(entry, "name.obsidian")[0];
  return title && (
    <a 
      href="#" 
      className="internal-link"
      draggable 
      data-href={entry.$path} 
      style={styles.draggableLink}
    >
      {title}
    </a>
  );
};

const Tags = ({ values }) => (
  <div style={styles.tagContainer}>
    {values.filter(Boolean).map((val, idx) => {
      const tagName = val.replace(/^#/, "");
      return (
        <a
          key={idx}
          href="#"
          className="tag"
          data-href={`#${tagName}`}
          style={styles.tag}
          onClick={(e) => {
            e.preventDefault();
            if (window.app?.internalPlugins?.plugins?.tags?.instance?.navigateToTag) {
              window.app.internalPlugins.plugins.tags.instance.navigateToTag(tagName);
            }
          }}
        >
          {val}
        </a>
      );
    })}
  </div>
);

const ArrayItems = ({ values, isDate = false }) => (
  <div style={styles.tagContainer}>
    {values.filter(Boolean).map((val, idx) => {
      const isLink = val.startsWith("[[") && val.endsWith("]]");
      const linkText = isLink ? val.slice(2, -2) : val;
      return (
        <div key={idx} style={isDate ? styles.dateCell : styles.arrayItem}>
          {isLink ? (
            <a
              href="#"
              className="internal-link"
              data-href={linkText}
              style={styles.draggableLink}
            >
              {linkText}
            </a>
          ) : (
            linkText
          )}
        </div>
      );
    })}
  </div>
);

const DataTable = ({ columns, data, columnFilters, setColumnFilter }) => (
  <div style={styles.tableContainer}>
    <div style={styles.tableHeader}>
      {columns.map(col => {
        const prop = initialSettings.dynamicColumnProperties[col];
        return (
          <div key={col} style={styles.tableHeaderCell}>
            <div>{col}</div>
            {prop !== "created" && ( // Remove o filtro apenas para a coluna Created
              <input
                type="text"
                value={columnFilters[col] || ""}
                onChange={e => setColumnFilter(col, e.target.value)}
                placeholder={`Filtrar ${col.toLowerCase()}`}
                style={styles.columnFilter}
              />
            )}
          </div>
        );
      })}
    </div>

    {data.length === 0 && (
      <div style={{ padding: "10px", textAlign: "center" }}>
        Nenhuma nota encontrada
      </div>
    )}

    {data.map((entry, idx) => (
      <div key={idx} style={styles.tableRow}>
        {columns.map(col => {
          const prop = initialSettings.dynamicColumnProperties[col];
          const values = getProperty(entry, prop);
          
          return (
            <div key={`${idx}-${col}`} style={styles.tableCell}>
              {prop === "name.obsidian" && <NoteLink entry={entry} />}
              {prop === "tags" && <Tags values={values} />}
              {prop === "collection" && <ArrayItems values={values} />}
              {prop === "up" && <ArrayItems values={values} />}
              {prop === "related" && <ArrayItems values={values} />}
              {prop === "created" && <ArrayItems values={values} isDate={true} />}
            </div>
          );
        })}
      </div>
    ))}
  </div>
);

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => (
  <div style={styles.pagination}>
    <button
      style={styles.button}
      disabled={currentPage === 1}
      onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
    >
      Anterior
    </button>
    <span>Página {currentPage} de {totalPages}</span>
    <button
      style={styles.button}
      disabled={currentPage === totalPages}
      onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
    >
      Próxima
    </button>
  </div>
);

/// 🖥️ Componente Principal
////////////////////////////////////////////////////

function View() {
  const [nameFilter, setNameFilter] = useState(initialSettings.initialNameFilter);
  const [queryPath, setQueryPath] = useState(initialSettings.queryPath);
  const [currentPage, setCurrentPage] = useState(1);
  const [columnFilters, setColumnFilters] = useState({});

  const qdata = dc.useQuery(`@page and path("${queryPath}")`);

  const setColumnFilter = (col, val) => {
    setColumnFilters(prev => ({ ...prev, [col]: val }));
    setCurrentPage(1);
  };

  const filteredData = useMemo(() => {
    const global = nameFilter.trim().toLowerCase();
    const cols = Object.keys(initialSettings.dynamicColumnProperties);

    return qdata.filter(entry => {
      if (initialSettings.excludedFolders.some(folder => 
        entry.$path.startsWith(`${folder}/`))) return false;

      const globalMatch = !global || cols.some(col => {
        const prop = initialSettings.dynamicColumnProperties[col];
        const value = getProperty(entry, prop).join(", ").toLowerCase();
        return value.includes(global);
      });
      if (!globalMatch) return false;

      return cols.every(col => {
        // Ignora filtro para a coluna Created
        if (col === "Created") return true;
        
        const filter = columnFilters[col]?.trim().toLowerCase();
        if (!filter) return true;

        const prop = initialSettings.dynamicColumnProperties[col];
        const values = getProperty(entry, prop);

        if (prop === "tags") {
          return values.some(tag => 
            tag.replace('#', '').toLowerCase().includes(filter)
          );
        }
        
        return values.some(v => v.toLowerCase().includes(filter));
      });
    });
  }, [qdata, nameFilter, columnFilters]);

  const paginated = useMemo(() => {
    const start = (currentPage - 1) * initialSettings.pagination.itemsPerPage;
    return filteredData.slice(start, start + initialSettings.pagination.itemsPerPage);
  }, [filteredData, currentPage]);

  const totalPages = Math.max(1, Math.ceil(filteredData.length / initialSettings.pagination.itemsPerPage));
  const columns = Object.keys(initialSettings.dynamicColumnProperties);

  return (
    <div style={{ ...styles.mainContainer, height: initialSettings.viewHeight }}>
      <div style={styles.header}>
        <h1 style={styles.headerTitle}>{initialSettings.placeholders.headerTitle}</h1>
        <div style={styles.controlGroup}>
          <dc.Textbox
            value={nameFilter}
            onChange={e => setNameFilter(e.target.value)}
            placeholder={initialSettings.placeholders.nameFilter}
            style={styles.textbox}
          />
          <dc.Textbox
            value={queryPath}
            onChange={e => setQueryPath(e.target.value)}
            placeholder={initialSettings.placeholders.queryPath}
            style={styles.textbox}
          />
        </div>
      </div>

      <DataTable
        columns={columns}
        data={paginated}
        columnFilters={columnFilters}
        setColumnFilter={setColumnFilter}
      />

      {initialSettings.pagination.isEnabled && 
        filteredData.length > initialSettings.pagination.itemsPerPage && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
      )}
    </div>
  );
}

return View;
```