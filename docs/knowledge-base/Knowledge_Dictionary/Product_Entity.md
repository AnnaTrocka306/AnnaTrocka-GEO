---
object_id: PE-001

canonical_name: Product Entity
display_name_de: Produktentität
filename: Product_Entity.md

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
repository_path: "docs/knowledge-base/Knowledge_Dictionary/Product_Entity.md"
canonical_url: "https://github.com/AnnaTrocka306/AnnaTrocka-GEO/blob/main/docs/knowledge-base/Knowledge_Dictionary/Product_Entity.md"

relationships:
  parent:
    object_id: SE-001
    canonical_name: Semantic Entity
    canonical_url: "https://github.com/AnnaTrocka306/AnnaTrocka-GEO/blob/main/docs/knowledge-base/Knowledge_Dictionary/Semantic_Entity.md"

  children: []

  related:
    - object_id: SES-001
      canonical_name: Semantic Entity Standard
      canonical_url: "https://github.com/AnnaTrocka306/AnnaTrocka-GEO/blob/main/docs/knowledge-base/Knowledge_Dictionary/Semantic_Entity_Standard.md"

    - object_id: BE-001
      canonical_name: Business Entity
      canonical_url: "https://github.com/AnnaTrocka306/AnnaTrocka-GEO/blob/main/docs/knowledge-base/Knowledge_Dictionary/Business_Entity.md"

  depends_on:
    - object_id: SE-001
      canonical_name: Semantic Entity
      canonical_url: "https://github.com/AnnaTrocka306/AnnaTrocka-GEO/blob/main/docs/knowledge-base/Knowledge_Dictionary/Semantic_Entity.md"

tags:
  - semantic-entity
  - product-entity
  - knowledge-architecture
---

# Produktentität

## Definition

Eine **Product Entity** ist eine Spezialisierung einer [Semantic Entity](Semantic_Entity.md), die ein Produkt innerhalb einer [Knowledge Architecture](Knowledge_Architecture.md) repräsentiert.

Sie dient als semantischer Bezugspunkt für produktbezogenes Wissen und ermöglicht die eindeutige Zuordnung von Informationen, Eigenschaften und Beziehungen zu einem bestimmten Produkt.

Die Regeln für die Modellierung, Strukturierung und Verknüpfung einer Product Entity mit anderen Semantic Entities werden im [Semantic Entity Standard](Semantic_Entity_Standard.md) definiert.
