import Config from "../utils/Config.js";

// Hier werden die Daten aus Firebase geholt und dem Nutzer angezeigt. Der Nutzer kann auf dieser Seite die Daten ansehen, bearbeiten oder löschen.

var techInputField = document.querySelector("#tech"),
  strenghtInputField = document.querySelector("#strenghts"),
  languagesInputField = document.querySelector("#languages"),
  interestsInputField = document.querySelector("#interests"),
  hobbiesInputField = document.querySelector("#hobbies"),
  workInputField = document.querySelector("#workExp"),
  imgName, imgUrl,
  files = [],
  reader;

let lastName, prename, birthdate, birthplace, email, phone, gender, street, residence, postal, uni, subject, degree, semester, 
    gradDate, grade, strenghts, techSkills, languages, interests, hobbies, employer, jobtitle, jobDuration,employer1, jobtitle1, duration1, employer2, jobtitle2, duration2, employer3, jobtitle3, duration3,
    strenght1, strenght2, strenght3, techSkills1, techSkills2, techSkills3, language1, language2, language3, interest1, interest2, interest3, hobbies1, hobbies2, hobbies3,
    personal1 = document.getElementById("personal1"),
    ausbildung1 = document.getElementById("ausbildung1"),
    skills1 = document.getElementById("skills1"),
    exp1 = document.getElementById("jobExperience1"),changeMode = document.getElementById("changeData"),
    fieldset = document.getElementById("fieldset");

// Formular ausklappen, damit alle Daten sofort sichtbar sind
personal1.style.display = "grid";
ausbildung1.style.display = "none";
skills1.style.display = "none";
exp1.style.display = "none";

// Bearbeitungsmodus "aktivieren", also Input Änderungen ermöglichen
changeMode.addEventListener("click", function(){
    fieldset.disabled = false;
});

function getInputValues(id){
    let element = document.getElementById(id);
    return element;
}

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

// die gespeicherten Daten von Firebase bekommen
function getStoredData(){
    var userRef;
    let keys;
    // eslint-disable-next-line no-undef
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            // eslint-disable-next-line no-undef
            keys = firebase.auth().currentUser.uid;
        }
        else {
          // Signed Out
        }
    });
    // um die Daten zu bekommen, wird in den "messages"-Ordner navigiert. Darin werden dann die Daten des jeweiligen Nutzers mittels seiner UID geholt.
    // eslint-disable-next-line no-undef
    userRef = firebase.database().ref("messages/");      
    userRef.once("value", function(snapshot){
        var data = snapshot.val();
        let personalData = data[keys];
        lastName.value = personalData.lastName;
        prename.value = personalData.prename;
        birthdate.value = personalData.birthdate;
        birthplace.value = personalData.birthplace;
        email.value = personalData.email;
        phone.value = personalData.phone;
        gender.value = personalData.gender;
        street.value = personalData.street;
        residence.value = personalData.residence;
        postal.value = personalData.postal;
        uni.value = personalData.uni;
        degree.value = personalData.degree;
        semester.value = personalData.semester;
        subject.value = personalData.subject;
        gradDate.value = personalData.gradDate;
        grade.value = personalData.grade;
        strenghts.value = personalData.strenghts;
        techSkills.value = personalData.techSkills;
        languages.value = personalData.languages;
        interests.value = personalData.interests;
        hobbies.value = personalData.hobbies;
        employer.value = personalData.employer;
        jobtitle.value = personalData.jobtitle;
        jobDuration.value = personalData.jobDuration;
        // Falls die Werte der "weitere hinzufügen"-Buttons nicht leer sind, werden dafür die Felder generiert
        if(personalData.hobbies1 !== ""){
            createInputFields(hobbiesInputField, personalData.hobbies1, "add-more-hobbies1");
        } else {
            createInputFieldsPlaceholder(hobbiesInputField,"", "add-more-hobbies1", "s Hobby");
        }
        if(personalData.hobbies2 !== ""){
            createInputFields(hobbiesInputField, personalData.hobbies2, "add-more-hobbies2");
        }else {
            createInputFieldsPlaceholder(hobbiesInputField,"", "add-more-hobbies2", "s Hobby");
        }
        if(personalData.hobbies3 !== ""){
            createInputFields(hobbiesInputField, personalData.hobbies3, "add-more-hobbies3");
        }else {
            createInputFieldsPlaceholder(hobbiesInputField,"", "add-more-hobbies3", "s Hobby");
        }

        if(personalData.strenght1 !== ""){
            createInputFields(strenghtInputField, personalData.strenght1, "add-more-strenghts1");
        } else {
            createInputFieldsPlaceholder(strenghtInputField,"", "add-more-strenghts1", " Stärken");
        }
        if(personalData.strenght2 !== ""){
            createInputFields(strenghtInputField, personalData.strenght2, "add-more-strenghts2");
        } else {
            createInputFieldsPlaceholder(strenghtInputField,"", "add-more-strenghts2", " Stärken");
        }
        if(personalData.strenght3 !== ""){
            createInputFields(strenghtInputField, personalData.strenght3, "add-more-strenghts3");
        } else {
            createInputFieldsPlaceholder(strenghtInputField,"", "add-more-strenghts3", " Stärken");
        }

        if(personalData.techSkills1 !== ""){
            createInputFields(techInputField, personalData.techSkills1, "add-more-tech1");
        }
        else {
            createInputFieldsPlaceholder(techInputField,"", "add-more-tech1", " Fähigkeiten");
        }
        if(personalData.techSkills2 !== ""){
            createInputFields(techInputField, personalData.techSkills2,"add-more-tech2");
        } else {
            createInputFieldsPlaceholder(techInputField,"", "add-more-tech2", " Fähigkeiten");
        }
        if(personalData.techSkills3 !== ""){
            createInputFields(techInputField, personalData.techSkills3, "add-more-tech3");
        }
        else {
            createInputFieldsPlaceholder(techInputField,"", "add-more-tech3", " Fähigkeiten");
        }

        if(personalData.language1 !== ""){
            createInputFields(languagesInputField, personalData.language1, "add-more-languages1");
        } else {
            createInputFieldsPlaceholder(languagesInputField,"", "add-more-languages1", " Sprachen");
        }
        if(personalData.language2 !== ""){
            createInputFields(languagesInputField, personalData.language2, "add-more-languages2");
        } else {
            createInputFieldsPlaceholder(languagesInputField,"", "add-more-languages2", " Sprachen");
        }
        if(personalData.language3 !== ""){
            createInputFields(languagesInputField, personalData.language3, "add-more-languages3");
        } else {
            createInputFieldsPlaceholder(languagesInputField,"", "add-more-languages3", " Sprachen");
        }

        if(personalData.interest1 !== ""){
            createInputFields(interestsInputField, personalData.interest1, "add-more-interests1");
        } else {
            createInputFieldsPlaceholder(interestsInputField,"", "add-more-interests1", " Interessen");
        }
        if(personalData.interest2 !== ""){
            createInputFields(interestsInputField, personalData.interest2, "add-more-interests2");
        }
        else {
            createInputFieldsPlaceholder(interestsInputField,"", "add-more-interests2", " Interessen");
        }
        if(personalData.interest3 !== ""){
            createInputFields(interestsInputField, personalData.interest3, "add-more-interests3");
        }else {
            createInputFieldsPlaceholder(interestsInputField,"", "add-more-interests3", " Interessen");
        }

        if(personalData.employer1 !== "" && personalData.jobtitle1 !== "" && personalData.duration1 !== ""){
            createWorkInputFields(workInputField, personalData.employer1, personalData.jobtitle1, personalData.duration1, "employer1", "jobtitle1", "duration1");
        }
        else {
            createWorkInputFieldsPlaceholder(workInputField,"", "", "", "employer1", "jobtitle1", "duration1", "Arbeitgeber 2", "Jobtitel 2", "Dauer 2");
        }
        if(personalData.employer2 !== "" && personalData.jobtitle2 !== "" && personalData.duration2 !== ""){
            createWorkInputFields(workInputField, personalData.employer2, personalData.jobtitle2, personalData.duration2,"employer2", "jobtitle2", "duration2");
        }
        else {
            createWorkInputFieldsPlaceholder(workInputField,"", "", "", "employer2", "jobtitle2", "duration2", "Arbeitgeber 3", "Jobtitel 3", "Dauer 3");
        }
        if(personalData.employer3 !== "" && personalData.jobtitle3 !== "" && personalData.duration3 !== ""){
            createWorkInputFields(workInputField, personalData.employer3, personalData.jobtitle3, personalData.duration3, "employer3", "jobtitle3", "duration3" );
        }  
        else {
            createWorkInputFieldsPlaceholder(workInputField,"", "", "", "employer3", "jobtitle3", "duration3", "Arbeitgeber 4", "Jobtitel 4", "Dauer 4");
        }

        // Hier wird das gespeicherte Bild des Users geladen
        // eslint-disable-next-line no-undef
        firebase.database().ref("Pictures/" + keys).on("value", function(snapshot){
          document.getElementById("myimg").src = snapshot.val().Link;
        });
        
        // diese IDs werden später für das Updaten der Daten benötigt
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
    });
}

// erstellen der Input-Felder
function createInputFields(inputID, addMoreField, idName){
    var div = document.createElement("div"),
    text;

    // Create a text input
    text = document.createElement("input");
    text.setAttribute("type", "text");
    text.setAttribute("id", idName);
    text.value = addMoreField;
    
    // add the file and text to the div
    div.classList.add("input-box");
    div.appendChild(text);
    inputID.parentElement.appendChild(div);
}

// erstellen der Input Felder. Falls sie leer sind, wird ein Platzhalter in die Felder gesetzt, damit der User weiß, um welche Felder es sich handelt.
function createInputFieldsPlaceholder(inputID, addMoreField, idName, placeholder){
    var div = document.createElement("div"),
    text;
    text = document.createElement("input");
    text.setAttribute("type", "text");
    text.setAttribute("placeholder", "weitere" + placeholder);
    text.setAttribute("id", idName);
    text.value = addMoreField;
    div.classList.add("input-box");
    div.appendChild(text);
    inputID.parentElement.appendChild(div);
}

function createWorkInputFields(inputID, addMoreField1, addMoreField2, addMoreField3, employerId, jobtitleId, durationId){
    var div = document.createElement("div"),
    text,
    text1,
    text2;

    text = document.createElement("input");
    text.setAttribute("type", "text");
    text.setAttribute("id", employerId);
    text.value = addMoreField1;
    text1 = document.createElement("input");
    text1.setAttribute("type", "text");
    text1.setAttribute("id", jobtitleId);
    text1.value = addMoreField2;
    text2 = document.createElement("input");
    text2.setAttribute("type", "text");
    text2.setAttribute("id", durationId);
    text2.value = addMoreField3;
    div.classList.add("input-box");
    div.appendChild(text);
    div.append(text1);
    div.append(text2);
    inputID.parentElement.appendChild(div);
}

function createWorkInputFieldsPlaceholder(inputID, addMoreField1, addMoreField2, addMoreField3, employerId, jobtitleId, durationId, placeholder1, placeholder2, placeholder3){
    var div = document.createElement("div"),
    text,
    text1,
    text2;

    text = document.createElement("input");
    text.setAttribute("type", "text");
    text.setAttribute("placeholder", placeholder1);
    text.setAttribute("id", employerId);
    text.value = addMoreField1;
    text1 = document.createElement("input");
    text1.setAttribute("type", "text");
    text1.setAttribute("placeholder", placeholder2);
    text1.setAttribute("id", jobtitleId);
    text1.value = addMoreField2;
    text2 = document.createElement("input");
    text2.setAttribute("type", "text");
    text2.setAttribute("placeholder", placeholder3);
    text2.setAttribute("id", durationId);
    text2.value = addMoreField3;
    div.classList.add("input-box");
    div.appendChild(text);
    div.append(text1);
    div.append(text2);
    inputID.parentElement.appendChild(div);
}

// Lade die gespeicherten Daten und zeige sie dem User
getStoredData();

// Löschen der Daten. Dabei wird der Firebase Eintrag des jeweiligen Nutzers entfernt und der Nutzer wird wieder zur initialen Dateneingabe geleitet.
document.querySelector(".Delete").onclick = function(){
    // eslint-disable-next-line no-undef
    firebase.database().ref("messages/" + firebase.auth().currentUser.uid).remove();
    document.querySelector(".alert#del").style.display = "block";
    setTimeout(function(){
        document.querySelector(".alert").style.display = "none";
    }, Config.DISPLAY_TIME_SUCCESS_MESSAGE);
    window.location = "../sites/personalData.html";
};

// Updaten der Daten:
window.addEventListener("load", function() {
    document.querySelector(".Updaten").onclick = function(){
        // eslint-disable-next-line no-undef
        firebase.database().ref("messages/" + firebase.auth().currentUser.uid).update({
            // if .value = null .value = ""
            lastName: lastName.value,
            prename: prename.value,
            birthdate: birthdate.value,
            birthplace: birthplace.value,
            email: email.value,
            phone: phone.value,
            gender: gender.value,
            street: street.value,
            residence: residence.value,
            postal: postal.value,
            uni: uni.value,
            subject: subject.value,
            degree: degree.value,
            semester: semester.value,
            gradDate: gradDate.value,
            grade: grade.value,
            strenghts: strenghts.value,
            techSkills: techSkills.value,
            languages: languages.value,
            interests: interests.value,
            hobbies: hobbies.value,
            employer: employer.value,
            jobtitle: jobtitle.value,
            jobDuration: jobDuration.value,
            strenght1: strenght1.value,
            strenght2: strenght2.value,
            strenght3: strenght3.value,
            techSkills1: techSkills1.value,
            techSkills2: techSkills2.value,
            techSkills3: techSkills3.value,
            language1: language1.value,
            language2: language2.value,
            language3: language3.value,
            interest1: interest1.value,
            interest2: interest2.value,
            interest3: interest3.value,
            hobbies1: hobbies1.value,
            hobbies2: hobbies2.value,
            hobbies3: hobbies3.value,
            employer1: employer1.value,
            jobtitle1: jobtitle1.value,
            duration1: duration1.value,
            employer2: employer2.value,
            jobtitle2: jobtitle2.value,
            duration2: duration2.value,
            employer3: employer3.value,
            jobtitle3: jobtitle3.value,
            duration3: duration3.value, 
        });
        document.querySelector(".alert#upd").style.display = "block";
        setTimeout(function(){
            document.querySelector(".alert").style.display = "none";
            scroll(0,0);
        }, Config.DISPLAY_TIME_SUCCESS_MESSAGE);
    };
});

// Bild auswählen und uploaden
// Bild auswählen
document.getElementById("select").onclick = function(){
    var input = document.createElement("input");
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
  
  // Bild hochladen
  document.getElementById("upload").onclick = function(){
    var uploadTask;
    imgName = document.getElementById("name").value;
      // eslint-disable-next-line no-undef
      uploadTask = firebase.storage().ref("Images/"+ firebase.auth().currentUser.uid + ".png").put(files[0]);
  
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
  
              // eslint-disable-next-line no-undef
              firebase.database().ref("Pictures/"+ firebase.auth().currentUser.uid).set({
                Name: imgName,
                Link: imgUrl,
              });
              document.getElementById("upProgress").innerHTML = "Upload war erfolgreich!";
          });
        });  
  };
  