# Features für [Projekttitle]

[Notieren und beschreiben Sie hier alle wesentlichen Funktionen bzw. *Features* Ihrer Anwendung. Seien Sie möglichst ausführlich in der Dokumentation und beachten Sie für die Erläuterungen ("Beschreibung") die Perspektive Ihrer NutzerInnen. Schätzen Sie initial den wahrscheinlichen Aufwand - auch um diese Schätzung am Ende des Projekts mit dem tatsächlichen Aufwand vergleichen zu können. Priorisieren Sie die Features hinsichtlich des zentralen *Use Case* Ihrer Anwendung und notieren Sie, welche größeren Bereiche der Anwendung von diesen Funktionen betroffen sind]

| Feature | Beschreibung | Priorität | Geschätzter Aufwand | Betroffene Schichten |
|---------|--------------|-----------|--------------------|---------------------|
| **Nutzerregistrierung/Login** | Dem Nutzer geben sich anzumelden oder zu registrieren | mittel | 2 Tage | Aufruf von der Startseite aus, aber findet Funktionalität in allen Teilen. |
| **Eingabe der Nutzerdaten** | Der Nutzer gibt einmalig seine Daten an, die als Basis für die Dokumenterstellung zählen| kritisch | 3 Tage | Ist Kernelement der Anwendung und betrifft alle Schichten |
| **Speichern der Nutzerdaten** | Hier werden die eingegebenen Nutzerdaten in der Google Cloud (Firebase) gespeichert| kritisch | 2 Tage | Trifft auf die Eingabe und Update der Nuttzerdaten zu. Die gespeicherten Daten werden im weiteren Verlauf der Anwendung verwendet |
| **Updaten der Nutzerdaten** | Der Nutzer kann seine anfangs eingegebene Daten überarbeiten | mittel | 1 Tag | Betrifft nur die Nutzereingabe |
| **Dokumentenerstellung** | Dokumente wie Lebenslauf und Bewerbungsschreiben werden auf Basis der Nutzerdaten, mit Hilfe der Google docs Api oder mit PDF JS erstellt | kritisch | 3 Tage | Eigene Schicht, die auf Nutzereingaben aufbaut |
| **Download der Dokumente** | Die erstellten Dokumente können als ZIP-Datei heruntergeladen werden | hoch | 1 Tag | Betrifft die Dokumentenerstellungsschicht |
| **Ordnerstruktur** | Jede einzelne Bewerbung wird in einem eigenen Ordner angelegt | mittel | 2 Tage | Betrifft die Dokumenterstellungsschicht |
| **Upload weiterer Dateien** | Der Nutzer soll die Möglichkeit haben, weiter Datein wie Zeugnisse hochzuladen. Dies geschieht entweder am Anfang bei der Nuterdateneingabe, kann aber auch später bearbeitet werden | nice-to-have | 1 Tag | Betrifft die Ordnerstruktur und die Eingabe der Nutzerdaten |
| **Templates** | Es werden verschiedene Templates für die Dokumenterstellung zur Verfügung gestellt | mittel | 1 Tag | Betrifft die Dokumenterstellung |
| **Templates für verschiedene Jobarten** | Je nach Branche, wird dem Nutzer das passende Template für das Bewerbungsschreiben erstellt. Zum Beispiel anderes Wording | mittel | 2 Tag | Betrifft die Dokumenterstellung |

## Umsetzung

- Als erstes soll das Interface erstellt werden
- Anschließend soll die Hauptfunktion, also die Dokumentenerstellung implementiert werden. 
- Dokumente speichern
- Download der Dokumente ermöglichen
- Eingabe der Nutzerdaten speichern. Änderung der Nutzerdaten ermöglichen
- Login Funktion
- Nice-to-have Features ergänzen
