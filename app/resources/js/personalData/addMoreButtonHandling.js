import Config from "../utils/Config.js";

// Hier werden die "Weitere Hinzufügen"-Buttons für das Formular erstellt
var techButton = document.querySelector("#add-more-tech"),
techInputField = document.querySelector("#tech"),
strenghtButton = document.querySelector("#add-more-strenghts"),
strenghtInputField = document.querySelector("#strenghts"),
languagesButton = document.querySelector("#add-more-languages"),
languagesInputField = document.querySelector("#languages"),
interestsButton = document.querySelector("#add-more-interests"),
interestsInputField = document.querySelector("#interests"),
hobbiesButton = document.querySelector("#add-more-hobbies"),
hobbiesInputField = document.querySelector("#hobbies");

// Hier wird der "weitere hinzufügen"-Button für die entsprechenden Einträge generiert
createAddMoreButtons(strenghtButton, strenghtInputField);
createAddMoreButtons(techButton, techInputField);
createAddMoreButtons(languagesButton, languagesInputField);
createAddMoreButtons(interestsButton, interestsInputField);
createAddMoreButtons(hobbiesButton, hobbiesInputField);

// "weitere hinzufügen"-Buttons erstellen, falls der Nutzer im Formular mehr als eine Eigenschaft eingeben will. Die Eingabe ist auf insgesamt 4 Eigenschaften begrenzt.
function createAddMoreButtons (buttonID, inputID) {
    let counter = 0,
    maxAdded = 3,
    counterToString,
    maxAddedToString;
  
      buttonID.addEventListener("click", function() {
        var div = document.createElement("div"),
        text; 
 
        // Text Input erstellen
        text = document.createElement("input");
        text.setAttribute("type", "text");
        text.setAttribute("placeholder", "Weitere hinzufügen");
        counter = counter + 1;
        counterToString = counter.toString();
        // Hier wird eine "unique" ID für jeden Button erstellt, damit die Inhalte später richtig gespeichert werden können
        text.setAttribute("id", buttonID.id + counterToString);
        // den Text zum div hinzufügen
        div.classList.add("input-box");
        div.appendChild(text);
  
        //Das div am container div anhängen
        inputID.parentElement.appendChild(div);
        maxAdded = maxAdded - 1;
        maxAddedToString = maxAdded.toString();
        buttonID.innerHTML = "Weitere hinzufügen (Max. " + maxAddedToString +")";
        // Counter hochzählen, damit nicht mehr als 4 Eigenschaften eingegeben werden können
        if(counter === Config.MAX_TIMES_BUTTON_CLICKED) {
          buttonID.style.display = "none";
        }
      });
  }
  
   // Hier werden der Button für zusätzliche Arbeitserfahrung erstellt. Da das Arbeitserfahrungs-Feld anders aufgebaut ist, wird hier eine Abänderung von "createAddMoreButtons" verwendet
   window.addEventListener("load", function() {
      var addMoreButtonExp = document.querySelectorAll("#expButton"),
        removeAddMoreButtonExp = document.querySelector("#expButton.add-more");
      let counterExp = 0,
          maxAddedExp = 3,
          maxAddedToStringExp;
      // bei jedem Klick werden gleich 3 Felder erstellt
      addMoreButtonExp.forEach(function(button){
        button.addEventListener("click", function() {
            var div = document.createElement("div"),
                text,
                text1,
                text2;  
          counterExp = counterExp + 1;
          let counterExpToString = counterExp.toString();
          text = document.createElement("input");
          text.style.marginBottom = "15px";
          text.setAttribute("type", "text");
          text.setAttribute("id", "employer" + counterExpToString);
          text.setAttribute("placeholder", "Arbeitgeber hinzufügen");  
          text1 = document.createElement("input");
          text1.style.marginBottom = "15px";
          text1.setAttribute("type", "text");
          text1.setAttribute("id", "jobtitle" + counterExpToString);
          text1.setAttribute("placeholder", "Jobtitel hinzufügen");
          text2 = document.createElement("input");
          text2.style.marginBottom = "15px";
          text2.setAttribute("type", "text");
          text2.setAttribute("id", "duration" + counterExpToString);
          text2.setAttribute("placeholder", "Dauer in Monaten");
          div.classList.add("input-box");
          div.appendChild(text);
          div.append(text1);
          div.append(text2);
          button.parentElement.appendChild(div);
          maxAddedExp = maxAddedExp - 1;
          maxAddedToStringExp = maxAddedExp.toString();
          removeAddMoreButtonExp.innerHTML = "Weitere hinzufügen (Max. " + maxAddedToStringExp +")";
          if(counterExp === Config.MAX_TIMES_BUTTON_CLICKED) {
            removeAddMoreButtonExp.style.display = "none";
          }
        });
      }); 
    }); 