/* eslint-env browser */
import { getStoredData } from "./createWord.js";
import Config from "./utils/Config.js";

var cv = "../cvTemplates/",
    template;

//Initalisiert den Button, sodass auf Button-Click das Dokument erstellt wird
function initButton() {
    let button = document.getElementById("create-btn"),
        popup = document.getElementById("choose-cv"),
        closeBtn = document.getElementById("close-div");

    button.addEventListener("click", function () {
        template = getTemplate();
        getStoredData(template, "cv");
        setTimeout(function(){
            location.reload();
        }, Config.DISPLAY_TIME_SUCCESS_MESSAGE);
    });

    popup.addEventListener("click", function () {
        // eslint-disable-next-line no-undef
        togglePopup();
    });

    closeBtn.addEventListener("click", function () {
        // eslint-disable-next-line no-undef
        togglePopup();
    });
}

function getTemplate() {
    var ident,
        obj;
    obj = document.getElementsByClassName("active-cv")[0];
    ident = obj.id;
    cv += ident + ".docx";
    return cv;
}

initButton();