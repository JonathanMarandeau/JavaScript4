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
    return texte.substring(texte.lastIndexOf('.')+1);//Afficher l'extension d'un fichier
}
var NombreEspaceString = function (texte) {
    return texte.split(' ').length - 1;//Permet de compter le nombre d'espace dans la chaine
}
var InverseString = function (texte) {
    return texte.split('').reverse().join('');//Permet d'inverser la chaine de caractère
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
var calculPuissance = function (x, y) {
    return Math.pow(x,y);//Permet de calculer la puissance d'un nombre par rapport à un autre (x à la puissance y)
}
var valeurAbsolue = function (nombre) {
    return Math.abs(nombre);//Permet d'afficher la valeur absolue d'un Nombre
}
var valeurAbsolueArray = function (array) {
    return array.map(Math.abs);
}
var sufaceCercle = function (rayon) {
    return Math.round(Math.PI*Math.pow(rayon,2));//Math.round pour arrondir a l'entier le plus proche,math.PI pour la valeur pi,puis le Math.pow pour le rayon au carré
}
var hypothenuse = function (ab, ac) {
    return Math.hypot(ab,ac);//Permet de calculer l'hypothenuse
}
var calculIMC = function (poids, taille) {
    return Number((poids/Math.pow(taille,2)).toFixed(2));//Le Number permet de transformer le resultat "texte" en "chiffre",toFixed() sert a choisir le nombre de chiffre après la virgule
}
