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
repository_path: "Knowledge/Knowledge Objects/Knowledge_Object.md"
canonical_url: "https://github.com/AnnaTrocka306/AnnaTrocka-GEO/blob/main/Knowledge/Knowledge%20Objects/Knowledge_Object.md"

relationships:
  parent:
    object_id: KD-001
    canonical_name: Knowledge Dictionary
    canonical_url: "https://github.com/AnnaTrocka306/AnnaTrocka-GEO/blob/main/Knowledge/Knowledge%20Objects/Knowledge_Dictionary.md"

  children: []

  related:
    - object_id: CK-001
      canonical_name: Client Knowledge
      canonical_url: "https://github.com/AnnaTrocka306/AnnaTrocka-GEO/blob/main/Knowledge/Knowledge%20Objects/Client_Knowledge.md"

    - object_id: KC-001
      canonical_name: Knowledge Contribution
      canonical_url: "https://github.com/AnnaTrocka306/AnnaTrocka-GEO/blob/main/Knowledge/Knowledge%20Objects/Knowledge_Contribution.md"

  depends_on:
    - object_id: KD-001
      canonical_name: Knowledge Dictionary
      canonical_url: "https://github.com/AnnaTrocka306/AnnaTrocka-GEO/blob/main/Knowledge/Knowledge%20Objects/Knowledge_Dictionary.md"

tags:
  - knowledge-architecture
  - knowledge-dictionary
  - knowledge-object
  - canonical-terminology
---

# Knowledge Standard
## Knowledge Dictionary Standard

---

# Purpose

This standard defines the mandatory structure, metadata and writing rules for every Knowledge Object contained in the Knowledge Dictionary.

The objective of the Knowledge Dictionary is to provide one canonical definition for every architectural concept used within the AnnaTrocka-GEO Knowledge Architecture.

---

# Scope

This standard applies to every document stored in the **Knowledge Dictionary**.

No Knowledge Object may deviate from this standard.

---

# Canonical Language

The canonical language of the Knowledge Dictionary is **German**.

Every canonical definition shall be written in German.

English serves as the technical language for the repository architecture, identifiers, filenames and metadata.

Additional translations may be created in the future but shall never modify the canonical meaning of a Knowledge Object.

---

# Knowledge Object

Each Knowledge Object shall describe exactly one concept.

Each Knowledge Object shall contain exactly one canonical definition.

A Knowledge Object shall never describe multiple independent concepts.

---

# Canonical Definition

Each concept has exactly one canonical definition.

The canonical definition represents the authoritative meaning of the concept within the Knowledge Architecture.

Translations may translate the definition but shall never extend, reinterpret or modify its meaning.

---

# Concept Stability

A new Knowledge Object shall only be created when it represents a genuinely new concept.

Additional explanations, clarifications or improvements shall extend the existing Knowledge Object instead of creating similar or overlapping concepts.

---

# File Naming

All filenames shall use English.

Example:

Knowledge_Object.md

Recommendation_Goal.md

Knowledge_Contribution.md

---

# Metadata

Every Knowledge Object shall contain a YAML Front Matter.

The YAML metadata shall use English.

The metadata structure shall remain consistent across the entire repository.

---

# Document Structure

Every Knowledge Object shall follow the same structure.

1. YAML Front Matter
2. German title
3. Definition

Additional sections may be introduced by future standards but shall remain consistent across all Knowledge Objects.

---

# Writing Rules

Every definition shall:

- define the concept clearly;
- remain concise;
- avoid ambiguity;
- avoid implementation details;
- avoid workflows;
- avoid tutorials;
- avoid recommendations;
- avoid marketing language.

The purpose of the Knowledge Dictionary is to define concepts, not to explain how they are used.

---

# Maintenance

Knowledge Objects may evolve over time.

The canonical definition may only change when the concept itself changes.

Editorial improvements shall not alter the semantic meaning of the concept.

---

# Completion

The Knowledge Dictionary is considered complete when every architectural concept is represented by exactly one canonical Knowledge Object following this standard.
