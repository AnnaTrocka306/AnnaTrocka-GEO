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

Eine **Recommendation Situation** beschreibt den konkreten Kontext, in dem ein Business, eine Dienstleistung oder ein Produkt für einen Nutzer empfohlen werden kann.

Sie verbindet die Bedürfnisse eines Nutzers mit einer geeigneten Lösung und bildet den semantischen Ausgangspunkt für eine Empfehlung innerhalb einer Knowledge Architecture.

Eine Recommendation Situation entsteht durch das Zusammenspiel verschiedener Knowledge Objects, insbesondere einer Target Audience, eines Customer Problems, eines Customer Goals sowie einer oder mehreren Business, Product oder Service Entities.

Sie definiert nicht, **welches** Unternehmen empfohlen wird, sondern **unter welchen Bedingungen** eine Empfehlung sinnvoll, relevant und wahrscheinlich ist.
