/**
 * Created by Shany on 2019-08-29.
 */
var premierClic = 1;
var premierImageSRC;
var premiereImageID;
var deuxiemeImageSRC;
var deuxiemeImageID;

$( ".img-fluid" ).click(function() {

    this
    var idImage = this.id;
    var sourceImage = this.src;
    alert("ID = " + idImage + "\n" +
    "Source = " + sourceImage);
});