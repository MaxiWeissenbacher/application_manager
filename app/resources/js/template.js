//Hier wird das gewählte Template gesucht und dann in der Preview dargestellt
// eslint-disable-next-line no-unused-vars
function toggleActive(obj){
    var element = document.getElementsByClassName("active-cv")[0];
    element.classList.remove("active-cv");
    obj.classList.add("active-cv");
}

// eslint-disable-next-line no-unused-vars
function chooseTemplate(){
    var source = document.getElementsByClassName("active-cv")[0].src,
     obj = document.getElementById("preview");
    obj.src = source;
    togglePopup();
}

function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");
}

