---
document_id: KD-STD-001
canonical_name: Knowledge Dictionary Standard
german_name: Standard zur Erstellung des Knowledge Dictionary

document_type: Knowledge Standard
document_family: Knowledge Standards
architecture_layer: Knowledge Layer

canonical_language: de
supported_languages:
  - de
  - en
  - ru

status: Draft
version: 1.2.0

created_at: 2026-07-30
updated_at: 2026-07-30

owner: AnnaTrocka-GEO
---

# Knowledge Dictionary Standard

## Zweck

Das Knowledge Dictionary definiert die kanonischen Begriffe der Knowledge Architecture.

Jedes Dokument beschreibt ausschließlich die Bedeutung eines Begriffs.

Das Knowledge Dictionary erklärt keine Prozesse, Methoden, Arbeitsabläufe oder Anweisungen. Diese gehören in die entsprechenden Standards.

---

## Schreibregeln

Für jedes Knowledge Object gelten folgende Regeln:

- Ein Dokument beschreibt genau einen Begriff.
- Die Beschreibung ist kurz, eindeutig und präzise.
- Jedes Dokument wird als eigenständige Markdown-Datei (`.md`) erstellt.
- Jedes Dokument beginnt mit einem YAML Front Matter.
- Alle Definitionen werden in deutscher Sprache geschrieben.
- Offizielle Übersetzungen ins Englische und Russische sind zulässig, dürfen jedoch ausschließlich den Inhalt übersetzen und nicht verändern.

---

## Benennung

Der `canonical_name` enthält immer den kanonischen englischen Begriff.

Der `german_name` enthält die offizielle deutsche Bezeichnung des Begriffs.

Der Dokumenttitel (`#`) verwendet den `canonical_name`.

---

## Kanonische Definition

Für jeden Begriff existiert genau eine kanonische Definition.

Diese Definition ist die einzige autoritative Beschreibung des Begriffs innerhalb der gesamten Knowledge Architecture.

Andere Dokumente dürfen auf den Begriff verweisen, ihn jedoch nicht neu definieren oder anders interpretieren.

---

## Begriffliche Eindeutigkeit

Für dieselbe Bedeutung darf nur ein kanonischer Begriff existieren.

Neue Knowledge Objects dürfen nicht erstellt werden, wenn ein bestehender Begriff dieselbe oder eine wesentlich ähnliche Bedeutung besitzt.

Erweitert sich das fachliche Verständnis eines Begriffs, wird das bestehende Knowledge Object erweitert.

Neue Begriffe dürfen ausschließlich eingeführt werden, wenn sie ein neues eigenständiges Konzept beschreiben.

Die künstliche Vervielfachung semantisch ähnlicher Begriffe ist nicht zulässig.

---

## Verweise

Wird innerhalb einer Definition ein anderer Begriff des Knowledge Dictionary erwähnt, muss dieser als interner Verweis auf das entsprechende Knowledge Object erstellt werden.

Alle Beziehungen zwischen Knowledge Objects sollen explizit und maschinenlesbar sein.

Freitext ohne Verlinkung auf bestehende Knowledge Objects ist nicht zulässig, wenn für den Begriff bereits ein kanonisches Knowledge Object existiert.

---

## YAML Front Matter

Jedes Dokument des Knowledge Dictionary muss mit einem YAML Front Matter beginnen.

Das YAML Front Matter enthält die maschinenlesbaren Metadaten des Dokuments.

Ein Dokument ohne YAML Front Matter gilt als unvollständig.

---

## Sprache

Die kanonische Sprache der Definitionen ist Deutsch.

Automatische offizielle Übersetzungen in weitere Sprachen sind zulässig.

Dabei darf ausschließlich die Sprache geändert werden.

Die Bedeutung des Begriffs sowie seine semantischen Beziehungen dürfen nicht verändert werden.

---

## Ziel

Das Knowledge Dictionary soll:

- eindeutig sein;
- kompakt bleiben;
- langfristig stabil sein;
- maschinenlesbar sein;
- für Menschen leicht verständlich sein;
- eine einheitliche Terminologie für die gesamte Knowledge Architecture bereitstellen.
```
