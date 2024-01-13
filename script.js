function  getComputerChoice()
{
    let computerChoice = Math.floor(Math.random() * 3);
    if(computerChoice == 0)
    {
        return 'rock';
    }
    if(computerChoice == 1)
    {
        return 'paper';
    }
    if(computerChoice == 2)
    {
        return 'scissors';
    }
}

function playGame(playerSelection,computerSelection)
{
    computerSelection = 'paper';
    console.log('computer choice: ' + computerSelection);
    console.log('player choice: ' + playerSelection);

    if(playerSelection == computerSelection)
    {
        return 'Tie';
    }
    if((playerSelection == 'rock' && computerSelection != 'scissors') || (playerSelection == 'paper' && computerSelection != 'rock') || (playerSelection == 'scissors' && computerSelection != 'paper') )
        {
            return 'Player loose';
        }
        else 
        {
            return 'Player Won';
        }
    
    
            
            
    
}

let choice = prompt('what is your choice(Rock,Paper,Scissors): ');
console.log(playGame(choice.toLowerCase(),getComputerChoice()));
choice = prompt('what is your choice(Rock,Paper,Scissors): ');
console.log(playGame(choice.toLowerCase(),getComputerChoice()));
choice = prompt('what is your choice(Rock,Paper,Scissors): ');
console.log(playGame(choice.toLowerCase(),getComputerChoice()));
choice = prompt('what is your choice(Rock,Paper,Scissors): ');
console.log(playGame(choice.toLowerCase(),getComputerChoice()));
choice = prompt('what is your choice(Rock,Paper,Scissors): ');
console.log(playGame(choice.toLowerCase(),getComputerChoice()));



