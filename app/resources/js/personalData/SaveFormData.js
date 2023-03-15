// Hier kann der User seine ersten Daten eingeben.
// Dabei werden die Input-Felder des Formulars abgefangen, und die eingegebenen Daten werden in Firebase gespeichert.

import Config from "../utils/Config.js";

var imgUrl,
  files = [],
  reader;

window.addEventListener("load", function() {
// eslint-disable-next-line no-undef
var messagesRef = firebase.database();
let lastName, prename, birthdate, birthplace, email, phone, gender, street, residence, postal, uni, subject,
    degree, semester, gradDate, grade, strenghts, techSkills, languages, interests, hobbies, employer, jobtitle,
    jobDuration, strenght1, strenght2, strenght3, techSkills1, techSkills2, techSkills3, interest1, interest2,
    interest3, language1, language2, language3, hobbies1, hobbies2, hobbies3, employer1, jobtitle1, duration1,
    employer2, jobtitle2, duration2, employer3, jobtitle3, duration3;

// Wenn das Formular gespeichert (submitted) wird, wird folgendes ausgeführt:
document.getElementById("formular").addEventListener("submit", submitForm);

// Submit Form
function submitForm(e){
    e.preventDefault();
    // hier werden alle Input-Felder geholt
    lastName = getInputValues("name");
    prename = getInputValues("prename");
    birthdate = getInputValues("birthday");
    birthplace = getInputValues("birthplace");
    email = getInputValues("email");
    phone = getInputValues("phone");
    gender = getInputValues("gender");
    street = getInputValues("street");
    residence = getInputValues("residence");
    postal = getInputValues("postal");

    uni = getInputValues("uni");
    subject = getInputValues("subject");
    degree = getInputValues("degree");
    semester = getInputValues("semester");
    gradDate = getInputValues("grad-date");
    grade = getInputValues("grade");

    strenghts = getInputValues("strenghts");
    techSkills = getInputValues("tech");
    languages = getInputValues("languages");
    interests = getInputValues("interests");
    hobbies = getInputValues("hobbies");

    employer = getInputValues("employer");
    jobtitle = getInputValues("jobtitle");
    jobDuration = getInputValues("duration");

    // hier werden die Werte der "weitere hinzufügen"-Buttons abgefangen. Falls diese leer oder nicht vorhanden sind, wird ein leerer String in Firebase gespeichert
    strenght1 = getInputValues("add-more-strenghts1");
    strenght2 = getInputValues("add-more-strenghts2");
    strenght3 = getInputValues("add-more-strenghts3");

    techSkills1 = getInputValues("add-more-tech1");
    techSkills2 = getInputValues("add-more-tech2");
    techSkills3 = getInputValues("add-more-tech3");

    language1 = getInputValues("add-more-languages1");
    language2 = getInputValues("add-more-languages2");
    language3 = getInputValues("add-more-languages3");

    interest1 = getInputValues("add-more-interests1");
    interest2 = getInputValues("add-more-interests2");
    interest3 = getInputValues("add-more-interests3");

    hobbies1 = getInputValues("add-more-hobbies1");
    hobbies2 = getInputValues("add-more-hobbies2");
    hobbies3 = getInputValues("add-more-hobbies3");

    employer1 = getInputValues("employer1");
    jobtitle1 = getInputValues("jobtitle1");
    duration1 = getInputValues("duration1");

    employer2 = getInputValues("employer2");
    jobtitle2 = getInputValues("jobtitle2");
    duration2 = getInputValues("duration2");

    employer3 = getInputValues("employer3");
    jobtitle3 = getInputValues("jobtitle3");
    duration3 = getInputValues("duration3");

    saveMessage(lastName, prename, birthdate, birthplace, email,phone, gender, street, residence, postal, uni, subject,degree,semester,gradDate,grade, strenghts,techSkills,languages,interests,hobbies,
       employer, jobtitle,jobDuration,employer1, jobtitle1, duration1, employer2, jobtitle2, duration2, employer3, jobtitle3, duration3,
       strenght1, strenght2, strenght3, techSkills1, techSkills2, techSkills3, language1, language2, language3, interest1, interest2, interest3, hobbies1, hobbies2, hobbies3);
    document.querySelector(".alert").style.display = "block";
    // Altert wird angezeigt, der den User darauf hinweist, dass das Speichern erfolgreich war. Anschließend wird der Nutzer zur Datenübersichtsseite geleitet.
    setTimeout(function(){
        document.querySelector(".alert").style.display = "none";
        window.location = "../sites/dataOverview.html";
    }, Config.DISPLAY_TIME_SUCCESS_MESSAGE);
     let fieldset = document.getElementById("fieldset");
    fieldset.disabled =true;
}

// Abfangen der Input Werte. Falls eine Input ID null ist, wird der Wert als leerer String zurückgegeben.
function getInputValues(id){
  let element = document.getElementById(id);
  if(element !== null){
    element = element.value;
  }
  else{
    element = "";
  }
  return element;
}

// Hier werden die Input-Werte in Firebase gespeichert
function saveMessage(lastName, prename, birthdate,birthplace,email,phone,gender,street,residence,postal, uni, subject, degree, semester, gradDate, grade,strenghts,techSkills,languages,interests,hobbies,
   employer, jobtitle, jobDuration, employer1, jobtitle1, duration1, employer2, jobtitle2, duration2, employer3, jobtitle3, duration3,
   strenght1, strenght2, strenght3, techSkills1, techSkills2, techSkills3, language1, language2, language3, interest1, interest2, interest3, hobbies1, hobbies2, hobbies3){
    // how the data is saved: messages --> UserID --> Content
    // eslint-disable-next-line no-undef
    messagesRef = messagesRef.ref("messages/" + firebase.auth().currentUser.uid);
    messagesRef.set({
            lastName: lastName,
            prename: prename,
            birthdate: birthdate,
            birthplace: birthplace,
            email: email,
            phone: phone,
            gender: gender,
            street: street,
            residence: residence,
            postal: postal,
            uni: uni,
            subject: subject,
            degree: degree,
            semester: semester,
            gradDate: gradDate,
            grade: grade,
            strenghts: strenghts,
            techSkills: techSkills,
            languages: languages,
            interests: interests,
            hobbies: hobbies,
            employer: employer,
            jobtitle: jobtitle,
            jobDuration: jobDuration,
            employer1: employer1,
            jobtitle1: jobtitle1,
            duration1: duration1,
            employer2: employer2,
            jobtitle2: jobtitle2,
            duration2: duration2,
            employer3: employer3,
            jobtitle3: jobtitle3,
            duration3: duration3,
            strenght1: strenght1,
            strenght2: strenght2,
            strenght3: strenght3,
            techSkills1: techSkills1,
            techSkills2: techSkills2,
            techSkills3: techSkills3,
            language1: language1,
            language2: language2,
            language3: language3,
            interest1: interest1,
            interest2: interest2,
            interest3: interest3,
            hobbies1: hobbies1,
            hobbies2: hobbies2,
            hobbies3: hobbies3,
    });
}

// Ab hier wird die Bildauswahl und das Uploaden des Bildes möglich
// Bildauswahl
document.getElementById("select").onclick = function(){
  var img = document.getElementById("person"),
    input = document.createElement("input");
  img.style.display = "none";
  input.type="file";

  input.onchange = e => {
    files =e.target.files;
    reader = new FileReader();
    reader.onload = function(){
      document.getElementById("myimg").src = reader.result;
    };
    reader.readAsDataURL(files[0]);
  };
  input.click();
};

// Bild-Upload
document.getElementById("upload").onclick = function(){
  var uploadTask;
    // Das Bild wird im Firebase-Storage im Ordner "Images" gespeichert
    // eslint-disable-next-line no-undef
    uploadTask = firebase.storage().ref("Images/"+ firebase.auth().currentUser.uid +".png").put(files[0]);

    uploadTask.on("state_changed", function(snapshot){ 
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * Config.UPLOAD_PROGRESS_HUNDRED;
        document.getElementById("upProgress").innerHTML = "Upload " + progress+"%";
      },
      function(error){
        document.getElementById("upProgress").innerHTML = "FEHLER: Upload war nicht erfolgreich!" + error;
      },
      function(){
        uploadTask.snapshot.ref.getDownloadURL().then(function(url){
            imgUrl = url;
            // Der Link des Bildes wird außerdem mit der UserID in der Firebase Realtime Database im Ordner "Pictures" gespeichert. Im gleichen Abschnitt sind im Ordner "Messages" die Nutzerdaten gespeichert.
            // eslint-disable-next-line no-undef
            firebase.database().ref("Pictures/"+firebase.auth().currentUser.uid).set({
              // eslint-disable-next-line no-undef
              Name: firebase.auth().currentUser.uid,
              Link: imgUrl,
            });
            document.getElementById("upProgress").innerHTML = "Upload war erfolgreich!";
        });
      });  
};

}); 