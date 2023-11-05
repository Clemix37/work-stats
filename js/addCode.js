import { IDS_KEYS_STORAGE, getAllDataFromLocalStorage, saveDataToLocalStorage } from "./data/localStorage.js";

const ID_BTN_ADD = "btn-ajout";

const {codes} = getAllDataFromLocalStorage();

function init(){
    bindBtnsEvents();
}

function bindBtnsEvents(){
    document.getElementById(ID_BTN_ADD).addEventListener('click',addCode);
}

const addCode = ()=>{
    codes.push({
        id: codes.length, // @todo change id to make it unique
        nom: document.getElementById('txtNom').value,
    });
    saveDataToLocalStorage(IDS_KEYS_STORAGE.CODES, codes);
    window.location.href = "../index.html";
};

window.addEventListener('DOMContentLoaded', init);