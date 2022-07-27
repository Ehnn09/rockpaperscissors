const game = () =>{
    let pScore = 0;
    let cScore = 0;


    //start game
    const startGame = ()=>{
        const playButton = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playButton.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });

    };
    // play
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const pHands = document.querySelector('.player-hand');
        const cHands = document.querySelector('.computer-hand');

        //computer options
        const computerOptions = ["rock","paper","scissors"];

        options.forEach(option => {
            option.addEventListener("click", function() {
                //computer Choice
                const computerNumber = Math.floor(Math.random()*3);
               const computerChoice = computerOptions[computerNumber];
               console.log(computerChoice);
               compareHands(this.textContent,computerChoice);

               //Update Images
               pHands.src = `./assets/${this.textContent}.png`;
               cHands.src = `./assets/${computerChoice}.png`;
            });
        });

        const compareHands = (playerChoice,computerChoice)=>{
            const winner = document.querySelector('.winner');
            if(playerChoice === computerChoice){
                winner.textContent = 'It is a tie';
                return;

            }
            if(playerChoice === 'rock'){
                if(computerChoice === 'scissors'){
                    winner.textContent= 'Player Wins';
                    pScore++;
                    updateScore();
                    return;
                }else{
                    winner.textContent = 'Computer Wins';
                    cScore++;
                    updateScore();
                    return;
                }
            }
            if(playerChoice === 'paper'){
                if(computerChoice === 'scissors'){
                    winner.textContent= 'Computer Wins';
                    cScore++;
                    updateScore();
                    return;
                }else{
                    winner.textContent = 'Player Wins';
                    pScore++;
                    updateScore();
                    return;
                }
            }
            if(playerChoice === 'scissors'){
                if(computerChoice === 'rock'){
                    winner.textContent= 'Computer Wins';
                    cScore++;
                    updateScore();
                    return;
                }else{
                    winner.textContent = 'Player Wins';
                    pScore++;
                    updateScore();
                    return;
                }
            }


        };
        
 
    };

    const updateScore =()=>{
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;

    };

    // call all the inner function
    startGame();
    playMatch();
   

};

game();