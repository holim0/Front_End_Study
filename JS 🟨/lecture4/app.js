/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/



let scores = [0, 0];
let roundScore = 0;
let activePlayer = 0;
let gamePlaying =true;
let pre = 0;


// document.querySelector('#current-' + activePlayer).textContent = dice;    //setter


document.querySelector('#dice1').style.display = 'none';  // css 스타일 수정.
document.querySelector('#dice2').style.display = 'none';


document.getElementById('score-0').textContent = 0; 
document.getElementById('score-1').textContent = 0; 
document.getElementById('current-0').textContent = 0; 
document.getElementById('current-1').textContent = 0; 




document.querySelector('.btn-roll').addEventListener('click', () => {


    if (!gamePlaying) return;
    let dice = Math.floor(Math.random()*6)+1;
    let dice2 = Math.floor(Math.random()*6)+1;
    let diceDom = document.querySelector('#dice1');
    let diceDom2 = document.querySelector('#dice2');

    diceDom.style.display = 'block';
    diceDom2.style.display = 'block';
    diceDom.src = 'dice-' + dice +'.png';
    diceDom2.src = 'dice-' + dice2 +'.png';
    
    if(pre===6 && dice === 6){
        roundScore = 0;
        pre = 0;
        scores[activePlayer]=0;
        document.querySelector ('#score-' +activePlayer).textContent = '0';
        
        change();
    }else{
        pre = dice;
    }

    if(dice !== 1 && dice2 !==1){
        roundScore += dice+dice2;
        document.getElementById('current-'+ activePlayer).textContent = roundScore;
    }else{
        roundScore = 0;
        document.getElementById('current-'+ activePlayer).textContent = roundScore;
        change();
        
    } 

});



document.querySelector('.btn-hold').addEventListener('click', () =>{

    if (!gamePlaying) return;
    scores[activePlayer]+=roundScore;
    roundScore = 0;

    document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];

    let goal = document.querySelector('.final-score').value;

    if(!goal){
        goal = 100;
    }

    if(scores[activePlayer]>=goal){
        gamePlaying = false;
        document.querySelector('#name-'+ activePlayer).textContent = 'Winner!';
        document.querySelector('#dice1').style.display = 'none';
        document.querySelector('.player-' +activePlayer+'-panel').classList.add('winner');
        document.querySelector('.player-' +activePlayer+'-panel').classList.remove('active');
        goal =  0;
        goal.textContent = "";

    } else{
        change();
    }
    
    
});


document.querySelector('.btn-new').addEventListener('click', reset);


function change(){
    
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

    document.getElementById('current-0').textContent = 0; 
    document.getElementById('current-1').textContent = 0; 

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('#dice1').style.display = 'none';
    document.querySelector('#dice2').style.display = 'none';
}


function reset(){

    scores =[0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    goal = 0;
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';
    document.getElementById('score-0').textContent = 0; 
    document.getElementById('score-1').textContent = 0; 
    document.getElementById('current-0').textContent = 0; 
    document.getElementById('current-1').textContent = 0; 
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    
}



