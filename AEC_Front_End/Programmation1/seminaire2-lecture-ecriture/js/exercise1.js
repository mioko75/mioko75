/** created by Sophie Bergeron **/

//Lire un nombre et afficher le carré et le cube de ce nombre

//Etape 1 trouver les variables

var nombre;
var carre;
var cube;

//Etape 2 Lecture(demander a l'usager des données)
nombre= Number(prompt("veuillez entrer un nombre svp: "));

//Etapes 3 Les calcules

carre =  nombre*nombre;
cube = nombre*nombre*nombre;

//Etape 4 Afficher les résultats
console.log("le nombre est : " + nombre);
console.log("le carre est : " + carre);
console.log("le cube est : " + cube);
