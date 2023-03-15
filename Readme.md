# Projekt

Die geplanten Features der Anwendung werden [hier](./docs/Features.md) beschrieben. Das verwendete Software Design ist [hier](./docs/Design.md) zusammengefasst. Allgemeine Guidelines, die das Team im Rahmen des Projekts einhalten möchte werden [hier](./docs/Guidelines.md) zusammengetragen. Der Funktionsumfang der Anwendung wird [hier](./docs/Description.md) beschrieben. Beschreiben Sie [hier](./docs/Team.md) Ihr Entwicklungsteam. Eine Übersicht über alle notwendigen Dokumente finden Sie [hier](./docs/Readme.md).

**Ändern Sie den Inhalt dieser Datei nicht!**

## Vorgehen bei der Entwicklung

Die Mindestanforderungen für die Verwendung von `git` in diesem Projekt ist die Nutzung zweier Branches `master` und `dev`. Entwickeln Sie die Anwendung im `dev`-Branch und überführen Sie **ausschließlich** getestet und funktionierende Versionen der Anwendung per [Pull Request](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests) in den Master. Alle *Pull Request* müssen von mindestens einem Teammitglied (nicht den AutorInnen des *Pull Requests*) manuell geprüft und frei gegeben werden!

### Live Version der Anwendung

Nach jedem *Push* in den Master wird Ihre Anwendung automatisch gebaut und über diese Adresse [tba](tba) bereitgestellt (Wir richten dieses Setup für Sie ein, sobald die Projekte starten). Stellen Sie sicher, dass der aktuelle Inhalt des Masters jederzeit über die unten angegebenen Prozesse gebaut und gestartet werden kann. 

## Setup und Testing

Im Starterpaket ist ein einfacher Webserver vorgegeben, mit dem Sie die Inhalte des Ordners `/app` statisch ausliefern können. Benutzen Sie diesen, um Ihre Anwendung zu entwickeln und zu testen. Sollten Sie zu Realisierung Ihrer Anwendung eine komplexere Serverkomponente benötigen, können Sie die vorhandenen Dateien (`index.js` und `server/AppServer.js`) als Ausgangslage für eigene Erweiterungen nutzten. Speichern Sie alle weiteren, serverseitig verwendeten Dateien im Verzeichnis `/server` ab. Während der gesamten Projektzeit muss Ihre Anwendung **stets über die Eingabe des Befehls `npm start` automatisiert gebaut und gestartet werden können!**.

So nutzen Sie den vorgegebenen Server:

1. Führen Sie **einmalig** den Befehl `npm install` aus, um die notwendigen Abhängigkeiten (`express`) separat vom Startprozess zu installieren. Beim Aufruf des Befehls `npm start` werden automatisch auch der Befehl `npm install` und `npm run build` ausgeführt.

2. Führen Sie den Befehl `npm start` aus um die Anwendung zu starten. Der Inhalt des `/app`-Verzeichnis ist anschließend über die die Adresse `http://localhost:8000/app` erreichbar.
