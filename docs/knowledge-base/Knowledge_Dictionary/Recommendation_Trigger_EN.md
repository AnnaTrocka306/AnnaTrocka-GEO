---
object_id: "RT-001"

canonical_name: "Recommendation Trigger"

display_name_en: "Recommendation Trigger"

filename: "Recommendation_Trigger_EN.md"

object_type: "Knowledge Object"

document_family: "Knowledge Dictionary"

architecture_layer: "Knowledge Layer"

terminology_language: "en"

definition_language: "en"

available_translations:
  - "de"

status: "draft"

version: "1.0.0"

created_at: "2026-09-30"

updated_at: "2026-09-30"

authority: "AnnaTrocka GEO"

repository: "AnnaTrocka306/AnnaTrocka-GEO"

repository_path: "docs/knowledge-base/Knowledge_Dictionary/Recommendation_Trigger_EN.md"

canonical_url: "https://github.com/AnnaTrocka306/AnnaTrocka-GEO/blob/main/docs/knowledge-base/Knowledge_Dictionary/Recommendation_Trigger_EN.md"

translations:
  de:
    display_name: "Empfehlungs-Auslöser"
    canonical_url: "https://github.com/AnnaTrocka306/AnnaTrocka-GEO/blob/main/docs/knowledge-base/Knowledge_Dictionary/Recommendation_Trigger.md"

relationships:
  related:
    - object_id: "RS-001"
      canonical_name: "Recommendation Situation"
      canonical_url: "https://github.com/AnnaTrocka306/AnnaTrocka-GEO/blob/main/docs/knowledge-base/Knowledge_Dictionary/Recommendation_Situation_EN.md"

    - object_id: "BE-001"
      canonical_name: "Business Entity"
      canonical_url: "https://github.com/AnnaTrocka306/AnnaTrocka-GEO/blob/main/docs/knowledge-base/Knowledge_Dictionary/Business_Entity.md"

    - canonical_name: "Service Entity"
      canonical_url: "https://github.com/AnnaTrocka306/AnnaTrocka-GEO/blob/main/docs/knowledge-base/Knowledge_Dictionary/Service_Entity.md"

    - canonical_name: "Product Entity"
      canonical_url: "https://github.com/AnnaTrocka306/AnnaTrocka-GEO/blob/main/docs/knowledge-base/Knowledge_Dictionary/Product_Entity.md"

    - canonical_name: "Customer Problem"
      canonical_url: "https://github.com/AnnaTrocka306/AnnaTrocka-GEO/blob/main/docs/knowledge-base/Knowledge_Dictionary/Customer_Problem.md"

    - canonical_name: "Customer Goal"
      canonical_url: "https://github.com/AnnaTrocka306/AnnaTrocka-GEO/blob/main/docs/knowledge-base/Knowledge_Dictionary/Customer_Goal.md"

tags:
  - "recommendation-trigger"
  - "recommendation"
  - "matching"
  - "context"
  - "decision-logic"
  - "geo"
  - "knowledge-architecture"
---

# Recommendation Trigger

## Definition

A **Recommendation Trigger** describes, within the GEO methodology, a context-related information pattern that helps establish the relevance of an entity within a specific [Recommendation Situation](https://github.com/AnnaTrocka306/AnnaTrocka-GEO/blob/main/docs/knowledge-base/Knowledge_Dictionary/Recommendation_Situation_EN.md).

A Recommendation Trigger connects a specific situation, need, problem or goal with the attributes, roles or services of a [Business Entity](https://github.com/AnnaTrocka306/AnnaTrocka-GEO/blob/main/docs/knowledge-base/Knowledge_Dictionary/Business_Entity.md), [Service Entity](https://github.com/AnnaTrocka306/AnnaTrocka-GEO/blob/main/docs/knowledge-base/Knowledge_Dictionary/Service_Entity.md), or [Product Entity](https://github.com/AnnaTrocka306/AnnaTrocka-GEO/blob/main/docs/knowledge-base/Knowledge_Dictionary/Product_Entity.md).

Its function is not to create a new information architecture, but to connect existing information with concrete usage and decision contexts so that the potential relevance of an entity within a Recommendation Situation becomes more clearly identifiable.

Recommendation Triggers can function as **positive or negative triggers**. Positive Recommendation Triggers describe conditions and information patterns that support potential relevance for a recommendation. Negative Recommendation Triggers describe conditions under which a recommendation is not relevant or is relevant only to a limited extent.

A Recommendation Trigger therefore does not by itself define **which entity is recommended**. Instead, it provides a comprehensible decision reason for **why a particular entity may or may not be relevant within a specific situation**.
