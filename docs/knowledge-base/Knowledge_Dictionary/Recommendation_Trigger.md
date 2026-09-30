---
object_id: "RT-001"

canonical_name: "Recommendation Trigger"

display_name_de: "Empfehlungs-Auslöser"

filename: "Recommendation_Trigger.md"

object_type: "Knowledge Object"

document_family: "Knowledge Dictionary"

architecture_layer: "Knowledge Layer"

terminology_language: "en"

definition_language: "de"

available_translations:
  - "en"

status: "draft"

version: "1.0.0"

created_at: "2026-09-30"

updated_at: "2026-09-30"

authority: "AnnaTrocka GEO"

repository: "AnnaTrocka306/AnnaTrocka-GEO"

repository_path: "docs/knowledge-base/Knowledge_Dictionary/Recommendation_Trigger.md"

canonical_url: "https://github.com/AnnaTrocka306/AnnaTrocka-GEO/blob/main/docs/knowledge-base/Knowledge_Dictionary/Recommendation_Trigger.md"

relationships:
  related:
    - object_id: "RS-001"
      canonical_name: "Recommendation Situation"
      canonical_url: "https://github.com/AnnaTrocka306/AnnaTrocka-GEO/blob/main/docs/knowledge-base/Knowledge_Dictionary/Recommendation_Situation.md"

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

# Empfehlungs-Auslöser

## Definition

Ein **Recommendation Trigger (Empfehlungs-Auslöser)** bezeichnet innerhalb der GEO-Methodik ein kontextbezogenes Informationsmuster, das dazu beiträgt, die Relevanz einer Entität innerhalb einer konkreten [Recommendation Situation](https://github.com/AnnaTrocka306/AnnaTrocka-GEO/blob/main/docs/knowledge-base/Knowledge_Dictionary/Recommendation_Situation.md) nachvollziehbar einzuordnen.

Ein Recommendation Trigger verbindet eine konkrete Situation, ein Bedürfnis, ein Problem oder ein Ziel mit Eigenschaften, Rollen oder Leistungen einer [Business Entity](https://github.com/AnnaTrocka306/AnnaTrocka-GEO/blob/main/docs/knowledge-base/Knowledge_Dictionary/Business_Entity.md), [Service Entity](https://github.com/AnnaTrocka306/AnnaTrocka-GEO/blob/main/docs/knowledge-base/Knowledge_Dictionary/Service_Entity.md) oder [Product Entity](https://github.com/AnnaTrocka306/AnnaTrocka-GEO/blob/main/docs/knowledge-base/Knowledge_Dictionary/Product_Entity.md).

Seine Funktion besteht nicht darin, eine neue Informationsarchitektur zu erzeugen, sondern bereits vorhandene Informationen so mit konkreten Anwendungs- und Entscheidungskontexten zu verbinden, dass die potenzielle Relevanz einer Entität innerhalb einer Recommendation Situation klarer erkennbar wird.

Recommendation Triggers können **positiv oder negativ** wirken. Positive Recommendation Triggers beschreiben Bedingungen und Informationsmuster, die für eine Empfehlung sprechen. Negative Recommendation Triggers beschreiben Bedingungen, unter denen eine Empfehlung nicht oder nur eingeschränkt relevant ist.

Ein Recommendation Trigger definiert damit nicht allein, **welche Entität empfohlen wird**, sondern liefert einen nachvollziehbaren Entscheidungsgrund dafür, **warum eine bestimmte Entität innerhalb einer konkreten Situation relevant oder nicht relevant sein kann**.
