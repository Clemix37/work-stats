
function displayCategories(idConteneur = null, categs = []){
    if(!idConteneur || typeof idConteneur !== "string") return;
    const container = document.getElementById(idConteneur);
    container.innerHTML = "";
    let display = "";
    for (let i = 0; i < categs.length; i++) {
        const el = categs[i];
        display += "<div class='categ'>";
        display += "<h3>"+el.nom+"</h3>";
        display += "</div>";
    }
    container.innerHTML = display;
}

export {
    displayCategories,
};