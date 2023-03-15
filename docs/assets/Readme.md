# Dokumentation

Speichern Sie in diesem Ordner alle Bilder, Videos oder andere Dateien, die Sie in den Beschreibungsdokumenten (z.B. Readme-Datei) benötigen bzw. verlinken. Falls Sie eine umfassendere Dokumentation oder ein Handbuch zu Ihrer Anwendung erstellen möchten, legen Sie die enstprechenden Dokumente hier ab.

Dokumentation: https://docs.google.com/document/d/1kDUQCmkgUJVbvP8XUK9JZuZSMctQliEtRpHi2zeR20Q/edit?usp=sharing
Trello-Board: https://trello.com/b/N71MYkis/bewerbungsmanager-board

# So sind die Daten in Firebase gespeichert:

- Authentication mit den erzeugten User-IDs. Als Sign-In Methode wurde der Google Sign-In festgelegt:
![image](https://user-images.githubusercontent.com/46745783/135498553-67843e56-c091-4fe9-8e11-9b5eb9096f77.png)

- Die Nutzerdaten wurden in der Realtime Database gespeichert:
- Zum einen die Bilder im Ordner "Pictures" mit der UserID als Namen und einen Link, über den auf die Bilder zugegriffen werden kann
![image](https://user-images.githubusercontent.com/46745783/135499054-9b542b50-6c24-41e8-9d2c-9475a18bd7bf.png)

- Die Nutzerdaten wurden im Ordner "Messages" gespeichert. Im Screenshot sind die Daten für den spezifischen Nutzer leer, deshalb sind die Values ein leerer String ("")
![image](https://user-images.githubusercontent.com/46745783/135499344-af4433d8-a19a-4ab4-84de-8a8c2e01ab77.png)

- Die Bilder werden außerdem unter "Storage" im Ordner "Pictures" gespeichert, wo ebenfalls der Link zu sehen ist
![image](https://user-images.githubusercontent.com/46745783/135499523-db4f2484-f0f3-4d68-8845-fd8ccb666b6f.png)
