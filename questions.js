/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
var tailleString = function (texte) {
    return texte.length;//Donne la taille de la chaine de caractères
}
var remplaceECar = function (texte) {
    return texte.replace('e',' ');//On remplace le e par rien
}
var concatString = function (texte1, texte2) {
    return texte1+texte2;//on assemble les deux parties de textes ensemble
}
var afficherCar5 = function (texte) {
    return texte[4];//On selectionne le 5eme caractères
}
var afficher9Car = function (texte) {
    return texte.substring(0,9);//On affiche les 9 premiers caracteres
}
var majusculeString = function (texte) {
    return texte.toUpperCase();//On mets le texte en majuscule
}
var minusculeString = function (texte) {
    return texte.toLowerCase();//On mets le texte en minuscule
}
var SupprEspaceString = function (texte) {
    return texte.trim();//On supprime les espaces inutiles avant et après le texte
}
var IsString = function (texte) {
    return (typeof texte == 'string');//Afficher true si l'entrée de la fonction est de type string
}
var AfficherExtensionString = function (texte) {
    return texte.substring(texte.lastIndexOf('.')+1);
}
var NombreEspaceString = function (texte) {
    return texte.split(' ').length - 1;
}
var InverseString = function (texte) {
    return texte.split('').reverse().join('');
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
var calculPuissance = function (x, y) {
    return 'A completer';
}
var valeurAbsolue = function (nombre) {
    return 'A completer';
}
var valeurAbsolueArray = function (array) {
    return 'A completer';
}
var sufaceCercle = function (rayon) {
    return 'A completer';
}
var hypothenuse = function (ab, ac) {
    return 'A completer';
}
var calculIMC = function (poids, taille) {
    return 'A completer';
}
