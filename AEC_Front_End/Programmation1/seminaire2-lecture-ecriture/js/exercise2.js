/** created by Sophie Bergeron **/

//  Calculer la surface d’un rectangle dont la longueur et la largeur sont lues à l’écran.

//Etape 1 trouver les variables
var largeur;
var longueur;
var surface;


//Etape 2 Lecture(demander a l'usager des données)
largeur=Number(prompt("Entrer la largeur du rectangle svp : "));
longueur=Number(prompt("Entrer la longueur du rectangle svp :"));

//Etapes 3 Les calcules
surface=largeur*longueur;


//Etape 4 Afficher les résultats
console.log("voici la surface du rectangle : "+surface);
