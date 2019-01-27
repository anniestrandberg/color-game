var square = document.querySelectorAll('.square');
var winningRGB = document.querySelector('#winning-color');
var winningText = document.querySelector('#winning-text');
var colors = [];
var gameOver = false;
var winningColor = "";
var newGameButton = document.getElementById('new-game-button');


function newGame(){

    function randomColor(){
        function randomNumber(){
        return Math.floor(Math.random() * 255) + 1; 
        }
        return "rgb(" + randomNumber() + ", " + randomNumber() + ", " + randomNumber() + ")";
    }

    // Loopar functionen så många gånger som det finns boxar.

    for(var i = 0; i < square.length; i++){
        square[i].style.background = randomColor();
    }

    function randomWinner(){
        function randomNumber(){
            return Math.floor(Math.random() * square.length) + 0; 
        }
        return square[randomNumber()].style.background;
    }

    winningColor = randomWinner();

    winningRGB.textContent = winningColor;

}

newGame();

for(var i = 0; i < square.length; i++){
    square[i].addEventListener('click', function(e){
        var selectedColor = e.target.style.background;
        if( selectedColor == winningColor){
            gameOver = true;          
        } else {
            e.target.style.visibility = 'hidden';
        }

        if(gameOver == true){
            e.target.style.background = 'BLACK';  
            winningText.textContent = 'grattis, du klarade det.';
            setTimeout(function(){ 
                resetGame();
            }, 3000);
        }
    });
}

newGameButton.addEventListener('click', function(){
  resetGame();

});

function resetGame(){
    newGame();
    gameOver = false;
    for(var i = 0; i < square.length; i++){
        square[i].style.visibility = 'visible';
    }
    winningText.textContent = '';
    
}