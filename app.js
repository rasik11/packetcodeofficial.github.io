// const pScore=0;
// const playerScore=document.querySelector(".computer-score p");
// playerScore.textContent = pScore;
// console.log(pScore);

const game = () => {
    let pScore = 0;
    let cScore = 0;
  
    //Start the Game
    const startGame = () => {
      const playBtn = document.querySelector(".intro button");
      const introScreen = document.querySelector(".intro");
      const match = document.querySelector(".match");
  
      playBtn.addEventListener("click", () => {
        introScreen.classList.add("fadeOut");
        match.classList.add("fadeIn");

      });
    };
    // play the game
    const playMatch =()=>{
        const options=document.querySelectorAll('.option button');
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");

        //for animation to be repeated
        const hands = document.querySelectorAll('.hands img');
        hands.forEach(hand =>{
          hand.addEventListener('animationend',function(){
            this.style.animation ="";
          });
        });

        //computer random options
        const computerOptions=['rock','paper','scissors'];
        

        

        options.forEach(option=>{
          option.addEventListener("click",function(){
            //computer choices 
            const computerNumber =Math.floor(Math.random()*3);
            const computerChoice=computerOptions[computerNumber];//selects from the array
           
            
            setTimeout(() => {
              //call compare hands
              compareHands(this.textContent,computerChoice);
              //update images
              playerHand.src =`./assets/${this.textContent}.png`;
              computerHand.src = `./assets/${computerChoice}.png`;
              //animation
            }, 2000 );

           
            playerHand.style.animation = "shakePlayer 2s ease";
            computerHand.style.animation = "shakeComputer 2s ease"

          }); 
        });
    };
    

    //to update the scrores
    const updateScore =() =>{
      const playerScore=document.querySelector(".player-score p");
      const computerScore=document.querySelector(".computer-score p");
      playerScore.textContent = pScore;
      computerScore.textContent = cScore;

    }

    const compareHands=(playerChoice,computerChoice)=>{
      //update text
      const winner = document.querySelector('.winner'); 
      //for tie
      if(playerChoice===computerChoice){
        winner.textContent='It is a tie';

        return;
      }
      //rock
      if(playerChoice==='rock'){
        if(computerChoice==='scissors'){
          winner.textContent='Player wins';
          pScore++;
          updateScore();
          return;
        }else{
          winner.textContent='Computer wins';
          cScore++;
          updateScore();
          return;
        }
      }
      //paper
      if(playerChoice==='paper'){
        if(computerChoice==='scissors'){
          winner.textContent='Computer wins';
          cScore++;
          updateScore();
          return;
        }else{
          winner.textContent='player wins';
          pScore++;
          updateScore();
          return;
        }
      }
      //scissors
      if(playerChoice==='scissors'){
        if(computerChoice==='paper'){
          winner.textContent='paper wins';
          pScore++;
          updateScore();
          return;
        }else{
          winner.textContent='computer wins';
          cScore++;
          updateScore();
          return;
        }
      }


    }

    startGame();
    playMatch();
};

game(); 