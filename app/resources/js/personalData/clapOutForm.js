  // Hier wird das Aus- und Einklappen der Formular-Kategorien ermöglicht

  let heading = document.getElementById("ausbildung"),
    rollOutContent = document.getElementById("ausbildung1"),
    personal = document.getElementById("personal"),
    personal1 = document.getElementById("personal1"),
    skills = document.getElementById("skills"),
    skills1 = document.getElementById("skills1"),
    exp = document.getElementById("jobExperience"),
    exp1 = document.getElementById("jobExperience1"),
    arrowRight1 = document.querySelector(".arrow1"),
    arrowRight2 = document.querySelector(".arrow2"),
    arrowRight3 = document.querySelector(".arrow3"),
    arrowRight4 = document.querySelector(".arrow4");

  // diese Funktion zeigt oder versteckt eine Kategorie, wenn darauf geklickt wird. Außerdem ändert sich die Richtung der Pfeile
  function showOrHide(arrow, title, element){
    title.addEventListener("click", function(){
      if(window.getComputedStyle(element).display === "none"){
        element.style.display = "grid";
        arrow.style.transform = "rotate(45deg)";
      }
      else {
        element.style.display = "none";
        arrow.style.transform = "rotate(-45deg)";
      }
    });
  }

  showOrHide(arrowRight1,personal, personal1);
  showOrHide(arrowRight2,heading,rollOutContent);
  showOrHide(arrowRight3,skills, skills1);
  showOrHide(arrowRight4,exp, exp1);