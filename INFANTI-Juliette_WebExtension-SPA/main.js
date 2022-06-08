// Consigne : Améliorer l'affichage d'au moins 2 éléments du site au chargement de la page : Agrandir/réduire la taille du texte ou des images, Rajouter du texte ou une image sur le site, Cacher un/des bloc(s) considéré(s) comme inutile(s), ...
// + Un fichier "main.js" qui customise automatiquement la page et qui ajoute le bouton à la page et qui définit l'action de base du bouton


//Ajout d'un fond gris et une bordure orange dans le body du site
//Les titres (h1, h2, h3, h4) auront une police personnalisée (Rockwell) avec une taille et une couleur spécifique
//Pour p et label, ils auront une police personnalisée (Papyrus)
//Pour les balises nav ul li a, ils auront une police personnalisée (Elephant) avec une taille et une couleur spécifique
//Si je mets juste a, cela va modifier toutes les balises a et ça rend vraiment moche, c'est pour cela que j'ai mis nav ul li a

const CSSStyle = `

body{
    background: #DEDBDA;
    border: 5px solid #FF7400;
}

h1,
h2,
h3,
h4{
    font-family: 'Rockwell', sans-serif !important;
    font-size: 25px !important;
    color: black !important;
}

p,
label{
    font-family: 'Papyrus', sans-serif !important;
}

nav ul li a{
    font-family: 'Elephant', sans-serif !important;
    font-size: 13px !important;
    color: black !important;
}

`;

//Permet la creation et l'insertion d'une balise <style> contenant le css de la variable CSSStyle dans la page html

let customStyleElement = document.createElement('style');
customStyleElement.innerText = CSSStyle;
document.body.appendChild(customStyleElement); 

//Le code qui qui définit l'action de base du bouton (son fonctionnement), c'est en format popup, ce qui veut dire qu'il faut cliquer sur l'icone de l'extension pour voir apparaître le bouton

if (document.querySelector(".extension")) {
    const bouton = document.querySelector(".bouton");
    const cercle = document.querySelector(".cercle")
    let boutonModeNuit = false;
    function inverser() {
        document.body.style.filter = "invert(1) hue-rotate(180deg)";
        let media = document.querySelectorAll("img, picture, video");
        media.forEach((mediaItem) => {
            mediaItem.style.filter = "invert(1) hue-rotate(180deg)"
        })
    }
    bouton.addEventListener("click", () => {
        if (!boutonModeNuit) {
            boutonModeNuit = true;
            cercle.style.animation = "boutonàdroite 1s ease-in-out 0s forwards"
            chrome.tabs.executeScript({
                file: 'modenuit.js'
            })
        }
        else {
            boutonModeNuit = false;
            cercle.style.animation = "boutonàgauche 1s ease-in-out 0s forwards"
            chrome.tabs.executeScript({
                file: 'modejour.js'
            })
        }
    })

}