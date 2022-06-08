# PS-2021-Web-Extension

*PS = Projet Scolaire*

## 📚 Projet Scolaire | Réalisation d'un backend symfony

Novembre 2021

Individuel

### 📎 Vidéo de démonstration :

Un aperçu en vidéo, c'est toujours mieux !

https://youtu.be/QA0CtOlGti0

### 📌 Consignes du projet :

DM Réalisation d'une WebExtension de customisation d'un Site Web

But de l'exercice
Réaliser une extension pour navigateur Web en utilisant le standard WebExtension afin que cette extension customise un site web de votre choix et que celle-ci soit au moins compatible avec les dernières versions de Chrome et Firefox.

Détails sur ce qu'il faut réaliser
La WebExtension à réaliser ne doit s'activer que sur un seul site web (voir, seulement sur une partie d'un site) et il faut que ce site choisi soit configuré dans le fichier "manifest.json", comme c'était le cas pour le tuto "Votre première WebExtension" (https://developer.mozilla.org/fr/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension)

Cette WebExtension doit automatiquement customiser les pages du site web en faisant (au minimum) :

- Améliorer l'affichage d'au moins 2 éléments du site au chargement de la page : Agrandir/réduire la taille du texte ou des images, Rajouter du texte ou une image sur le site, Cacher un/des bloc(s) considéré(s) comme inutile(s), ...
- Ajouter un bouton en haut de la page web visitée en intégrant une balise HTML <button ...> dans la page :
	* Ce bouton doit se trouver en haut de la page et être un minimum visible (Pensez à tester que le bouton s'intégre bien sur la majorité des pages du site web)
	* Si de base la page a un thème plutôt clair, il faut qu'au chargement de la page le texte du bouton soit "Mode Nuit" (ou à l'anglaise "Night Mode"). Et si la page a un thème sombre, il faut que le texte du bouton soit "Mode Jour".
- Quand un utilisateur clique sur ce bouton, il faut :
	* Si le bouton affiche "Mode Nuit", il faut que cela passe la page en mode sombre (Dark Theme) : Le fond du site doit être sombre, le texte doit être de couleur claire et le style des liens doit aussi être modifié.
	* Si le bouton affiche "Mode Jour", il faut que cela fasse l'inverse : Un fond clair avec texte foncé.
- L'objectif principal c'est que les textes restent lisibles dans ces 2 modes ("Nuit" et "Jour"). Par contre, pas besoin de modifier tous les éléments de la page, ni faire quelque chose de très esthétique. 

Si vous avez des questions, posez-les moi via Teams ou par mail.
  
Consignes complémentaires
- Votre fichier "manifest.json" doit être complet et lisible (et il faut que la WebExtension ne s'exécute que sur les pages du site web choisi !)
- Le code JavaScript de cette WebExtension doit être (au minimum) divisé en 2 fichiers JS : 
	* Un fichier "main.js" qui customise automatiquement la page et qui ajoute le bouton à la page et qui définit l'action de base du bouton
	* Un fichier "functions.js" contenant les différentes fonctions (avec au moins 2 fonctions : activateNightMode() et activateDayMode())
- Quelque soit la page du site choisi, il faut que le script de l'extension s'éxecute correctement (aucune erreur ne doit apparaitre dans la console JS !)
- Aucune librairie JS, ni framework, n'est autorisée pour ce DM (donc jQuery non autorisé)

Conseils/Remarques
- /!\ ATTENTION : Après chaque modification du code de la WebExtension, pensez à rafraichir celle-ci dans le navigateur pour que les modifications soient bien prises en compte !
- Pour définir la fonction à exécuter quand l'utilisateur clique sur le bouton "Mode Jour/Nuit", vous devrez utiliser la méthode "addEventListener()" (DOM-2) dans votre JS, car les WebExtension bloquent tout "inline JavaScript" et donc bloque les "onclick" ajoutés au HTML (Voir : https://developer.chrome.com/extensions/contentSecurityPolicy#JSExecution )
- En utilisant "addEventListener()", la fonction associée à un évènement s'exécute avec comme contexte (this) : l'élément bouton qui vient d'être cliqué. Dans cette fonction, vous pouvez donc modifier le contenu textuel du bouton en faisant simplement : this.textContent = "...";
- Pour récupérer les élements du site dans votre script JS, vous pouvez soit utiliser les fonctions "getElements...()", soit les fonctions "querySelector...()"
- Pour revenir au style de base de la page, vous pouvez simplement enlever les styles rajoutés par votre WebExtension (monElement.style = "";)

Détails sur le rendu
La WebExtension est à déposer sur MyLearningBox avant la date indiquée par le dépôt. (Tout DM rendu après cette date aura un malus de -2 points par jour de retard)
L'archive déposée (ZIP ou RAR) doit contenir tous les fichiers de la WebExtension (Le fichier "manifest.json" + les différents scripts JS),

Tutos & infos sur la création d'une WebExtension
Un tutoriel pour réaliser une WebExtension de customisation de site web pour Firefox : https://developer.mozilla.org/fr/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension

Sachant que le format standardisé WebExtension est compatible avec Chrome (en tout cas l'API de base), vous pouvez créer cette 1ère WebExtension et la charger en tant qu'extension Chrome.
Pour savoir comment charger une WebExtension dans Chrome, aller voir le début du tuto ici : https://developer.chrome.com/docs/extensions/mv3/getstarted/


### 💻 Applications et langages utilisés :

+ Javascript
+ Atom




## 🌸 Merci !
© J-IFT
