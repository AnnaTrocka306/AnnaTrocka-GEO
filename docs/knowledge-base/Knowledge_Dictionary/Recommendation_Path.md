---
object_id: RP-001

canonical_name: Recommendation Path
display_name_de: Empfehlungspfad
filename: Recommendation_Path.md

object_type: Knowledge Object
document_family: Knowledge Dictionary
architecture_layer: Recommendation Architecture

terminology_language: en
definition_language: de

available_translations:
  - en
  - ru

status: draft
version: 1.0.0

created_at: 2026-08-04
updated_at: 2026-08-04

authority: AnnaTrocka-GEO

repository: AnnaTrocka306/AnnaTrocka-GEO
repository_path: "docs/knowledge-base/Knowledge_Dictionary/Recommendation_Path.md"
canonical_url: "https://github.com/AnnaTrocka306/AnnaTrocka-GEO/blob/main/docs/knowledge-base/Knowledge_Dictionary/Recommendation_Path.md"

relationships:
  parent:
    object_id: KD-001
    canonical_name: Knowledge Dictionary
    canonical_url: "https://github.com/AnnaTrocka306/AnnaTrocka-GEO/blob/main/docs/knowledge-base/Knowledge_Dictionary/Knowledge_Dictionary.md"

  children: []

  related:
    - object_id: RG-001
      canonical_name: Recommendation Goal
      canonical_url: "https://github.com/AnnaTrocka306/AnnaTrocka-GEO/blob/main/docs/knowledge-base/Knowledge_Dictionary/Recommendation_Goal.md"

    - object_id: RGB-001
      canonical_name: Recommendation Graph Baseline
      canonical_url: "https://github.com/AnnaTrocka306/AnnaTrocka-GEO/blob/main/docs/knowledge-base/Knowledge_Dictionary/Recommendation_Graph_Baseline.md"

    - object_id: RGT-001
      canonical_name: Recommendation Graph Target
      canonical_url: "https://github.com/AnnaTrocka306/AnnaTrocka-GEO/blob/main/docs/knowledge-base/Knowledge_Dictionary/Recommendation_Graph_Target.md"

    - object_id: SE-001
      canonical_name: Semantic Entity
      canonical_url: "https://github.com/AnnaTrocka306/AnnaTrocka-GEO/blob/main/docs/knowledge-base/Knowledge_Dictionary/Semantic_Entity.md"

    - object_id: SR-001
      canonical_name: Semantic Relationship
      canonical_url: "https://github.com/AnnaTrocka306/AnnaTrocka-GEO/blob/main/docs/knowledge-base/Knowledge_Dictionary/Semantic_Relationship.md"

    - object_id: SPE-001
      canonical_name: Supporting Evidence
      canonical_url: "https://github.com/AnnaTrocka306/AnnaTrocka-GEO/blob/main/docs/knowledge-base/Knowledge_Dictionary/Supporting_Evidence.md"

  depends_on:
    - object_id: SE-001
      canonical_name: Semantic Entity
      canonical_url: "https://github.com/AnnaTrocka306/AnnaTrocka-GEO/blob/main/docs/knowledge-base/Knowledge_Dictionary/Semantic_Entity.md"

    - object_id: SR-001
      canonical_name: Semantic Relationship
      canonical_url: "https://github.com/AnnaTrocka306/AnnaTrocka-GEO/blob/main/docs/knowledge-base/Knowledge_Dictionary/Semantic_Relationship.md"

tags:
  - recommendation-architecture
  - recommendation-graph
  - recommendation-path
---

## Zweck

Der Recommendation Path dient dazu,

- bestehende Empfehlungsketten sichtbar zu machen;
- fehlende Empfehlungsketten zu identifizieren;
- die Qualität eines Recommendation Graph zu bewerten;
- den Recommendation Graph Baseline und den Recommendation Graph Target miteinander zu vergleichen;
- den Semantic Development Path abzuleiten;
- die Planung von Knowledge Contributions zu unterstützen.

---

## Bestandteile

Ein Recommendation Path besteht mindestens aus:

- einer oder mehreren [Semantic Entity](...);
- einer oder mehreren [Semantic Relationship](...);
- einer Zielentität innerhalb einer [Recommendation Goal](...).

Optional kann ein Recommendation Path zusätzlich durch [Supporting Evidence](...) gestützt werden.

---

## Eigenschaften

Ein Recommendation Path besitzt mindestens folgende Eigenschaften:

- Startpunkt;
- Endpunkt;
- Reihenfolge der Semantic Relationships;
- semantische Vollständigkeit;
- Nachvollziehbarkeit;
- fachliche Konsistenz.

---

## Verwendung

Recommendation Paths werden insbesondere verwendet in:

- [Recommendation Graph Baseline](...);
- [Recommendation Graph Target](...);
- Semantic Development Path;
- Knowledge Contribution.

---

## Abgrenzung

Ein Recommendation Path ist keine Semantic Relationship.

Eine Semantic Relationship beschreibt ausschließlich die Beziehung zwischen zwei Semantic Entities.

Ein Recommendation Path beschreibt dagegen eine vollständige Empfehlungskette, die aus mehreren Semantic Relationships bestehen kann.

---

## Bemerkung

Recommendation Paths bilden die zentrale strukturelle Einheit zur Analyse, Planung und Weiterentwicklung eines Recommendation Graph.

Sie ermöglichen es, bestehende und fehlende Empfehlungsketten systematisch zu identifizieren und gezielt weiterzuentwickeln.
