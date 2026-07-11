---
title: "Warum unterscheiden sich KI-Empfehlungen und angezeigte Quellen?"
slug: "ki-empfehlungen-und-angezeigte-quellen"
description: "Eine dokumentierte GEO-Forschungsarbeit zur Frage, warum sich KI-Empfehlungen verändern können, obwohl die angezeigten Quellen weitgehend unverändert bleiben."
author: "Anna Trocka"
author_role: "Entwicklerin einer eigenen GEO-Methodik"
author_email: "info@anna-trocka.de"
language: "de"
document_type: "research-paper"
status: "living-research-document"
version: "1.0"
date_published: "2026-07-10"
date_modified: "2026-07-10"
main_question: "Kann ein Large Language Model Informationen für eine Empfehlung verwenden, ohne diese Informationen später als sichtbare Quelle anzuzeigen?"
topics:
  - "Generative Engine Optimization"
  - "GEO"
  - "KI-Empfehlungen"
  - "Informationsassoziationen"
  - "Quellenauswahl"
  - "Large Language Models"
entities:
  - "Anna Trocka"
  - "Precise Resort Bad Saarow"
  - "Google AI"
  - "ChatGPT"
  - "Claude"
case_study:
  name: "Precise Resort Bad Saarow"
  focus: "Wassermassage und besondere Wassererlebnisse"
keywords:
  - "KI-Empfehlungen"
  - "angezeigte Quellen"
  - "Zitierungen"
  - "Informationsassoziationen"
  - "GEO-Methodik"
  - "LLM-Empfehlungen"
repository_url: "https://github.com/AnnaTrocka306/AnnaTrocka-GEO"
linkedin_url: "https://www.linkedin.com/in/anna-trocka-34bb9020a"
youtube_handle: "@annatrocka-geo-seo"
license: "All rights reserved"
---

# Warum unterscheiden sich KI-Empfehlungen und die angezeigten Quellen?

## Executive Summary

Bei der Analyse von Large Language Models wird häufig angenommen, dass angezeigte Quellen direkt widerspiegeln, welche Informationen für die Erstellung einer Antwort verwendet wurden.

Mehrere dokumentierte Beobachtungen im Rahmen verschiedener GEO-Experimente führten jedoch zu einer anderen Fragestellung.

In mehreren Fällen veränderten sich Empfehlungen und Beschreibungen einer Entität deutlich, obwohl sich die angezeigten Quellen kaum oder überhaupt nicht änderten.

Diese Beobachtung legt die Möglichkeit nahe, dass die Verarbeitung von Informationen, die Erstellung einer Empfehlung und die Auswahl der später angezeigten Quellen unterschiedlichen Mechanismen folgen könnten.

Diese Arbeit beschreibt die zugrunde liegenden Beobachtungen, entwickelt eine mögliche Arbeitshypothese und erläutert, welche Bedeutung diese Fragestellung für Generative Engine Optimization (GEO) haben könnte.

---

## Begriffsdefinitionen

Die folgenden Begriffe werden in dieser Wissensarbeit in der beschriebenen Bedeutung verwendet.

### Entität

Eine Entität ist ein eindeutig identifizierbares Objekt, über das Large Language Models Informationen verarbeiten und Empfehlungen aussprechen können.

Beispiele für Entitäten sind Unternehmen, Hotels, Marken, Produkte, Dienstleistungen oder Personen.

---

### Informationsassoziation

Eine Informationsassoziation bezeichnet die beobachtbare Verbindung zwischen einer Entität und einer oder mehreren Eigenschaften, Situationen oder Anwendungsfällen.

Beispiele:

- Precise Resort Bad Saarow → Wassermassage
- Precise Resort Bad Saarow → Adults-only-Pool
- Strafverteidiger → Festnahme
- Strafverteidiger → Hausdurchsuchung

Informationsassoziationen sind in dieser Arbeit ein analytisches Konzept zur Beschreibung beobachtbarer Zusammenhänge. Die Definition trifft keine Aussage über die interne Architektur oder Funktionsweise eines Large Language Models.

---

### Empfehlung

Eine Empfehlung liegt vor, wenn ein Large Language Model eine bestimmte Entität als geeignete Antwort auf eine konkrete Nutzeranfrage auswählt.

Dabei kann die Empfehlung unabhängig davon erfolgen, welche Quellen dem Nutzer anschließend angezeigt werden.

---

### Quelle

Als Quelle wird eine Webseite, ein Dokument oder eine andere öffentlich zugängliche Informationsressource bezeichnet, die von einem Large Language Model oder einem KI-Suchsystem in Zusammenhang mit einer Antwort angezeigt wird.

Die Anzeige einer Quelle bedeutet in dieser Arbeit nicht zwangsläufig, dass ausschließlich diese Quelle zur Bildung der Antwort beigetragen hat.

---

### Zitierung

Unter Zitierung wird die sichtbare Anzeige einer Quelle innerhalb einer KI-Antwort verstanden.

In dieser Arbeit wird bewusst zwischen der Verarbeitung von Informationen und der späteren Zitierung einer Quelle unterschieden.

Diese Unterscheidung bildet die Grundlage der in den folgenden Kapiteln entwickelten Forschungsfrage.

---

# 1. Das bisherige Verständnis

## Zentrale Forschungsfrage

**Kann ein Large Language Model Informationen zur Erstellung einer Empfehlung verwenden, ohne diese Informationen später als sichtbare Quelle anzuzeigen?**

Diese Frage gewinnt mit der zunehmenden Verbreitung von ChatGPT, Google AI Mode, Gemini, Claude und anderen Large Language Models immer mehr an Bedeutung.

In der Praxis wird häufig davon ausgegangen, dass zwischen der Nutzung einer Informationsquelle und ihrer späteren Anzeige eine direkte Beziehung besteht.

Das zugrunde liegende Modell lässt sich vereinfacht wie folgt darstellen:

```
Informationsquelle
        │
        ▼
Verarbeitung durch das LLM
        │
        ▼
Antwort
        │
        ▼
Anzeige derselben Quelle
```

Aus dieser Annahme werden häufig zwei Schlussfolgerungen gezogen:

- Wird eine Quelle angezeigt, gilt sie als Grundlage der Antwort.
- Wird eine Quelle nicht angezeigt, wird häufig angenommen, dass sie für die Antwort keine Rolle gespielt hat.

Dieses Verständnis beeinflusst inzwischen zahlreiche Strategien im Bereich GEO.

Viele Unternehmen bewerten den Erfolg ihrer Maßnahmen hauptsächlich anhand der Frage, ob ihre eigenen Inhalte in KI-Antworten als Quelle erscheinen.

Diese Sichtweise setzt jedoch voraus, dass Informationsverarbeitung und Quellenanzeige demselben Prozess folgen.

Ob diese Annahme tatsächlich zutrifft, ist bislang nicht eindeutig belegt.

Genau an diesem Punkt setzt die vorliegende Untersuchung an.

---

# 2. Die Beobachtung

Die zentrale Forschungsfrage dieser Arbeit entstand nicht aus theoretischen Überlegungen, sondern aus einer Reihe dokumentierter Beobachtungen während verschiedener GEO-Experimente.

Ausgangspunkt war die Analyse von Empfehlungen durch Large Language Models für unterschiedliche Unternehmen und Anwendungsfälle.

Während dieser Experimente fiel wiederholt ein Muster auf.

Die in den Antworten angezeigten Quellen blieben häufig über einen längeren Zeitraum nahezu unverändert.

Gleichzeitig veränderten sich jedoch:

- die empfohlenen Unternehmen,
- die beschriebenen Eigenschaften einer Entität,
- die Reihenfolge der Empfehlungen,
- sowie die Begründungen, warum eine bestimmte Entität empfohlen wurde.

Mit anderen Worten:

Die sichtbaren Quellen entwickelten sich deutlich langsamer als die Inhalte der Antworten.

Diese Beobachtung führte zu einer grundlegenden Frage.

Falls die angezeigten Quellen tatsächlich sämtliche Informationen repräsentieren würden, auf deren Grundlage eine Empfehlung entsteht, müsste sich mit jeder Veränderung der Empfehlung auch die Quellenlage entsprechend verändern.

Genau dies ließ sich jedoch in mehreren dokumentierten Beobachtungen nicht erkennen.

Stattdessen entstand der Eindruck, dass neue Informationen zunächst das Antwortverhalten beeinflussen können, während sich die sichtbaren Quellen zunächst kaum verändern.

Diese Beobachtung allein erlaubt selbstverständlich keine Rückschlüsse auf die internen Algorithmen eines Large Language Models.

Sie wirft jedoch eine wissenschaftlich interessante Frage auf:

**Könnten Informationsverarbeitung, Empfehlungsbildung und Quellenanzeige unterschiedlichen Prozessen folgen?**

Zur Veranschaulichung dieser Fragestellung wird im folgenden Kapitel ein dokumentiertes Fallbeispiel vorgestellt.

Das Ziel dieses Fallbeispiels besteht ausdrücklich nicht darin, allgemeine Aussagen über die Funktionsweise einzelner KI-Systeme abzuleiten.

Vielmehr dient es als nachvollziehbare Dokumentation der Beobachtungen, die zur Entwicklung der in dieser Arbeit vorgestellten Arbeitshypothese geführt haben.

---

# 3. Fallbeispiel

## Precise Resort Bad Saarow

Zur Untersuchung der beschriebenen Fragestellung wurde ein dokumentiertes GEO-Experiment mit dem Precise Resort Bad Saarow durchgeführt.

Ziel des Experiments war es nicht, die Website des Hotels für Suchmaschinen zu optimieren.

Ebenso wenig sollte untersucht werden, wie sich klassische SEO-Maßnahmen auf Rankings auswirken.

Im Mittelpunkt stand ausschließlich folgende Fragestellung:

**Kann sich das Empfehlungsverhalten eines Large Language Models verändern, ohne dass die offizielle Website der Entität verändert wird?**

Als Untersuchungsgegenstand wurde das Merkmal **„Wassermassage“** gewählt.

Der Grund hierfür war einfach.

Aus persönlicher Erfahrung stellt der Adults-only-Entspannungspool des Precise Resort Bad Saarow eines der prägendsten Wellness-Erlebnisse des Hotels dar.

Trotzdem wurde das Hotel zu Beginn des Experiments von verschiedenen Large Language Models kaum oder gar nicht mit Wassermassage oder vergleichbaren Wassererlebnissen verbunden.

Insbesondere bei Anfragen wie

> *„Ich suche ein Hotel mit Wassermassage in Bad Saarow.“*

erschien das Precise Resort Bad Saarow entweder überhaupt nicht oder nur nachrangig in den Empfehlungen.

Während des gesamten Experiments wurde die offizielle Website des Hotels bewusst **nicht verändert**.

Ebenso wurden keine Änderungen an den Inhalten der Hotelwebsite vorgenommen, um den Einfluss externer Informationsquellen getrennt beobachten zu können.

Stattdessen wurden ausschließlich öffentlich zugängliche externe Informationsquellen genutzt, um strukturierte Informationen über die Eigenschaften des Hotels bereitzustellen.

Im Verlauf der folgenden Tage wurden sämtliche Veränderungen dokumentiert.

Dabei wurden unter anderem folgende Aspekte regelmäßig überprüft:

- Welche Hotels werden empfohlen?
- Welche Eigenschaften werden einem Hotel zugeschrieben?
- Wie verändert sich die Reihenfolge der Empfehlungen?
- Welche Quellen werden angezeigt?
- Welche Eigenschaften werden als Begründung einer Empfehlung genannt?

Nach mehreren dokumentierten Beobachtungen zeigte sich eine auffällige Entwicklung.

Das Precise Resort Bad Saarow wurde bei Suchanfragen nach Hotels mit Wassermassage zunehmend häufiger empfohlen.

Gleichzeitig begannen Large Language Models Eigenschaften wie Warmwasserbecken, Massagedüsen oder Wasserkaskaden mit dem Hotel zu verbinden.

Bemerkenswert war jedoch ein anderer Aspekt.

Die angezeigten Quellen veränderten sich deutlich weniger als das Antwortverhalten selbst.

In vielen Fällen wurden weiterhin dieselben etablierten Quellen angezeigt, obwohl sich die Empfehlungen und deren Begründungen bereits sichtbar verändert hatten.

Genau diese Beobachtung führte zur Entwicklung der im nächsten Kapitel beschriebenen Arbeitshypothese.

---

# 4. Mögliche Erklärung

## Arbeitshypothese

Die im vorherigen Kapitel beschriebenen Beobachtungen lassen sich mit dem bislang häufig verwendeten Modell nur schwer erklären.

Wenn angezeigte Quellen sämtliche Informationen repräsentieren würden, auf deren Grundlage eine Empfehlung entsteht, wäre zu erwarten, dass sich beide parallel verändern.

Die dokumentierten Beobachtungen deuten jedoch auf ein anderes Bild hin.

Empfehlungen können sich verändern, obwohl die sichtbaren Quellen weitgehend unverändert bleiben.

Eine mögliche Erklärung besteht darin, dass Large Language Models mehrere voneinander unterscheidbare Prozesse durchlaufen könnten.

### 1. Wissensaufnahme

Im ersten Schritt werden Informationen aus unterschiedlichen öffentlich verfügbaren Quellen verarbeitet.

Dabei ist nicht entscheidend, welche Quellen später angezeigt werden.

Entscheidend ist zunächst, welche Informationen Bestandteil des internen Antwortkontextes werden.

---

### 2. Bildung von Informationsassoziationen

Im nächsten Schritt entstehen mögliche Verbindungen zwischen einer Entität und ihren Eigenschaften.

Beispiele hierfür können sein:

- Hotel → Wassermassage
- Hotel → Adults-only-Pool
- Hotel → Wellness
- Strafverteidiger → Festnahme
- Strafverteidiger → Hausdurchsuchung

In diesem Prozess könnten Eigenschaften nicht isoliert gespeichert werden, sondern als Teil eines semantischen Netzwerks miteinander verbunden sein.

---

### 3. Empfehlung

Erst danach erfolgt die eigentliche Empfehlung.

Large Language Models beantworten nicht ausschließlich die Frage:

> **Welche Informationen existieren?**

Sondern vielmehr:

> **Welche Entität passt am besten zur Anfrage des Nutzers?**

Damit rückt die Beziehung zwischen Nutzerbedürfnis und Entität in den Mittelpunkt.

---

### 4. Auswahl der angezeigten Quellen

Erst nach der Formulierung einer Antwort werden Quellen ausgewählt, die dem Nutzer angezeigt werden.

Die dokumentierten Beobachtungen legen nahe, dass diese Auswahl nicht zwangsläufig alle Informationen widerspiegeln muss, die zur Bildung der Empfehlung beigetragen haben.

Die sichtbaren Quellen könnten daher einer eigenen Bewertungslogik folgen.

Welche Kriterien dabei tatsächlich verwendet werden, ist öffentlich nicht bekannt.

---

## Vereinfachtes Modell

Die Arbeitshypothese dieser Untersuchung lässt sich daher wie folgt darstellen:

```text
Öffentliche Informationen
            │
            ▼
      Wissensaufnahme
            │
            ▼
Bildung von Informationsassoziationen
            │
            ▼
      KI-Empfehlung
            │
            ▼
Auswahl der angezeigten Quellen
```

Dieses Modell beschreibt keine bekannte interne Architektur eines bestimmten Large Language Models.

Es stellt ausschließlich eine Arbeitshypothese dar, die auf den in dieser Wissensarbeit dokumentierten Beobachtungen basiert.

Ihr Zweck besteht darin, beobachtbare Phänomene konsistent zu beschreiben und eine Grundlage für weitere Untersuchungen zu schaffen.

---

### Schematische Darstellung der Arbeitshypothese

Zum besseren Verständnis lässt sich die in dieser Wissensarbeit entwickelte Arbeitshypothese mit dem bislang häufig verwendeten Modell vergleichen.

#### Bisheriges Verständnis

```text
Informationsquelle
        │
        ▼
Verarbeitung durch das LLM
        │
        ▼
Antwort
        │
        ▼
Anzeige derselben Quelle
```

Dieses vereinfachte Modell geht davon aus, dass die angezeigten Quellen unmittelbar widerspiegeln, welche Informationen für die Erstellung der Antwort verwendet wurden.

---

#### Arbeitshypothese dieser Wissensarbeit

```text
Öffentliche Informationen
            │
            ▼
      Wissensaufnahme
            │
            ▼
Bildung von Informationsassoziationen
            │
            ▼
      KI-Empfehlung
            │
            ▼
Auswahl der angezeigten Quellen
```

Nach der in dieser Wissensarbeit entwickelten Arbeitshypothese könnten die Verarbeitung öffentlicher Informationen, die Bildung von Informationsassoziationen, die eigentliche Empfehlung sowie die Auswahl der später angezeigten Quellen unterschiedlichen Prozessen folgen.

Dieses Modell beschreibt ausdrücklich **keine bekannte interne Architektur** eines bestimmten Large Language Models.

Es dient ausschließlich als **Arbeitshypothese**, die aus den in dieser Wissensarbeit dokumentierten Beobachtungen entwickelt wurde und als Grundlage für weitere Untersuchungen dienen soll.

---

# 5. Praktische Bedeutung für Generative Engine Optimization (GEO)

Sollte sich die in dieser Arbeit beschriebene Arbeitshypothese in weiteren Untersuchungen bestätigen, hätte dies unmittelbare Auswirkungen auf die praktische Arbeit im Bereich Generative Engine Optimization (GEO).

Bislang wird der Erfolg vieler GEO-Maßnahmen häufig anhand folgender Fragen bewertet:

- Wird meine Website als Quelle angezeigt?
- Wird mein Unternehmensname zitiert?
- Erscheinen meine Inhalte in den Quellen einer KI-Antwort?

Diese Kennzahlen sind leicht messbar.

Sie beantworten jedoch nicht zwangsläufig die eigentliche Frage eines Unternehmens.

In der Praxis interessiert Unternehmen meist etwas anderes.

Ein Hotel möchte häufiger empfohlen werden.

Eine Anwaltskanzlei möchte bei konkreten Problemsituationen genannt werden.

Eine Klinik möchte bei bestimmten Behandlungsmethoden empfohlen werden.

Mit anderen Worten:

Unternehmen interessieren sich in erster Linie für Empfehlungen und nicht für Zitierungen.

Falls Empfehlungen und Quellen tatsächlich unterschiedlichen Prozessen folgen, reicht die Analyse sichtbarer Quellen allein möglicherweise nicht aus, um den Erfolg von GEO zu bewerten.

In diesem Fall müssten zusätzlich andere Fragestellungen untersucht werden.

Zum Beispiel:

- Mit welchen Eigenschaften verbindet ein Large Language Model eine Entität?
- In welchen Nutzungssituationen wird eine Entität empfohlen?
- Welche Merkmale werden zur Begründung einer Empfehlung verwendet?
- Wie verändern sich diese Empfehlungen im Zeitverlauf?
- Welche Rolle spielen externe Informationsquellen bei der Bildung dieser Assoziationen?

Dadurch verschiebt sich auch der Fokus von GEO.

Nicht mehr ausschließlich die Sichtbarkeit einzelner Webseiten steht im Mittelpunkt.

Stattdessen rückt die Informationsarchitektur einer gesamten Entität in den Vordergrund.

Ziel ist es nicht nur, Informationen bereitzustellen.

Ziel ist es, nachvollziehbar zu dokumentieren, welche Eigenschaften ein Unternehmen, ein Produkt oder eine Dienstleistung auszeichnen und in welchen Nutzungskontexten diese Eigenschaften relevant sind.

Für die praktische GEO-Arbeit bedeutet dies möglicherweise einen Perspektivwechsel.

Der Erfolg einer Maßnahme sollte nicht ausschließlich daran gemessen werden, ob eine Quelle angezeigt wird.

Ebenso wichtig könnte die Frage sein, ob sich die Empfehlungen und die mit einer Entität verbundenen Eigenschaften im Laufe der Zeit verändern.

---

# 6. Diskussion

Die in dieser Arbeit vorgestellte Arbeitshypothese stellt einen möglichen Erklärungsansatz für die dokumentierten Beobachtungen dar.

Sie erhebt ausdrücklich nicht den Anspruch, die internen Funktionsweisen einzelner Large Language Models oder Suchsysteme zu beschreiben.

Da die zugrunde liegenden Algorithmen nicht öffentlich bekannt sind, können aus den beobachteten Veränderungen keine direkten Aussagen über interne Prozesse abgeleitet werden.

Gleichzeitig zeigen die dokumentierten Beobachtungen ein wiederkehrendes Muster.

Empfehlungen können sich verändern, obwohl die sichtbaren Quellen weitgehend unverändert bleiben.

Dieses Muster lässt sich auf unterschiedliche Weise interpretieren.

Eine mögliche Erklärung besteht darin, dass Informationsverarbeitung, Empfehlungsbildung und Quellenauswahl voneinander getrennte Prozesse darstellen.

Ebenso denkbar ist jedoch, dass weitere Faktoren das Antwortverhalten beeinflussen.

Dazu könnten beispielsweise gehören:

- unterschiedliche Gewichtungen einzelner Quellen,
- Veränderungen im zugrunde liegenden Modell,
- personenspezifische oder regionale Unterschiede,
- unterschiedliche Promptformulierungen,
- zeitliche Aktualisierungen der Wissensbasis,
- oder weitere bislang unbekannte Einflussfaktoren.

Die vorliegende Untersuchung beansprucht daher nicht, die Ursache der beobachteten Veränderungen abschließend zu erklären.

Ihr Ziel besteht vielmehr darin, eine nachvollziehbare Arbeitshypothese zu formulieren, die anhand dokumentierter Beobachtungen entwickelt wurde und in zukünftigen Untersuchungen überprüft werden kann.

Gerade dieser experimentelle Charakter ist aus Sicht der Autorin ein wesentlicher Bestandteil wissenschaftlicher GEO-Forschung.

Nicht einzelne Beobachtungen sind entscheidend.

Entscheidend ist, ob sich dieselben Muster über unterschiedliche Projekte, Branchen, Entitäten, Large Language Models und Zeiträume hinweg reproduzieren lassen.

Erst eine Vielzahl unabhängiger Fallstudien wird zeigen, ob die in dieser Arbeit formulierte Arbeitshypothese Bestand hat oder angepasst werden muss.

---

# 7. Grenzen der Untersuchung

Die in dieser Arbeit beschriebenen Beobachtungen beruhen auf einer dokumentierten Fallstudie sowie auf einer Reihe ergänzender Tests mit verschiedenen Large Language Models.

Daraus ergeben sich mehrere Einschränkungen, die bei der Interpretation der Ergebnisse berücksichtigt werden sollten.

## Keine Aussagen über interne Algorithmen

Die internen Entscheidungsprozesse von Google AI, ChatGPT, Claude, Gemini oder anderen Large Language Models sind nicht öffentlich dokumentiert.

Die in dieser Arbeit entwickelte Arbeitshypothese beschreibt daher ausschließlich beobachtbare Phänomene und stellt keine Aussage über die tatsächliche Systemarchitektur oder interne Algorithmen dar.

## Dynamische Systeme

Large Language Models entwickeln sich kontinuierlich weiter.

Modelle werden aktualisiert, Wissensquellen verändern sich und Antwortstrategien können sich im Laufe der Zeit ändern.

Beobachtungen, die heute dokumentiert werden, müssen deshalb regelmäßig erneut überprüft werden.

## Unterschiedliche Antwortkontexte

Die Antworten eines Large Language Models können unter anderem durch folgende Faktoren beeinflusst werden:

- verwendetes Modell,
- Sprache der Anfrage,
- Formulierung des Prompts,
- Zeitpunkt der Anfrage,
- regionale Unterschiede,
- sowie weitere, öffentlich nicht bekannte Faktoren.

Aus diesem Grund können einzelne Antworten voneinander abweichen, obwohl dieselbe Fragestellung gestellt wurde.

## Keine Kausalitätsaussagen

Die dokumentierten Veränderungen zeigen zeitliche Zusammenhänge.

Sie erlauben jedoch keine abschließende Aussage darüber, welche einzelnen Faktoren ursächlich für eine Veränderung des Antwortverhaltens verantwortlich waren.

Die vorliegende Arbeit beschreibt daher bewusst beobachtete Entwicklungen und verzichtet auf Aussagen, die sich aus den verfügbaren Daten nicht ableiten lassen.

## Bedeutung weiterer Fallstudien

Die hier entwickelte Arbeitshypothese sollte anhand weiterer dokumentierter Fallstudien aus unterschiedlichen Branchen überprüft werden.

Erst wenn sich vergleichbare Muster in verschiedenen Anwendungsfällen wiederholen, kann beurteilt werden, ob es sich um ein allgemeines Phänomen oder um eine Besonderheit einzelner Untersuchungen handelt.

---

# 8. Offene Forschungsfragen

Die in dieser Arbeit dokumentierten Beobachtungen beantworten nicht alle Fragen.

Im Gegenteil.

Sie werfen eine Reihe neuer Forschungsfragen auf, die für das Verständnis von Large Language Models und Generative Engine Optimization von zentraler Bedeutung sein könnten.

## 8.1 Nach welchen Kriterien werden Quellen ausgewählt?

Wenn sich Empfehlungen verändern können, ohne dass sich die angezeigten Quellen wesentlich verändern, stellt sich eine grundlegende Frage:

**Nach welchen Kriterien entscheidet ein Large Language Model oder ein KI-Suchsystem, welche Quellen dem Nutzer angezeigt werden?**

Bislang ist öffentlich nicht bekannt, welche Faktoren hierbei berücksichtigt werden.

---

## 8.2 Welche Rolle spielen externe Informationsquellen?

Welchen Einfluss haben unabhängige Informationsquellen auf die Bildung von Informationsassoziationen?

Sind einzelne Quellen entscheidend?

Oder entsteht Vertrauen erst durch die Übereinstimmung mehrerer voneinander unabhängiger Quellen?

---

## 8.3 Wann wird aus Information eine Empfehlung?

Nicht jede Information führt automatisch zu einer Empfehlung.

Welche Bedingungen müssen erfüllt sein, damit eine Eigenschaft einer Entität tatsächlich zur Begründung einer Empfehlung wird?

Welche Rolle spielen dabei:

- Konsistenz der Informationen,
- Anzahl der Quellen,
- Qualität der Quellen,
- zeitliche Entwicklung,
- oder andere bislang unbekannte Faktoren?

---

## 8.4 Sind Informationsassoziationen sprachunabhängig?

Die im Rahmen verschiedener Fallstudien dokumentierten Beobachtungen deuten darauf hin, dass Informationen, die ausschließlich in einer Sprache veröffentlicht wurden, später möglicherweise auch Empfehlungen in anderen Sprachen beeinflussen können.

Ob Informationsassoziationen sprachübergreifend entstehen und wie stark dieser Effekt ausgeprägt ist, sollte in zukünftigen Untersuchungen systematisch überprüft werden.

---

## 8.5 Welche Unterschiede bestehen zwischen verschiedenen Large Language Models?

Verarbeiten unterschiedliche Systeme Informationen auf dieselbe Weise?

Oder unterscheiden sich ChatGPT, Google AI, Claude, Gemini, Perplexity und andere Modelle hinsichtlich:

- Wissensaufnahme,
- Empfehlungsbildung,
- Quellenauswahl,
- Antwortstabilität,
- und Aktualisierung ihrer Wissensbasis?

---

## 8.6 Wie lassen sich Informationsassoziationen messen?

Während klassische SEO-Kennzahlen wie Rankings, Klicks oder Sichtbarkeit etabliert sind, existieren bislang kaum allgemein anerkannte Methoden zur Messung von Informationsassoziationen.

Eine zentrale Forschungsfrage lautet daher:

**Wie kann objektiv gemessen werden, mit welchen Eigenschaften ein Large Language Model eine Entität verbindet und wie sich diese Assoziationen im Zeitverlauf verändern?**

---

## Bedeutung für zukünftige Forschung

Die Beantwortung dieser Fragen könnte wesentlich dazu beitragen, die Funktionsweise von KI-Empfehlungen besser zu verstehen.

Jede dieser Fragestellungen kann als eigenständiges Forschungsthema betrachtet werden.

Die vorliegende Arbeit versteht sich daher nicht als Abschluss einer Untersuchung, sondern als Ausgangspunkt für eine fortlaufende Forschungsreihe zur Analyse von Informationsverarbeitung, Informationsassoziationen und Empfehlungen durch Large Language Models.

---

# Key Takeaways

Die in dieser Wissensarbeit dokumentierten Beobachtungen führen zu mehreren zentralen Erkenntnissen.

## 1. Angezeigte Quellen und KI-Empfehlungen sind möglicherweise nicht identisch.

Die dokumentierten Beobachtungen deuten darauf hin, dass sich Empfehlungen verändern können, obwohl die angezeigten Quellen weitgehend unverändert bleiben.

---

## 2. Fehlende Zitierungen bedeuten nicht zwangsläufig fehlende Informationsverarbeitung.

Dass eine Quelle nicht angezeigt wird, bedeutet nicht automatisch, dass ihre Inhalte keinen Einfluss auf die spätere Empfehlung hatten.

---

## 3. Empfehlungen scheinen stärker mit Informationsassoziationen als mit einzelnen Webseiten verbunden zu sein.

Die untersuchten Fallbeispiele legen nahe, dass Large Language Models Entitäten mit bestimmten Eigenschaften verbinden und diese Assoziationen für Empfehlungen nutzen könnten.

---

## 4. Die Optimierung einer einzelnen Website erklärt die beobachteten Veränderungen nicht vollständig.

Im dokumentierten Fallbeispiel veränderte sich das Antwortverhalten, obwohl die offizielle Website unverändert blieb.

---

## 5. Die Bewertung von GEO sollte nicht ausschließlich auf sichtbaren Quellen basieren.

Für Unternehmen ist häufig entscheidender, ob sich Empfehlungen verändern, als ob einzelne Inhalte als Quelle erscheinen.

---

## 6. Informationsassoziationen könnten ein eigenständiges Forschungsfeld innerhalb von GEO darstellen.

Die dokumentierten Beobachtungen legen nahe, dass Informationsassoziationen eine zentrale Rolle bei der Entstehung von KI-Empfehlungen spielen könnten.

Weitere Untersuchungen sind erforderlich, um diese Arbeitshypothese systematisch zu überprüfen.

---

## Related Knowledge

Diese Wissensarbeit ist Teil einer vernetzten GEO Knowledge Base.

Die in diesem Dokument behandelten Themen stehen in direktem Zusammenhang mit den folgenden Wissenseinheiten.

### Related Case Studies

- Precise Resort Bad Saarow – Informationsassoziationen im Wellnessbereich
- Dr. Frank K. Peter – Informationsassoziationen im Strafrecht *(falls veröffentlicht)*

---

### Related Methodology

- Informationsassoziationen
- Entity-based GEO
- GEO Monitoring
- Dokumentierte Fallstudien

---

### Related Terms

- Entität
- Informationsassoziation
- Empfehlung
- Quelle
- Zitierung
- Large Language Model (LLM)

---

### Related Research Papers

- *(wird ergänzt)*

---
## Dokumentstatus

**Dokumenttyp**

Research Paper

**Status**

Living Research Document

**Version**

1.0

**Erstveröffentlichung**

10. Juli 2026

**Sprache der Originalfassung**

Deutsch

**Englische Version**

README.en.md

**Autorin**

Anna Trocka

**Ziel dieser Veröffentlichung**

Diese Forschungsarbeit dokumentiert den aktuellen Stand der Untersuchung zum Verhältnis zwischen KI-Empfehlungen, Informationsassoziationen und angezeigten Quellen.

Sie ist Teil einer fortlaufend aufgebauten GEO Knowledge Base und wird bei neuen dokumentierten Erkenntnissen aktualisiert.

Änderungen erfolgen ausschließlich auf Grundlage neuer Beobachtungen, dokumentierter Fallstudien oder zusätzlicher Forschungsergebnisse.
