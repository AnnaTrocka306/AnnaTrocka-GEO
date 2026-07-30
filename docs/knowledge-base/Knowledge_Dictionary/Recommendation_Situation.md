---
object_id: RS-001

canonical_name: Recommendation Situation
display_name_de: Empfehlungssituation
filename: Recommendation_Situation.md

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
repository_path: "docs/knowledge-base/Knowledge_Dictionary/Recommendation_Situation.md"
canonical_url: "https://github.com/AnnaTrocka306/AnnaTrocka-GEO/blob/main/docs/knowledge-base/Knowledge_Dictionary/Recommendation_Situation.md"

relationships:
  parent:

  children: []

  related:
    - object_id: BE-001
      canonical_name: Business Entity
      canonical_url: "https://github.com/AnnaTrocka306/AnnaTrocka-GEO/blob/main/docs/knowledge-base/Knowledge_Dictionary/Business_Entity.md"

    - object_id: CP-001
      canonical_name: Customer Problem
      canonical_url: "https://github.com/AnnaTrocka306/AnnaTrocka-GEO/blob/main/docs/knowledge-base/Knowledge_Dictionary/Customer_Problem.md"

    - object_id: CG-001
      canonical_name: Customer Goal
      canonical_url: "https://github.com/AnnaTrocka306/AnnaTrocka-GEO/blob/main/docs/knowledge-base/Knowledge_Dictionary/Customer_Goal.md"

    - object_id: TA-001
      canonical_name: Target Audience
      canonical_url: "https://github.com/AnnaTrocka306/AnnaTrocka-GEO/blob/main/docs/knowledge-base/Knowledge_Dictionary/Target_Audience.md"

  depends_on: []

tags:
  - recommendation
  - recommendation-situation
  - knowledge-architecture
  - geo
---

# Empfehlungssituation

## Definition

Eine **Recommendation Situation** beschreibt den konkreten Kontext, in dem eine [Business Entity](Business_Entity.md), eine [Service Entity](Service_Entity.md) oder eine [Product Entity](Product_Entity.md) für einen Nutzer empfohlen werden kann.

Sie verbindet die Bedürfnisse einer [Target Audience](Target_Audience.md) mit einer geeigneten Lösung und bildet den semantischen Ausgangspunkt für eine Empfehlung innerhalb einer [Knowledge Architecture](Knowledge_Architecture.md).

Eine Recommendation Situation entsteht durch das Zusammenspiel verschiedener Knowledge Objects, insbesondere einer [Target Audience](Target_Audience.md), eines [Customer Problems](Customer_Problem.md), eines [Customer Goals](Customer_Goal.md) sowie einer oder mehrerer [Business Entities](Business_Entity.md), [Product Entities](Product_Entity.md) oder [Service Entities](Service_Entity.md).

Sie definiert nicht, **welches** Unternehmen empfohlen wird, sondern **unter welchen Bedingungen** eine Empfehlung sinnvoll, relevant und wahrscheinlich ist.
