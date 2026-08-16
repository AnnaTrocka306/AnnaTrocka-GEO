---
title: "Vom Marketing-Pitch zur Recommendation Logic"
subtitle: "Wie aus einem Nutzenversprechen eine maschinenverständliche GEO-Struktur entsteht"
document_type: "methodology_article"
language: "de"
status: "draft"
author: "Anna Trocka"
date: "2026-08-16"
...
---

# Vom Marketing-Pitch zur Recommendation Logic

## 1. Eine Beobachtung aus einem Recommendation Test

Im Rahmen meiner GEO-Arbeit verglich ich zwei Anbieter in derselben konkreten Empfehlungssituation.

Beide verfügten über die notwendige Expertise. Trotzdem empfahl das generative System einen Anbieter deutlich stärker – und die Begründung dafür war besonders interessant.

Beim ersten Anbieter waren vor allem **Rolle, Qualifikation und Fachkompetenz** klar erkennbar.

Beim zweiten Anbieter konnte das System zusätzlich eine vollständige Logik seiner Nützlichkeit erkennen:

**Situation → Problem → gewünschtes Ergebnis → Fähigkeit → Vorgehensweise → angestrebtes Ergebnis**

Das System konnte also nicht nur verstehen, **was dieser Anbieter kann**, sondern auch **wann er relevant ist, wobei er hilft, welches Ziel er verfolgt und wie er darauf hinarbeitet**.

Genau darin lag der entscheidende Unterschied.

Und diese Struktur kam mir sehr bekannt vor.

Denn im Grunde beschreibt sie nichts anderes als das, was ein guter Marketing-Pitch beantworten sollte:

> **Wem helfe ich? In welcher Situation? Bei welchem Problem? Was möchte ich erreichen? Und wie erreiche ich es?**

Daraus entstand eine einfache Frage:

> **Kann man einen Marketing-Pitch in Semantic Relationships übersetzen und daraus die Grundlage einer GEO-Strategie entwickeln?**

Genau das schauen wir uns im Folgenden an.

---

## 2. Vom Pitch zur GEO-Strategie

Die Idee ist einfach: Wir lesen einen Marketing-Pitch nicht nur als Werbetext, sondern als **Beschreibung gewünschter Beziehungen**.

Ein guter Pitch beantwortet im Kern:

**Wem helfe ich? → In welcher Situation? → Bei welchem Problem? → Welches Ziel verfolgen wir? → Was kann ich dafür tun? → Wie gehe ich dabei vor?**

Für GEO lässt sich daraus eine Struktur ableiten:

**[Recommendation Situation](../knowledge-base/Knowledge_Dictionary/Recommendation_Situation.md) → [Customer Problem](../knowledge-base/Knowledge_Dictionary/Customer_Problem.md) → [Customer Goal](../knowledge-base/Knowledge_Dictionary/Customer_Goal.md) → [Semantic Entity](../knowledge-base/Knowledge_Dictionary/Semantic_Entity.md) → Capability → Method → Intended Outcome**

Damit haben wir noch keine GEO-Strategie. Aber wir haben ein mögliches **Zielbild**.

### Schritt 1: Beziehungen extrahieren

Der Pitch wird in einzelne [Semantic Relationships](../knowledge-base/Knowledge_Dictionary/Semantic_Relationship.md) zerlegt.

Zum Beispiel:

**Entity → unterstützt → Zielgruppe**  
**Entity → ist relevant bei → Situation**  
**Entity → besitzt → Capability**  
**Entity → arbeitet mit → Method**  
**Method → zielt auf → Intended Outcome**

### Schritt 2: Zielbild mit der Realität vergleichen

Jetzt prüfen wir, welche dieser Beziehungen im aktuellen [Recommendation Graph Baseline](../knowledge-base/Knowledge_Dictionary/Recommendation_Graph_Baseline.md) bereits vorhanden sind.

**Welche Beziehungen existieren? Welche sind schwach? Welche fehlen?**

So werden die [Knowledge Gaps](../knowledge-base/Knowledge_Dictionary/Knowledge_Gap.md) zwischen gewünschter und aktuell wahrnehmbarer Positionierung sichtbar.

### Schritt 3: Fehlende Beziehungen entwickeln

Die relevanten Gaps werden priorisiert und über den [Semantic Development Path](../knowledge-base/Knowledge_Dictionary/Semantic_Development_Path.md) systematisch entwickelt.

Dafür werden passende [Supporting Evidence](../knowledge-base/Knowledge_Dictionary/Supporting_Evidence.md) und [Knowledge Contributions](../knowledge-base/Knowledge_Dictionary/Knowledge_Contribution.md) aufgebaut.

Die Logik ist damit:

**Marketing-Pitch**  
→ **Semantic Relationships**  
→ **Recommendation Graph Baseline**  
→ **Knowledge Gaps**  
→ **Semantic Development Path**  
→ **Supporting Evidence + Knowledge Contributions**  
→ **Recommendation Graph Target**

Der Pitch wird also nicht einfach für KI umgeschrieben.

**Er wird zur Vorlage dafür, welche Beziehungen wir überprüfen, belegen und gezielt entwickeln müssen, damit aus einer gewünschten Positionierung eine strukturierte GEO-Strategie entsteht.**

---

## 3. Was sich dadurch für GEO verändert

Der entscheidende Punkt ist: **Wir starten nicht beim Content. Wir starten bei der gewünschten Empfehlung.**

Wenn der Pitch beschreibt, wem eine [Semantic Entity](../knowledge-base/Knowledge_Dictionary/Semantic_Entity.md) in welcher [Recommendation Situation](../knowledge-base/Knowledge_Dictionary/Recommendation_Situation.md) wobei und auf welche Weise helfen kann, liefert er bereits einen möglichen Ausgangspunkt für das [Recommendation Goal](../knowledge-base/Knowledge_Dictionary/Recommendation_Goal.md).

Von dort arbeiten wir rückwärts:

**Welche Empfehlung wollen wir erreichen?**  
→ **Welche [Semantic Relationships](../knowledge-base/Knowledge_Dictionary/Semantic_Relationship.md) muss das System dafür verstehen können?**  
→ **Welche davon sind im [Recommendation Graph Baseline](../knowledge-base/Knowledge_Dictionary/Recommendation_Graph_Baseline.md) bereits vorhanden?**  
→ **Welche fehlen oder sind zu schwach?**  
→ **Welche Informationen und Belege brauchen wir, um sie aufzubauen?**

Erst danach entsteht Content.

Damit wird aus:

> **„Was sollen wir als Nächstes veröffentlichen?“**

eine wesentlich präzisere Frage:

> **„Welche Beziehung müssen wir als Nächstes stärken, damit die gewünschte Empfehlung wahrscheinlicher und nachvollziehbarer wird?“**

Die Antwort darauf bestimmt den [Semantic Development Path](../knowledge-base/Knowledge_Dictionary/Semantic_Development_Path.md) und anschließend die benötigten [Knowledge Contributions](../knowledge-base/Knowledge_Dictionary/Knowledge_Contribution.md).

Genau darin liegt für mich der Unterschied zwischen **Content produzieren** und **eine GEO-Strategie entwickeln**.

---

## 4. Der praktische Nutzen

Damit bekommt ein Marketing-Pitch eine zweite Funktion.

Er ist nicht mehr nur eine Botschaft für potenzielle Kunden, sondern kann als **Startpunkt für die gewünschte Positionierung im [Recommendation Graph Target](../knowledge-base/Knowledge_Dictionary/Recommendation_Graph_Target.md)** dienen.

Das macht den Einstieg in eine GEO-Strategie erstaunlich konkret:

**Pitch formulieren**  
→ **[Semantic Relationships](../knowledge-base/Knowledge_Dictionary/Semantic_Relationship.md) extrahieren**  
→ **[Recommendation Graph Baseline](../knowledge-base/Knowledge_Dictionary/Recommendation_Graph_Baseline.md) prüfen**  
→ **[Knowledge Gaps](../knowledge-base/Knowledge_Dictionary/Knowledge_Gap.md) identifizieren**  
→ **fehlende Beziehungen über den [Semantic Development Path](../knowledge-base/Knowledge_Dictionary/Semantic_Development_Path.md) entwickeln**

Natürlich ersetzt ein guter Pitch weder [Supporting Evidence](../knowledge-base/Knowledge_Dictionary/Supporting_Evidence.md) noch den systematischen Aufbau von [Knowledge Contributions](../knowledge-base/Knowledge_Dictionary/Knowledge_Contribution.md).

Aber er kann eine entscheidende Frage beantworten:

> **Welche Zusammenhänge soll ein generatives System über diese Entity verstehen, damit es sie in der richtigen Situation als relevant erkennen kann?**

Und genau deshalb kann ein guter Marketing-Pitch weit mehr sein als ein Verkaufssatz.

**Er kann der erste Entwurf des gewünschten [Recommendation Graph Target](../knowledge-base/Knowledge_Dictionary/Recommendation_Graph_Target.md) sein.**

---

## 5. Fazit

Ein guter Marketing-Pitch sagt im Kern:

**Für wen bin ich wann, warum und wie relevant?**

Genau diese Logik lässt sich für GEO nutzen.

Aus dem Pitch werden [Semantic Relationships](../knowledge-base/Knowledge_Dictionary/Semantic_Relationship.md). Aus den Relationships entsteht ein [Recommendation Graph Target](../knowledge-base/Knowledge_Dictionary/Recommendation_Graph_Target.md). Der Vergleich mit dem [Recommendation Graph Baseline](../knowledge-base/Knowledge_Dictionary/Recommendation_Graph_Baseline.md) zeigt die [Knowledge Gaps](../knowledge-base/Knowledge_Dictionary/Knowledge_Gap.md). Und aus diesen Gaps entsteht der [Semantic Development Path](../knowledge-base/Knowledge_Dictionary/Semantic_Development_Path.md).

Kurz gesagt:

**Pitch → Beziehungen → Gaps → GEO-Strategie.**

Der Marketing-Pitch ist damit nicht die GEO-Strategie selbst.

**Aber er kann ein erstaunlich guter Ausgangspunkt dafür sein.**
