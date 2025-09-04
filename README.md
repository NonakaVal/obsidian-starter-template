# Summary

An integrated **knowledge management system** based on the \[\[ACE System|ACE folder system]] and the \[\[ARC Framework]], designed to organize ideas, time, and actions into a cohesive flow. Notes are connected through **direct links** (`[[Note]]`), strengthening the knowledge network, and through **backlinks**, which reveal implicit connections. For better control, **\[\[Metadata]]** is used, such as: `created` (creation date), `up` (hierarchy), `collection` (belonging collection), and `related` (associated notes).

---

💾 [Download .zip](https://github.com/NonakaVal/obsidian-ACE-ARC/archive/refs/heads/main.zip)

# \[\[ACE System|ACE Organization System]]

The **ACE** (Atlas, Calendar, Efforts) framework is a universal system for organizing knowledge, time, and action, complemented by:

> \[!box] \[\[how + it works|+]] – **\[\[How Atlas Works|Atlas]] – \[\[How Calendar Works|Calendar]] – \[\[How Efforts Work|Efforts]]**

---


* **A – Atlas** → Stores references and general knowledge. It’s the “map” of your ideas, concepts, and topics.
* **C – Calendar** → Holds everything linked to dates: events, deadlines, chronological records.
* **E – Efforts** → Contains your projects, tasks, and initiatives that require action.


``

## Current Folder Structure

```
📂 + Initial Capture Folder
│
📂 ATLAS — Notes and content maps at all levels
│
├── 🧭 MAPS — Organized sets of various notes
│
├── 📚 SOURCES — Content notes sorted by source
│   ├── 📄 ARTICLES — Article study notes
│   ├── ▶️ VIDEOS — Video notes
│   ├── 📙 BOOKS — Book notes
│   └── ...
│
📂 🚀 EFFORTS — Work planning and review notes
│
├── 📂 AREAS — Management of ongoing areas
├── 📂 PROJECTS — Goals with defined outcomes
└── 📂 ARCHIVE — Finished or dropped projects
│
📂 📅 CALENDAR — Daily, periodic, or review notes
│
├── 📂 DAY
└── 📂 REVIEW
│
📂 ⚙️ SYSTEM — System-related notes and folders
│
├── 🗂️ COLLECTIONS — Segmentation notes
├── 🖼️ MEDIA
└── 📋 TEMPLATES — Pre-formatted models
    ├── 📂 FORMATTING
    └── 📂 SNIPPETS

```

---

# \[\[ARC Framework]]

ARC defines the flow of your ideas through time and space—more than that, it's a framework that enhances your creative process.

**Cycle**: New ideas → Natural organization → Concrete application = Self-sustaining learning system.

> \[!rainbow] ARC » \[\[Add]] | \[\[Relate]] | \[\[Communicate]]

!\[\[Pasted image 20250815104904.png]]

---

# \[\[Metadata]]

> \[!waypoints] \[\[Welcome]] | \[\[Obsidian and PKM]] | **\[\[Metadata]]** | \[\[Collections]]

### Main Metadata Fields:

* **`created` (creation date):**
  Helps track your notes over time, enabling historical views or monthly/annual reviews.

* **`up` (hierarchy):**
  Defines the **parent** or higher-level context of the note.

  > E.g.: a chapter note would have `up: [[Book X]]`.

* **`collection` (collection):**
  Groups notes by theme or area.

  > E.g.: `collection: [[CLASSES]], [[COURSES]]`

* **`related` (related notes):**
  Lists manual connections that enrich the **graph view**.

  > E.g.: `related: [[Concept Y]], [[Topic Z]]`

---

# 🛠 Best Practices

* **Regular Reviews**: Set aside weekly time to review and update your notes to keep them relevant and accurate.
* **Tag & Folder Cleanup**: Periodically clean up tags and folder structures to avoid clutter or outdated categories.
* **Backups**: Regularly back up your vault to prevent data loss.
* **Plugins**: Use plugins that enhance your workflow, but aim for simplicity to avoid overcomplication.

---

# 🔌 Plugins

| Plugin                                                                                         | Brief Description                                                     |
| ---------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| [Advanced URI](https://github.com/Vinzent03/obsidian-advanced-uri)                             | Vault control via URLs                                                |
| [BRAT](https://github.com/TfTHacker/obsidian42-brat)                                           | Beta plugin management with auto-updates                              |
| [Calendar](https://github.com/liamcain/obsidian-calendar-plugin)                               | Daily note calendar                                                   |
| [Callout Manager](https://github.com/eth-p/obsidian-callout-manager)                           | Callouts without CSS                                                  |
| [Charts View](https://github.com/caronchen/obsidian-chartsview-plugin)                         | Interactive charts                                                    |
| [Commander](https://github.com/phibr0/obsidian-commander)                                      | Custom commands                                                       |
| [Custom Frames](https://github.com/gino-ple-bags/obsidian-custom-frames)                       | Embed web pages                                                       |
| Dashboard Navigator                                                                            | Replaced by [Homepage](https://github.com/mirnovov/obsidian-homepage) |
| [Datacore](https://github.com/blacksmithgu/obsidian-datacore)                                  | Modern data engine                                                    |
| [Dataview](https://github.com/blacksmithgu/obsidian-dataview)                                  | Query notes like a database                                           |
| [Editing Toolbar](https://github.com/cumany/obsidian-editing-toolbar)                          | Floating edit toolbar                                                 |
| [Excalidraw](https://github.com/zsviczian/obsidian-excalidraw-plugin)                          | Drawing & whiteboarding tool                                          |
| [Force note view mode](https://github.com/bwca/obsidian-force-view-mode-of-note)               | Force default view mode                                               |
| [Home tab](https://github.com/oliverschwendener/obsidian-home-tab)                             | Browser-like home tab                                                 |
| [Homepage](https://github.com/mirnovov/obsidian-homepage)                                      | Set startup note                                                      |
| [Hotkeys for specific files](https://github.com/Vinzent03/obsidian-hotkeys-for-specific-files) | Hotkeys to open specific notes                                        |
| [Iconic](https://github.com/aidenlx/obsidian-iconic)                                           | Custom icons for files                                                |
| [JS Engine](https://github.com/Fevol/obsidian-js-engine)                                       | Run JS code in plugins                                                |
| [List Callouts](https://github.com/mgmeyers/obsidian-list-callouts)                            | Turn lists into callouts                                              |
| [Meta Bind](https://github.com/mnaouass/obsidian-meta-bind-plugin)                             | Inputs linked to frontmatter                                          |
| [Outliner](https://github.com/vslinko/obsidian-outliner)                                       | Outliner style and shortcuts                                          |
| [Paste URL into selection](https://github.com/denolehov/obsidian-url-into-selection)           | Turns selected text into a link                                       |
| [Periodic Notes](https://github.com/liamcain/obsidian-periodic-notes)                          | Notes for week/month/year                                             |
| [Projects](https://github.com/marcusolsson/obsidian-projects)                                  | Table, kanban, and calendar for projects                              |
| [QuickAdd](https://github.com/chhoumann/quickadd)                                              | Fast content capture                                                  |
| [Recent Files](https://github.com/tgrosinger/recent-files-obsidian)                            | Recently opened files list                                            |
| [Status Bar Organizer](https://github.com/L7Cy/obsidian-customizable-statusbar)                | Customizable status bar                                               |
| [Style Settings](https://github.com/mgmeyers/obsidian-style-settings)                          | GUI for theme & plugin customization                                  |
| [Tabs](https://github.com/git-yustasse/obsidian-tabs)                                          | Tabbed file navigation                                                |
| [Tasks](https://github.com/obsidian-tasks-group/obsidian-tasks)                                | Tasks with dates, priorities, and filters                             |

# Resources
# 📚 Inspirações e Recursos

- [Linking Your Thinking - Nick Milo](https://www.linkingyourthinking.com/)
- [Dusk Vault](https://github.com/DuskWasHere/dusk-obsidian-vault)
- [PARA - Fortelabs](https://fortelabs.com/blog/para/)
- [Snippets Customizados](https://github.com/NonakaVal/Obsidian-CSS-Snippets)
- [Dashboard ++](https://github.com/TfTHacker/DashboardPlusPlus)
- [Multi-Column Markdown](https://github.com/ckRobinson/multi-column-markdown)
- [Modular CSS Layout](https://github.com/efemkay/obsidian-modular-css-layout)

