import { getAllDataFromLocalStorage } from "./data/localStorage.js";
import { displayCategories } from "./utils/categories.js";
import { displayCodes } from "./utils/codes.js";

const ID_MAIN = "main";

const BTNS = {
    SEE_CATEGS: {
        ID: "btnVoirCateg",
        FCT: () => displayCategories(ID_MAIN, categories),
    },
    SEE_CODES: {
        ID: "btnVoirCodes",
        FCT: () => displayCodes(ID_MAIN, codes),
    },
};

const {categories,codes,tasks} = getAllDataFromLocalStorage();

function init(){
    bindEventsBtns();
}

function bindEventsBtns(){
    const keys = Object.keys(BTNS);
    for (let i = 0; i < keys.length; i++) {
        const btn = BTNS[keys[i]];
        document.getElementById(btn.ID).addEventListener('click', btn.FCT);
    }
}

const afficherBtnsCodes = ()=>{
    let affichage = "";
    for (let i = 0; i < window.codes.length; i++) {
        const el = window.codes[i];
        affichage += '<a class="button is-rounded" onclick="afficherCode('+el.id+')">Voir "'+el.nom+'"</a>';
    }
    document.getElementById('btnsTachesCodes').innerHTML = affichage;
};

/* PAGE LOADED EVENT */
window.addEventListener('DOMContentLoaded', init);