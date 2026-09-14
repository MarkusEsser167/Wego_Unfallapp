**WeGo VTI – Unfallaufnahme App**

**Dokumentation – HTML-Anleitungen für den Bereich Lager /
Staplerunfälle**

**Erstellt von:** Claude (Cowork) für Markus Esser, WeGo Systembaustoffe
GmbH

**Datum:** 14. September 2026

**Projekt:** Wego Unfall-App

**1. Ausgangslage und Auftrag**

Nachdem in einem vorangegangenen Arbeitsschritt geprüft wurde, dass die
bestehenden Anleitungen zur Unfallaufnahme-App nach Einführung der
Staplerunfall-/Lager-Funktion nicht mehr aktuell waren, wurden zunächst
Word-Dokumente (.docx) als Aktualisierung erstellt und übergeben.

Im Anschluss hat Markus die ursprünglichen HTML-Quelldateien der beiden
Anleitungen erneut in das Projektwissen hochgeladen, mit dem Auftrag,
diese direkt zu aktualisieren und dabei das bestehende Layout/Design
vollständig beizubehalten:

- Unfallaufnahme_Fahrer_Anleitung.html

- Unfallaufnahme_Kurzanleitung.html

Nach Abstimmung des Umfangs wurde der volle Umfang bestätigt: eine neue
Seite „Bereich wählen“ sowie ein vollständiger neuer Lager-Ablauf
(Sofortmaßnahmen, Staplerauswahl, Schadensangaben, Betroffene, Fotos &
Senden) als eigene Seiten im bestehenden Layout/Design.

**2. Durchgeführte Änderungen**

**2.1 Fahrer-Anleitung (Unfallaufnahme_Fahrer_Anleitung.html)**

Die Anleitung wurde von 8 auf 14 Seiten erweitert. Design, Farbschema,
Typografie und alle bestehenden CSS-Klassen wurden unverändert
übernommen; es wurden keine neuen CSS-Klassen im Stylesheet angelegt.
Neue Akzente für den Lager-Bereich (z. B. grüne Kopfzeilen-Kreise)
wurden über Inline-Styles auf Basis der bestehenden Farbpalette
umgesetzt.

Neue bzw. überarbeitete Seiten im Detail:

- Deckblatt: Version 2.0, Stand September 2026, aktualisiertes
  Inhaltsverzeichnis (8 Einträge)

- Sofortmaßnahmen Fuhrpark: letzter Punkt verweist neu auf die
  Bereichsauswahl

- NEU – Bereich wählen: Smartphone-Mockup mit den Kacheln „🚛 Fuhrpark“
  / „🏗 Lager“

- Ablauf Fuhrpark, Schritt 1 – Fahrzeugauswahl (inhaltlich unverändert,
  neue Fortschrittsanzeige)

- Ablauf Fuhrpark, Schritt 2 – Fahrer- & Unfallangaben: neue
  Schadensart-Liste, Führerschein-Nr. neu Pflichtfeld

- Ablauf Fuhrpark, Schritt 3 – Schadenart & Unfallgegner (überarbeitet):
  Umschalter Fahrzeugschaden/Sachschaden, getrennte Felder für Halter
  und Fahrer, Zeugenaustauschkarte, Polizei-Aktenzeichen/Dienststelle

- Ablauf Fuhrpark, Schritt 4 – Fotos: Hinweis auf Zeugenaustauschkarte
  ergänzt

- Ablauf Fuhrpark, Schritt 5 – Bericht senden: Hinweis auf PDF- und
  Word-Versand

- NEU – Ablauf Lager, Sofortmaßnahmen: stapler-spezifische Checkliste,
  grünes Farbschema

- NEU – Ablauf Lager, Schritt 1 – Staplerauswahl: Hallenauswahl, Hinweis
  auf fehlende automatische Standort-/km-Übernahme

- NEU – Ablauf Lager, Schritt 2 – Schadensangaben: Name, Telefon
  (optional), Ort, Betriebsstunden, Hergang, Schadensart

- NEU – Ablauf Lager, Schritt 3 – Betroffene: Mehrfachauswahl, Zeugen,
  Pflichtfeld „Vorgesetzter informiert?“

- NEU – Ablauf Lager, Schritt 4–5 – Fotos & Senden (kombinierte Seite)

- Wichtige Nummern & Hinweise: Versionsstand aktualisiert auf Version
  2.0 · September 2026

**2.2 Kurzanleitung (Unfallaufnahme_Kurzanleitung.html)**

Die zweiseitige Kurzanleitung (Vorderseite/Rückseite, für die
Aufbewahrung im Fahrzeug) benötigte nur punktuelle Anpassungen, da
Fahrzeugschaden/Sachschaden, Zeugenaustauschkarte und PDF+Word-Versand
bereits enthalten waren:

- Neue grüne Hinweisbox auf der Rückseite: „0 · Bereich wählen“ –
  Hinweis, beim App-Start zuerst die Kachel „🚛 Fuhrpark“ zu wählen;
  Verweis auf die separate Kurzanleitung „Lager“

- Neue CSS-Klasse .box.g (grüne Variante der bestehenden Hinweisbox,
  analog zu .box.y / .box.r) für diese Box ergänzt

- Versionsstand in beiden Fußzeilen aktualisiert: Version 2.1 · Stand
  September 2026

- Textliche Präzisierung im Hinweis „Kein Internet?“: PDF und
  Word-Dokument manuell anhängen und senden

**2.3 NEU – Kurzanleitung Lager
(Unfallaufnahme_Kurzanleitung_Lager.html)**

Aus Phase 1 lag bereits ein inhaltlicher Entwurf als .docx vor (v0.1,
fachlich/arbeitsschutzrechtlich noch nicht geprüft). Auf Wunsch von
Markus wurde daraus eine eigenständige, zweiseitige HTML-Kurzanleitung
im selben Design-System wie die Kurzanleitung Fuhrpark erstellt (gleiche
CSS-Klassen, grünes Lager-Farbschema analog zur Fahrer-Anleitung). Der
Entwurfs-Hinweis wurde auf Wunsch nicht in die HTML-Version übernommen.

- Vorderseite: Sofortmaßnahmen bei Stapler-/Lagerschaden (7 Punkte),
  rechtlicher Hinweis, Box „Was gehört zum Bericht?“, Wichtige Nummern

- Rückseite: App-Ablauf in 5 Schritten – 0 · Bereich wählen, 1 ·
  Geräteauswahl, 2 · Schadensangaben, 3 · Betroffene, 4 · Fotos, 5 ·
  Zusammenfassung & Senden

- Fußzeile: Version 1.0 · Stand September 2026

**3. Vorgehen und Qualitätssicherung**

Um die Wiederverwendung des im Original eingebetteten Logos (Base64-PNG)
effizient zu halten, wurde dieses einmalig extrahiert und beim Aufbau
beider Dokumente programmatisch wiederverwendet – am sichtbaren Ergebnis
ändert das nichts.

Beide HTML-Dateien wurden nach Fertigstellung automatisiert gerendert
(Chromium/Playwright) und als PDF sowie als Bildserie exportiert, um
layouttreue und seitengenaue Kontrolle sicherzustellen:

- Seitenhöhen wurden pixelgenau gegen die erwartete DIN-A4-Höhe geprüft
  (keine Überläufe/Leerseiten)

- Fahrer-Anleitung: alle 14 Seiten einzeln visuell kontrolliert

- Kurzanleitung Fuhrpark: beide Seiten einzeln visuell kontrolliert

- Kurzanleitung Lager: beide Seiten einzeln visuell kontrolliert

- Dabei gefundene Layoutfehler (u. a. abgeschnittene Fortschrittspunkte
  im Smartphone-Mockup bei 5 Schritten, verdeckte Fortschrittsanzeige
  auf einer überarbeiteten Seite, ein Seitenumbruch-Überlauf auf der
  letzten Seite der Fahrer-Anleitung) wurden identifiziert und behoben

**4. Ergebnis und Ablage**

Alle drei HTML-Dateien wurden in das Projektwissen „Wego Unfall-App“
geschrieben (die beiden bestehenden Dateien wurden ersetzt, die
Kurzanleitung Lager ist neu hinzugekommen) und stehen zusätzlich als
Download im OUTPUTS-Ordner dieser Sitzung zur Verfügung:

- Unfallaufnahme_Fahrer_Anleitung.html – 14 Seiten (aktualisiert)

- Unfallaufnahme_Kurzanleitung.html – 2 Seiten, Fuhrpark (aktualisiert)

- Unfallaufnahme_Kurzanleitung_Lager.html – 2 Seiten, Lager (neu)

Das bestehende Layout, die Farbgebung und die Struktur der Dokumente
wurden durchgängig beibehalten bzw. für die neue Kurzanleitung Lager 1:1
aus dem bestehenden Design-System abgeleitet.

**5. Offene Punkte / Empfehlung**

Aus fachlicher Sicht empfiehlt es sich, alle drei aktualisierten bzw.
neuen HTML-Anleitungen einmal mit den zuständigen Kolleginnen und
Kollegen aus Lager/Logistik gegenzulesen, bevor sie final in Umlauf
gebracht werden – insbesondere die neuen Pflichtfelder und die
Schadensart-Kategorien im Lager-Ablauf. Die Kurzanleitung Lager wurde
inhaltlich unverändert aus dem bereits vorliegenden Entwurf übernommen;
eine arbeitsschutzrechtliche Prüfung/Freigabe durch HSE bzw. die
zuständige Führungskraft steht noch aus, bevor sie im Lagerbereich
ausgehängt wird.
