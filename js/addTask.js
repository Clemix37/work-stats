import { IDS_KEYS_STORAGE, getAllDataFromLocalStorage, saveDataToLocalStorage } from "./data/localStorage.js";
const ID_BTN_ADD = "btn-ajout";

const {tasks} = getAllDataFromLocalStorage();

function init(){
    bindBtnsEvents();
}

function bindBtnsEvents(){
    document.getElementById(ID_BTN_ADD).addEventListener('click',addTask);
}

const afficherListes = ()=>{
    let lesCodes = "";
    for (let i = 0; i < window.codes.length; i++) {
        const el = window.codes[i];
        lesCodes += "<option value='"+el.id+"'>"+el.nom+"</option>";
    }
    document.getElementById('listeCodes').innerHTML = lesCodes;
};

const addTask = ()=>{
    const id = document.getElementById('txtID').value;
    if(tasks.find(task => task.id === id)) return alert("Title already exists");
    tasks.push({
        id,
        code: document.getElementById('listeCodes').value,
        mois: document.getElementById('listeMois').value,
        annee: document.getElementById('listeAnnee').value
    });
    saveDataToLocalStorage(IDS_KEYS_STORAGE.TASKS, tasks);
    window.location.href = "../index.html";
};

window.addEventListener('DOMContentLoaded', init);