/* eslint-disable no-undef */
/* eslint-disable camelcase */
/* eslint-env browser */

var zip,
    finalZip,
    doc,
    out,
    keys,
    outputBlob,
    folder,
    hobbies = new Array(),
    interests = new Array(),
    languages = new Array(),
    techSkills = new Array(),
    strenghts = new Array(),
    jobs = new Array(),
    jobs1 = new Array(),
    jobs2 = new Array(),
    jobs3 = new Array(),
    jobcheck = [true, true, true, true],
    image;

//In diesem Modul wird ein Word-Dokument auf Grundlage eines Templates aus dem Ordner cvTemplates generiert.

export function getStoredData(template, cat) {
    var userRef = firebase.database().ref("messages/");
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            keys = firebase.auth().currentUser.uid;
            userRef.on("value", function (snapshot) {
                var data = snapshot.val();
                firebase.database().ref("Pictures/"+firebase.auth().currentUser.uid).on("value", function(snapshot){
                    // eslint-disable-next-line no-unused-vars
                    image = snapshot.val().Link;
                });
                makeDoc(data, template, cat);
            });
        }
        else{
            // eslint-disable-next-line no-alert
            if(window.confirm("Bitte loggen Sie sich zuerst rechts oben ein und geben Sie Ihre Daten ein, sofern Sie dies nicht schon erledigt haben!")){
                //
            }
        }
    });
}

//Hier beginnt der eigentliche Teil, welcher für die Dokumenten-Generierung zuständig ist

//Der Key zum jeweiligen Firebase-Eintrag ... der wird später entsprechend dem aktuellen Nutzer ausgelesen

//Diese Funktion lädt ein Word-Dokument
function loadFile(url, callback) {
    PizZipUtils.getBinaryContent(url, callback);
}

//Diese Funktion kann übergebene Fehler ersetzen
function replaceErrors(_key, value) {
    if (value instanceof Error) {
        return Object.getOwnPropertyNames(value).reduce(function (error, key) {
            error[key] = value[key];
            return error;
        }, {});
    }
    return value;
}

//Kümmert sich um den Umgang mit Fehlern
function errorHandler(error) {
    if (error.properties && error.properties.errors instanceof Array) {
        const errorMessages = error.properties.errors.map(function (error) {
            return error.properties.explanation;
        }).join("\n");
        replaceErrors(error, errorMessages);
        // errorMessages is a humanly readable message looking like this:
        // 'The tag beginning with "foobar" is unopened'
    }
    throw error;
}

//Hier werden die Daten aus der Datenbank in das Dokument eingefügt und es wird heruntergeladen (Übergangslösung)
function makeDoc(data, template, cat) {
    //WeissenbacherTEST ist der erste Firebase-Eintrag, an dieser Stelle wird später also der, dem Nutzer zugehörigen Eintrag stehen.
    var personalData = data[keys];
    if(typeof personalData === "undefined"){
        // eslint-disable-next-line no-alert
        if(window.confirm("Es fehlen die nötigen Daten zum erstellen dieses Dokuments. Bestätigen Sie bitte mit OK um zur ensprechenden Seite weitergeleitet zu werden.")){
            window.location.href = "../sites/personalDataStartPage.html";
        }
    }
    loadFile(template, function (error, content) {
        if (error) { throw error; }

        zip = new PizZip(content);
        try {
            doc = new window.docxtemplater(zip, { paragraphLoop: true, linebreaks: true });  
        } catch (error) {
            errorHandler(error);
        }   

        createArrays();
        //Ersetzt die Platzhalter im Template durch die Werte aus der Firebase
        if (cat === "cv") {
            doc.setData({
                last_name: personalData.lastName,
                first_name: personalData.prename,
                birth_date: personalData.birthdate,
                birth_place: personalData.birthplace,
                street: personalData.street,
                postal: personalData.postal,
                city: personalData.residence,
                mail: personalData.email,
                phone: personalData.phone,
                gender: personalData.gender,
                uni: personalData.uni,
                subject: personalData.subject,
                graduation: personalData.degree,
                semester: personalData.semester,
                year: personalData.gradDate,
                grade: personalData.grade,
                job: jobs,
                job1: jobs1,
                job2: jobs2,
                job3: jobs3,
                jobCheck: jobcheck[0],
                jobcheck1: jobcheck[1],
                jobcheck2: jobcheck[1],
                jobcheck3: jobcheck[1],
                employer: personalData.employer,
                jobtitle: personalData.jobtitle,
                jobduration: personalData.jobDuration,
                techskills: techSkills,
                strenghts: strenghts,
                interests: interests,
                languages: languages,
                hobbies: hobbies,   
            });

            folder = "Bewerbungsunterlagen/Lebenslauf.docx";
        }
        else if (cat === "apli") {
            doc.setData({
                last_name: personalData.lastName,
                first_name: personalData.prename,
                street: personalData.street,
                postal: personalData.postal,
                city: personalData.residence,
                mail: personalData.email,
                phone: personalData.phone,
                job: personalData.jobtitle,
                employer: personalData.employer,
                strenghts: personalData.strenghts,
                techskills: personalData.techSkills,
                languages: personalData.languages,
                date: getDate(),
                addressee: getInputValues("addressee"),
                company: getInputValues("company"),
                jobtitle: getInputValues("job"),
                company_street: getInputValues("jobaddress"),
                company_city: getInputValues("place"),
                postalcode: getInputValues("postalcode"),
            });
            
            folder = "Bewerbungsunterlagen/Bewerbung.docx";
        }
        else {
            throw error;
        }

        try {
            doc.render();
        }
        catch (error) {
            errorHandler(error);
        }

        out = doc.getZip().generate({
            type: "arraybuffer",
            mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        });

        finalZip = new PizZip();
        finalZip.file(folder, out);
        outputBlob = finalZip.generate({
            type: "blob",
            mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        });

        //Lädt das Dokument herunter.
        saveAs(outputBlob, "Bewerbungsunterlagen.zip");     
    });
 
    function getDate() {
        let date = new Date(),
            // eslint-disable-next-line no-magic-numbers
            output = String(date.getDate()).padStart(2, "0") + "." + String(date.getMonth() + 1).padStart(2, "0") + "." + date.getFullYear();
        return output;
    }

    function getInputValues(id) {
        let element = document.getElementById(id);
        if (element !== null) {
            element = element.value;
        }
        else {
            element = "";
        }
        return element;
    }
    
    function createArrays(){
        //Hobbys
        var count = 0;
        if(personalData.hobbies !== ""){
            hobbies[count] = personalData.hobbies;
            count++;
        }
        if(personalData.hobbies1 !== ""){
            hobbies[count] = personalData.hobbies1;
            count++;
        }
        if(personalData.hobbies2 !== ""){
            hobbies[count] = personalData.hobbies2;
            count++;
        }
        if(personalData.hobbies3 !== ""){
            hobbies[count] = personalData.hobbies3;
            count++;
        }
        //Interessen
        count = 0;
        if(personalData.interests !== ""){
            interests[count] = personalData.interests;
            count++;
        }
        if(personalData.interest1 !== ""){
            interests[count] = personalData.interest1;
            count++;
        }
        if(personalData.interest2 !== ""){
            interests[count] = personalData.interest2;
            count++;
        }
        if(personalData.interest3 !== ""){
            interests[count] = personalData.interest3;
            count++;
        }
        //Sprachen
        count = 0;
        if(personalData.languages !== ""){
            languages[count] = personalData.languages;
            count++;
        }
        if(personalData.language1 !== ""){
            languages[count] = personalData.language1;
            count++;
        }
        if(personalData.language2 !== ""){
            languages[count] = personalData.language2;
            count++;
        }
        if(personalData.language3 !== ""){
            languages[count] = personalData.language3;
            count++;
        }
        //Stärken
        count=0;
        if(personalData.strenghts !== ""){
            strenghts[count] = personalData.strenghts;
            count++;
        }
        if(personalData.strenght1 !== ""){
            strenghts[count] = personalData.strenght1;
            count++;
        }
        if(personalData.strenght2 !== ""){
            strenghts[count] = personalData.strenght2;
            count++;
        }
        if(personalData.strenght3 !== ""){
            strenghts[count] = personalData.strenght3;
            count++;
        }
        //TechSkills
        count = 0;
        if(personalData.techSkills !== ""){
            techSkills[count] = personalData.techSkills;
            count++;
        }
        if(personalData.techSkills1 !== ""){
            techSkills[count] = personalData.techSkills1;
            count++;
        }
        if(personalData.techSkills2 !== ""){
            techSkills[count] = personalData.techSkills2;
            count++;
        }
        if(personalData.techSkills3 !== ""){
            techSkills[count] = personalData.techSkills3;
            count++;
        }
        //Jobs
        count = 0;
        if(personalData.employer !== ""){
            jobs[0] = personalData.employer;
        }
        if(personalData.employer1 !== ""){
            jobs1[0] = personalData.employer1;
        }
        if(personalData.employer2 !== ""){
            jobs2[0] = personalData.employer2;
        }
        if(personalData.employer3 !== ""){
            jobs3[0] = personalData.employer3;
        }
        if(personalData.jobDuration !== ""){
            jobs[1] = personalData.jobDuration;
        }
        if(personalData.duration1 !== ""){
            jobs1[1] = personalData.duration1;
        }
        if(personalData.duration2 !== ""){
            jobs2[1] = personalData.duration2;
        }
        if(personalData.duration2 !== ""){
            jobs3[1] = personalData.duration2;
        }
        if(personalData.jobtitle !== ""){
            jobs[2] = personalData.jobtitle;
        }
        if(personalData.jobtitle1 !== ""){
            jobs1[2] = personalData.jobtitle1;
        }
        if(personalData.jobtitle2 !== ""){
            jobs2[2] = personalData.jobtitle2;
        }
        if(personalData.jobtitle3 !== ""){
            jobs3[2] = personalData.jobtitle3;
        }
        if(jobs[0] === undefined){
            jobcheck[0] = false; 
        }
        if(jobs1[0] === undefined){
            jobcheck[1] = false; 
        }
        if(jobs2[0] === undefined){
            jobcheck[2] = false; 
        }
        if(jobs3[0] === undefined){
            jobcheck[3] = false; 
        }
    }

}