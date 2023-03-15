/* eslint-env browser */
import { getStoredData } from "./createWord.js";
import Config from "./utils/Config.js";

var apli = "../cvTemplates/",
  template;

function initApliButton() {
  let b = document.getElementById("create-ap");
  b.addEventListener("click", function () {
    template = getTemplate();
    getStoredData(template, "apli");
    setTimeout(function(){
      location.reload();
    }, Config.DISPLAY_TIME_SUCCESS_MESSAGE);
  });
}

function getTemplate() {
  var obj,
    ident;
  obj = document.getElementById("job-field");
  ident = obj.value;
  apli += ident + ".docx";
  return apli;
}

initApliButton();