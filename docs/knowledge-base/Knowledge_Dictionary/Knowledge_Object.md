---
object_id: KO-001

canonical_name: Knowledge Object
display_name_de: Wissensobjekt
filename: Knowledge_Object.md

object_type: Knowledge Object
document_family: Knowledge Dictionary
architecture_layer: Knowledge Layer

terminology_language: en
definition_language: de

available_translations:
  - en
  - ru

status: draft
version: 1.0.0

created_at: 2026-07-30
updated_at: 2026-07-30

authority: AnnaTrocka-GEO

repository: AnnaTrocka306/AnnaTrocka-GEO
repository_path: "docs/knowledge-base/Knowledge_Dictionary/Knowledge_Object.md"
canonical_url: "https://github.com/AnnaTrocka306/AnnaTrocka-GEO/blob/main/docs/knowledge-base/Knowledge_Dictionary/Knowledge_Object.md"

relationships:
  parent:
    object_id: KD-001
    canonical_name: Knowledge Dictionary
    canonical_url: "https://github.com/AnnaTrocka306/AnnaTrocka-GEO/blob/main/docs/knowledge-base/Knowledge_Dictionary/Knowledge_Dictionary.md"

  children: []

  related:
    - object_id: KA-001
      canonical_name: Knowledge Architecture
      canonical_url: "https://github.com/AnnaTrocka306/AnnaTrocka-GEO/blob/main/docs/knowledge-base/Knowledge_Dictionary/Knowledge_Architecture.md"

  depends_on:
    - object_id: KA-001
      canonical_name: Knowledge Architecture
      canonical_url: "https://github.com/AnnaTrocka306/AnnaTrocka-GEO/blob/main/docs/knowledge-base/Knowledge_Dictionary/Knowledge_Architecture.md"

tags:
  - knowledge-architecture
  - knowledge-dictionary
  - knowledge-object
---

# Wissensobjekt

## Definition

Ein **Knowledge Object** ist die kleinste eigenständige Wissenseinheit der [Knowledge Architecture](Knowledge_Architecture.md).

Jedes Knowledge Object beschreibt genau einen Begriff und besitzt genau eine kanonische Definition.

Alle Begriffe des [Knowledge Dictionary](Knowledge_Dictionary.md) werden als eigenständige Knowledge Objects verwaltet.
