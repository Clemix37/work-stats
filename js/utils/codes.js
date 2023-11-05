
const getCodeById = (id, codes = []) => codes.find(code => code.id === id) ?? null;

function displayCodes(idConteneur = null, codes = []){
    if(!idConteneur || typeof idConteneur !== "string") return;
    const container = document.getElementById(idConteneur);
    container.innerHTML = "";
    let display = "";
    for (let i = 0; i < codes.length; i++) {
        const el = codes[i];
        display += "<div class='code'>";
        display += "<h3>"+el.id+" - "+el.nom+"</h3>";
        display += "</div>";
    }
    container.innerHTML = display;
}

export {
    displayCodes,
};