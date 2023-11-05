
const IDS_KEYS_STORAGE = {
    CATEGORIES: "categories",
    CODES: "codes",
    TASKS: "tasks",
};

function getDataFromLocalStorage(key, andSave = true){
    const data = !!window.localStorage[key] ? JSON.parse(window.localStorage.getItem(key)) : [];
    if(andSave) saveDataToLocalStorage(key, data);
    return data;
}

function saveDataToLocalStorage(key, values){
    window.localStorage.setItem(key, JSON.stringify(values));
}

function getAllDataFromLocalStorage(){
    const categories = getDataFromLocalStorage(IDS_KEYS_STORAGE.CATEGORIES);
    const codes = getDataFromLocalStorage(IDS_KEYS_STORAGE.CODES);
    const tasks = getDataFromLocalStorage(IDS_KEYS_STORAGE.TASKS);
    return {
        categories, codes, tasks,
    };
}

export {getAllDataFromLocalStorage, saveDataToLocalStorage, IDS_KEYS_STORAGE};