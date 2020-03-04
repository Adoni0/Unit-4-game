//global variables
var targetNumber = 0;
var scoreCounter = 0;
var wins = 0;
var losses = 0;
var numberOptions = [12, 5, 2, 9];//scores will be assigned to crystals at random and switched after every game


function initializeGame(){
    scoreCounter = 0;
    wins = 0;
    losses = 0;
    targetNumber = Math.floor((Math.random() * 120)+ 19);
    console.log(targetNumber)
    $("#number-to-guess").text(targetNumber);
}

    //initialize game again once scoreCounter=targetNumber or scoreCounter>=targetNumber


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

    scoreCounter += crystalvalue;
    $('#total-score').text(scoreCounter); //have total score displayed, which is equal to the scoreCounter

    if (scoreCounter === targetNumber){
        wins++;
        $('#wins').text(wins);
        initializeGame();
    }

    else if (scoreCounter >= targetNumber){
        losses++;
        $('#losses').text(losses);
        initializeGame();
    }
});

//have values for crystals change after game is over (when scoreCounter === targetNumber || scoreCounter >= targetNumber)
