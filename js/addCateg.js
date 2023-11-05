import { IDS_KEYS_STORAGE, getAllDataFromLocalStorage, saveDataToLocalStorage } from "./data/localStorage.js";
const ID_BTN_ADD = "btn-ajout";

const {categories} = getAllDataFromLocalStorage();

function init(){
    bindBtnsEvents();
}

function bindBtnsEvents(){
    document.getElementById(ID_BTN_ADD).addEventListener('click',addCategory);
}

const addCategory = ()=>{
    categories.push({
        id: categories.length, // @todo change id to make it unique
        nom: document.getElementById('txtNom').value
    });
    saveDataToLocalStorage(IDS_KEYS_STORAGE.CATEGORIES, categories);
    window.location.href = "../index.html";
};

window.addEventListener('DOMContentLoaded', init);