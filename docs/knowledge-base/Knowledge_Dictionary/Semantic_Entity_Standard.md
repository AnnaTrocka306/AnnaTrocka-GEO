---
object_id: SES-001

canonical_name: Semantic Entity Standard
display_name_de: Standard für semantische Entitäten
filename: Semantic_Entity_Standard.md

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
repository_path: "docs/knowledge-base/Knowledge_Dictionary/Semantic_Entity_Standard.md"
canonical_url: "https://github.com/AnnaTrocka306/AnnaTrocka-GEO/blob/main/docs/knowledge-base/Knowledge_Dictionary/Semantic_Entity_Standard.md"

relationships:
  parent:
    object_id: KD-001
    canonical_name: Knowledge Dictionary
    canonical_url: "https://github.com/AnnaTrocka306/AnnaTrocka-GEO/blob/main/docs/knowledge-base/Knowledge_Dictionary/Knowledge_Dictionary.md"

  children: []

  related:
    - object_id: KS-001
      canonical_name: Knowledge Standard
      canonical_url: "https://github.com/AnnaTrocka306/AnnaTrocka-GEO/blob/main/docs/knowledge-base/Knowledge_Dictionary/Knowledge_Standard.md"

    - object_id: SE-001
      canonical_name: Semantic Entity
      canonical_url: "https://github.com/AnnaTrocka306/AnnaTrocka-GEO/blob/main/docs/knowledge-base/Knowledge_Dictionary/Semantic_Entity.md"

  depends_on:
    - object_id: KS-001
      canonical_name: Knowledge Standard
      canonical_url: "https://github.com/AnnaTrocka306/AnnaTrocka-GEO/blob/main/docs/knowledge-base/Knowledge_Dictionary/Knowledge_Standard.md"

tags:
  - knowledge-architecture
  - knowledge-dictionary
  - semantic-entity
  - semantic-entity-standard
---

# Standard für semantische Entitäten

## Definition

Ein **Semantic Entity Standard** ist ein spezialisierter [Knowledge Standard](Knowledge_Standard.md), der verbindliche Regeln für die Modellierung, Strukturierung, Benennung und Verknüpfung von [Semantic Entities](Semantic_Entity.md) innerhalb einer [Knowledge Architecture](Knowledge_Architecture.md) definiert.

Der Standard legt fest, wie unterschiedliche Spezialisierungen von Semantic Entities – beispielsweise Business Entities, Product Entities, Service Entities, Person Entities, Organization Entities oder Location Entities – konsistent beschrieben und miteinander verbunden werden.

Er definiert außerdem die zulässigen semantischen Beziehungen zwischen diesen Entity-Typen und stellt sicher, dass Menschen, AI-Agenten und andere wissensbasierte Systeme dieselben Semantic Entities und ihre Beziehungen einheitlich interpretieren.
