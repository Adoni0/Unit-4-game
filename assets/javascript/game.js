//global variables
var targetNumber = 0;
var scoreCounter = 0;
var wins = 0;
var losses = 0;
var numberOptions = [12, 5, 2, 9];//scores will be assigned to crystals at random and switched after every game

var random = Math.floor(Math.random() * 4);
var crystal1 = randomInterval(1, 12);
console.log(crystal1);
var crystal2 = randomInterval(1, 12);
var crystal3 = randomInterval(1, 12);
var crystal4 = randomInterval(1, 12);


    //initialize game again once scoreCounter=targetNumber or scoreCounter>=targetNumber
function randomInterval(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}




function startGame(){
    scoreCounter = 0;
    wins = 0;
    losses = 0;
    targetNumber = Math.floor((Math.random() * 120)+ 19);
    console.log(targetNumber)
    $("#number-to-guess").text(targetNumber);
    $('#crystal1').on('click', function(){
        console.log('crystal1 clicked')
        this.value = crystal1;
        $('#total-score').text(scoreCounter += this.value);
    })
        
        $('#crystal2').on('click', function(){
            console.log('crystal1 clicked')
            this.value = crystal2;
            $('#total-score').text(scoreCounter += this.value);
        })

            $('#crystal3').on('click', function(){
                console.log('crystal1 clicked')
                this.value = crystal3;
                $('#total-score').text(scoreCounter += this.value);
            })

                $('#crystal4').on('click', function(){
                    console.log('crystal1 clicked')
                    this.value = crystal4;
                    $('#total-score').text(scoreCounter += this.value);
                })

                $('.crystal').on('click', function(){
                    if(scoreCounter === targetNumber){
                        $('#result-text').text('You WIN!');
                        $('#wins').text('Wins: '+ wins++);
                        resetGame();
                    }else if(scoreCounter > targetNumber){
                        $('#result-text').text('You LOSE!');
                        $('#losses').text(`Losses: ${losses++}`);
                        resetGame();
                    }
                })
    }

function resetGame(){
    crystal1 = randomInterval(1, 12);
    crystal2 = randomInterval(1, 12);
    crystal3 = randomInterval(1, 12);
    crystal4 = randomInterval(1, 12);
    scoreCounter = 0;
    targetNumber = Math.floor((Math.random() * 120)+ 19);
    $('#number-to-guess').text(targetNumber);
    $('#total-score').text(scoreCounter);
}
    


startGame();





//have values for crystals change after game is over (when scoreCounter === targetNumber || scoreCounter >= targetNumber)
