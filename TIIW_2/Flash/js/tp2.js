/**
 * TP-2 created by Sophie on 2019-08-25.
 */

$('#flashID').css("position","relative");
var compteur = 0;

$("#boutonGauche").click(function(){
    compteur = compteur - 50;
    $('#flashID').css("left", compteur);
});

$("#boutonDroite").click(function(){
    compteur = compteur + 50;
    $('#flashID').css("left", compteur);
});

//Changez l'image de Flash1 à Flash 2 et vice-versa (une fois)

$( "#boutonChangerImage" ).click(function() {
    var Image;

    Image = $('#flashID').attr("src");

    if(Image === "images/flash.jpg"){
        $('#flashID').attr("src" , "images/flash2.jpg");
    }
    else{
        $('#flashID').attr("src" , "images/flash.jpg");
    }
});

//Faire disparaître l'image
/** avec .hide
$( "#boutonEnleverImage" ).click(function() {
    $( "#flashID" ).hide();
});
*/

$( "#boutonEnleverImage" ).click(function() {
    $( "#flashID" ).fadeOut('slow');
});

//Faire apparaître l'image

$( "#boutonAjouterImage" ).click(function() {
    $( "#flashID" ).fadeIn('slow');
});

//Ajoutez un attribut alt à votre image avec la description 'photo de Flash'

$( "#boutonAjouterAttribut" ).click(function() {
    $( "#flashID" ).attr("alt","photo de Flash");
});

//Ajoutez un titre en H1 'FLASH JQUERY' dans le haut de cette page avant la photo (before)

$( "#boutonAjouterTitre" ).click(function() {
    $( '#explosion' ).prepend("<h1>FLASH JQUERY</h1>");
});

//Flash est tellement rapide, ajoutez une autre image à côté de Flash à tous les cliques sur ce bouton!

$( "#boutonDupliquer" ).click(function() {
    $('div').prepend('<img id="flashID" class="flashClass" src="images/flash.jpg" width="200px"/>');
});

//Flash ralentit, enlevez une image!

$( "#boutonRalentir" ).click(function() {
    $("#flashID").remove();
});

//Flash se téléporte sous ces boutons et retourne en haut lorsque l'on clique de nouveau

$('#teleporteID').hide();

$( "#boutonTeleport" ).click(function() {
        $('#flashID').toggle();
        $('#teleporteID').toggle();
});

//Flash doit apparaître et disparaître toutes les 500MS pendant 5 secondes.
var myVar;
var compteur2;
$( "#boutonVitesseSupreme" ).click(function() {
    myVar = setInterval(disparaitreFlash, 500);
    compteur2=0;
});

function disparaitreFlash() {
    $('#flashID').toggle();
    compteur2++;
    //console.log((compteur2 * 500)+ "=== 5000");
    if(compteur2 * 500 === 5000) {
        clearInterval(myVar);
        $('#flashID').show();
    }
}

//Ce bouton fait afficher une image d'explosion dans l'écran et enlève tout le reste (boutons images, etc).

$('#Boom').hide();

$( "#boutonNuke" ).click(function() {
    $('#explosion').toggle();
    $('#Boom').toggle();
});