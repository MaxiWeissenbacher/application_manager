var signIn = document.getElementById("google"),
    provider;

function googleSignOut() {
   // eslint-disable-next-line no-undef
  firebase.auth().signOut();
  window.location = "http://localhost:8000/app/index.html";
}

function googleSignIn() {
   // eslint-disable-next-line no-undef
  provider = new firebase.auth.GoogleAuthProvider();
   // eslint-disable-next-line no-undef
  firebase.auth().signInWithPopup(provider);
}

function showAndHide(displayType) {
  // eslint-disable-next-line no-magic-numbers
  for (let i = 1; i <= 3; i++) {
    let el = document.getElementById("nav" + i);
    el.style.display = displayType;
  }
}

 // eslint-disable-next-line no-undef
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in
    signIn.innerHTML = "Sign out";
    signIn.removeEventListener("click", googleSignIn);
    signIn.addEventListener("click", googleSignOut);
    showAndHide("flex");
  } else {
    // User is signed out
    signIn.innerHTML = "Sign in";
    signIn.removeEventListener("click", googleSignOut);
    signIn.addEventListener("click", googleSignIn);
    showAndHide("none");
  }
});

// adds event listener to the sign in button
signIn.addEventListener("click", googleSignIn);