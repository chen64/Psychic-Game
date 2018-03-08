var wins = 0; //wins lose guessLeft guesses
var lose = 0;
var guesses = [];
var guessLeft = 9;
var alphabet = ["a","b","c","d","e","f","g","h","i","j",
                "k","l","m","n","o","p","q","r","s","t",
                "u","v","w","x","y","z"];

var answer = alphabet[Math.floor(Math.random()*alphabet.length)];

document.onkeyup = function (event){
    var userKey = event.key;
    guessLeft--;
    guesses.push(userKey);
    document.getElementById("guesses").innerHTML = "Your guesses: " + guesses;
    document.getElementById("guessLeft").innerHTML = "Guess left: " + guessLeft;
    if(guessLeft > 0)
    {
        if(userKey == answer)
        {
            wins++;
            document.getElementById("wins").innerHTML = "Wins: " + wins;
            guessLeft = 9;
            guesses.length = 0;
            alert("You win");
            var answer = alphabet[Math.floor(Math.random()*alphabet.length)];

        }
    }
    else if(guessLeft == 0)
    {
        lose++;
        document.getElementById("lose").innerHTML = "Lose: " + lose;
        guessLeft = 9;
        guesses.length = 0;
        alert("You lose");
        var answer = alphabet[Math.floor(Math.random()*alphabet.length)];
        
    }
    
}