else()

var sourceImage = this.src;
var idImage = this.id;

var premierClic = 1;
var src1 = this.src;
var id1 = this.id;
var src2;
var id2;
var echange;

$( "img-fluid" ).click(function() {
    while (premierClic === true){
        $('img-fluid').attr('src');
        $('img-fluid').attr('id');
        $('this').hide();
    }
});
};


//    $('#flashID').toggle();
//    $('#teleporteID').toggle();


else (premierClic = false){
    var src2 = this.src;
    var id2 = this.id;
    $(this).attr(src1,src2);
    $(this).attr(id1,id2);

}