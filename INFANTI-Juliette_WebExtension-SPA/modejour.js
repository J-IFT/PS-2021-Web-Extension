// Consigne : * Un fichier "functions.js" contenant les différentes fonctions (avec au moins 2 fonctions : activateNightMode() et activateDayMode())
// J'ai réussi à faire les fonctions mais dans deux fichiers séparés
// Ici : le code qui sera exécuté dans le main.js pour le mode jour activateDayMode()

(function activateDayMode() {
    document.querySelector("html").style.filter = "invert(0) hue-rotate(0deg)";
    let media = document.querySelectorAll("img, picture, video");
    media.forEach((mediaItem) => {
        mediaItem.style.filter = "invert(0) hue-rotate(0deg)"
    })
})();