// Hier wird gecheckt, ob Daten vom User bereits vorhanden sind oder nicht. 
// Falls nicht, wird der User zur initalen Dateneingabe geleitet. Falls bereits Daten vorhanden sind, wird er zur Datenübersichtsseite weitergeleitet.
// Falls er nicht eingeloggt ist, wird er darum gebeten, sich einzuloggen.

var userRef;
// eslint-disable-next-line no-undef
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User angemeldet
      // Hier Daten anzeigen lassen
      // eslint-disable-next-line no-undef
      const keys = firebase.auth().currentUser.uid;
          // eslint-disable-next-line no-undef
          userRef = firebase.database().ref("messages/");
              
          userRef.once("value", function(snapshot){
              var data = snapshot.val();
              let personalData = data[keys];
              if(personalData !== undefined){
                if(personalData.lastName !== undefined && personalData.lastName !== ""){
                    window.location = "../sites/dataOverview.html";
                } 
                else {
                    window.location = "../sites/personalData.html";
                }  
              }
              else {
                window.location = "../sites/personalData.html";
              }
          });

    } else {
      // User nicht angemeldet.
      // hier Daten eingeben lassen
      // eslint-disable-next-line no-console
      console.log("Nicht eingeloggt");
    }
  });