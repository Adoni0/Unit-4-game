//global variables
var targetNumber = 0;
var scoreCounter = 0;
var wins = 0;
var losses = 0;
var numberOptions = [12, 5, 2, 9];//scores will be assigned to crystals at random and switched after every game


targetNumber = 1 + Math.floor(Math.random() * 120);

$("#number-to-guess").text(targetNumber);

for(var i=0; i < numberOptions.length; i++){
    
    var imageCrystalOne = $("<img>");

    var imageCrystalTwo = $('<img>');

    var imageCrystalThree = $("<img>");

    var imageCrystalFour = $('<img>');

    imageCrystalOne, imageCrystalTwo, imageCrystalThree, imageCrystalFour.addClass('crystal-image');

    imageCrystalOne.attr('src', "https://cdn.pixabay.com/photo/2014/04/02/16/26/crystal-307265_960_720.png");

    imageCrystalTwo.attr('src', "https://www.pinclipart.com/picdir/middle/187-1878291_free-vector-graphics-on-pixabay-image-freeuse-download.png");

    imageCrystalThree.attr('src', 'https://webstockreview.net/images/crystal-clipart-cartoon-3.png');

    imageCrystalFour.attr('src', 'https://clipartmag.com/images/crystal-clipart-21.png');

    imageCrystalOne, imageCrystalTwo, imageCrystalThree, imageCrystalFour.attr('data-crystalvalue', numberOptions[i]);

    $('#crystals').append(imageCrystalOne, imageCrystalTwo, imageCrystalThree, imageCrystalFour);

}

$(".crystal-image").on("click", function(){
    var crystalvalue = ($(this).attr('data-crystalvalue'));
    crystalvalue = parseInt(crystalvalue);

    counter += crystalvalue;
})

