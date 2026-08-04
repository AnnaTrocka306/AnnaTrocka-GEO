---
object_id: RP-001
canonical_name: Recommendation Path
german_name: Empfehlungspfad
object_type: Knowledge Object
document_family: Knowledge Dictionary
architecture_layer: Recommendation Architecture
canonical_language: de
supported_languages:
  - de
  - en
  - ru
status: draft
version: 0.1
created_at: 2026-08-04
updated_at: 2026-08-04
owner: Anna Trocka
---

# Recommendation Path

## Definition

Ein Recommendation Path beschreibt den vollständigen semantischen Pfad, über den eine Empfehlung innerhalb eines Recommendation Graph entsteht.

Er verbindet mehrere Semantic Entities über eine oder mehrere Semantic Relationships zu einer nachvollziehbaren Empfehlungskette.

Ein Recommendation Path beschreibt nicht einzelne Beziehungen, sondern deren semantische Kombination im Kontext einer konkreten Recommendation Goal.

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
