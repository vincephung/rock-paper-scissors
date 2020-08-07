        //global variables
        let computerSelection;
        let playerSelection;
        let playerScore = 0;
        let computerScore = 0;
        let roundNumber = 0;


        //DOM variables
        const buttons = document.querySelectorAll('button');
        const rockBtn = document.querySelector('#rock');
        const paperBtn = document.querySelector('#paper');
        const scissorsBtn = document.querySelector('#scissors');
        const resultMessage = document.querySelector('.result-msg');
        const userScore = document.querySelector('#u-score');
        const compScore = document.querySelector('#c-score');
        const endMessage = document.querySelector('.end-message');
        const round = document.querySelector('#round');
        const playAgainBTN = document.querySelector('.play-again');


        
        //code for actual game
        function computerPlay(){
             let choice = Math.floor(Math.random() *3);
             let computerValue;
             if(choice ==1){
                  computerValue = "rock";
              }else if(choice == 2){
                  computerValue = "scissors";
             }else{
                 computerValue = "paper";
             }
                return computerValue;
        }
            
        function playRound(playerSelection, computerSelection){
            if(playerSelection === computerSelection){
                resultMessage.textContent = "Tie! You both picked the same thing.";
  
            }else if((playerSelection == "rock" && computerSelection =="scissors") || 
            (playerSelection =="scissors" && computerSelection == "paper") || 
            (playerSelection == "paper" && computerSelection =="rock"))
            {
                resultMessage.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
                playerScore++;
            }else{
                    resultMessage.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
                    computerScore++;
                }
                round.textContent = `Round: ${roundNumber}`;
                userScore.textContent = playerScore;
                compScore.textContent = computerScore;
        }

            function game(){
                roundNumber++;
                computerSelection = computerPlay();
                playRound(playerSelection,computerSelection);
                
                if(playerScore === 5 || computerScore === 5){
                    endGame();
                }     
            }

            //end game after someone reaches 5 wins
            function endGame(){
                if(playerScore > computerScore){
                    endMessage.textContent = "Game Over! You won!";
                }else{
                    endMessage.textContent = "Game Over! You Lost!";
                }
                rockBtn.disabled = true;
                paperBtn.disabled = true;
                scissorsBtn.disabled = true;

                //Creating a refresh link
                const a = document.createElement('a');
                a.setAttribute('onclick', 'window.location.href=this');
                a.textContent = 'Play again?';
                a.style.cssText = "color: #69DC9E; text-decoration: underline; font-family: 'Lato',sans-serif; font-size: 3vh; letter-spacing: 3px; font-weight: 900; cursor: pointer; background-color: var(--eerieblack);";
                playAgainBTN.appendChild(a);
            }
               
            //reset game
            function playAgain(){
                rockBtn.disabled = false;
                paperBtn.disabled = false;
                scissorsBtn.disabled = false;

            }
            //Player choice (rock paper..)

            buttons.forEach((button) => {
                button.addEventListener('click',() =>{
                    playerSelection = button.id;
                    game();
            })
                    })
                