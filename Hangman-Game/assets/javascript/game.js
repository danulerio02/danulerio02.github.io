
     var targetDiv = document.getElementById('emptyDiv');

     var start = document.createElement('div');
     var wins = document.createElement('div');
     var losses = document.createElement('div');
     var guesses = document.createElement('div');
     var remaining = document.createElement('div');
      var numWins = 0;
      var numLosses = 0;
      var numGuesses = 10;
      var letters = [];
    
     var options = [

     'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'

     ];
   
     var random = options[Math.floor(Math.random()*options.length)];

        targetDiv.appendChild(wins);
        targetDiv.appendChild(losses);
        targetDiv.appendChild(start);
        targetDiv.appendChild(guesses);
        targetDiv.appendChild(remaining);

    var reset = function() {
      numGuesses = 10;
      letters = [];
      random = options[Math.floor(Math.random()*options.length)];
    };


    var contains = function(arr, value) {
      var i = arr.length;
      while (i--) {
        if (arr[i] === value) return true;
      }
      return false;
    };



    document.onkeyup = function(event) {
      
      var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

       if ((contains(letters, userGuess) == false) && (contains(options, userGuess) == true)) {
        letters.push('' + userGuess);
        numGuesses -= 1;

        if (userGuess == random && numGuesses > 0) {
          numWins++;
          alert("CORRECT=" + random.toUpperCase());
          reset();
        }

        else if (userGuess != random && numGuesses > 0) {
        }

        else if (userGuess != random && numGuesses <= 0) {
          numLosses++;
          alert("TRY AGAIN");
          reset();

        };

      };

      getStarted.innerHTML = '<p> GUESS THE LETTER </p>';
      wins.innerHTML = '<p> WON = ' + numWins + ' </p>';
      losses.innerHTML = "<p> LOST = " + numLosses </p>;
      guesses.innerHTML = '<p>Letters Guessed = ' + letters + ' </p>';
      remaining.innerHTML = '<p>Guesses Left = ' + numGuesses + '</p>';

    };
