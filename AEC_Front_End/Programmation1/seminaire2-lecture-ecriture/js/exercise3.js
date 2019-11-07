/** created by Sophie Bergeron **/

//  Convertir un nombre de gallons en litres. 1 gal = 4.55 litres.

//Etape 1 trouver les variables
var nombgallon;
var litre;

//Etape 2 Lecture(demander a l'usager des données)
nombgallon=Number(prompt("Combien y a t il de Gallon ? :"));

//Etapes 3 Les calcules
litre=0.264172*nombgallon;

//Etape 4 Afficher les résultats
console.log("le nombre de litre pour "+nombgallon +" gallon est : " +litre+ "litre");
