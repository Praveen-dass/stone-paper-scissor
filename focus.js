let score = JSON.parse(localStorage.getItem('score'));
if(!score)
{
    score={
        wins: 0,
        losses: 0,
        ties: 0
    };
}

updateScore();

function playgame(playermove)
{
    const computerMove = selectcomputerMove();

    let result='';

    if(playermove === 'stone')
    {
        if(computerMove === 'stone')
        {
            result = 'tie';
        }
        else if (computerMove === 'paper')
        {
            result = 'you lost';
        }
        else if (computerMove === 'scissors')
        {
            result = 'you won';
        }
    }
    else if (playermove === 'paper')
    {
        if(computerMove === 'stone')
        {
            result = 'you won';
        }
        else if (computerMove === 'paper')
        {
            result = 'tie';
        }
        else if (computerMove === 'scissors')
        {
            result = 'you lost';
        }
    }
    else if(playermove === 'scissors')
    {
        if(computerMove === 'stone')
        {
            result = 'you lost';
        }
        else if (computerMove === 'paper')
        {
            result = 'you won';
        }
        else if (computerMove === 'scissors')
        {
            result = 'tie';
        }
    }

    if(result === 'you won')
    {
        score.wins +=1;
    }
    else if(result === 'you lost')
    {
        score.losses += 1;
    }
    else if(result === 'tie')
    {
        score.ties += 1;
    }

    localStorage.setItem('score',JSON.stringify(score));

    updateScore();

    document.querySelector('.qresult').innerHTML = result;

    document.querySelector('.moves').innerHTML = `You
   <img src="./${playermove}-emoji.png" class="icon">
   <img src="./${computerMove}-emoji.png" class="icon">
   Computer`;

    // alert(`you picked ${playermove}.computer picked ${computerMove}. ${result}
    // wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
}

function updateScore()
{
    document.querySelector('.score').innerHTML=`wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function selectcomputerMove()
{
    const randomNumber = Math.random();

    let computerMove = '';

    if(randomNumber>=0 && randomNumber < 1/3)
    {
        computerMove = 'stone';
    }
    else if(randomNumber>=1/3 && randomNumber<2/3)
    {
        computerMove = 'paper';
    }
    else if (randomNumber>=2/3 && randomNumber<1)
    {
        computerMove = 'scissors';
    }

    return computerMove;
}