var aTime = 10;
var bTime = 10;
var bonusTime = 2;
var moves = [0, 0];

var tickRate = 10; // ticks per second

var tick = 0;
var previoustTick = 0;
var temp = 0;

var aTurn = true;
var gameLast = false;
var gamePaused = false;

// cosmetics
var avtiveFiledColor = 'rgb(29, 41, 144)';
var notActiveFieldColor = 'rgb(90, 90, 90)';

function switchTurn(){
    if(gamePaused) return;
    if(!gameLast) return;
    if(aTurn){
        aTime += bonusTime;
        aTurn = false;
        moves[1] += 1;
        updateATime();
    }
    else {
        bTime += bonusTime;
        aTurn = true;
        moves[0] += 1;
        updateBTime();
    }
    previoustTick

    temp = tick;
    tick = previoustTick;
    previoustTick = temp;

    updateMoves();
}

function updateMoves(){
    document.getElementsByClassName('moves')[0].innerHTML = moves[0];
    document.getElementsByClassName('moves')[1].innerHTML = moves[1];
}

function updateATime(){
    document.getElementsByClassName('timeLeft')[0].innerHTML = aTime + 's';
    
}

function updateBTime(){
    document.getElementsByClassName('timeLeft')[1].innerHTML = bTime + 's';
    
}

function switchTurnA(){
    if(!gameLast) return;
    if(!aTurn) return;
    if(gamePaused) return;
    switchTurn();
    document.getElementById('top').style.backgroundColor = notActiveFieldColor;
    document.getElementById('bottom').style.backgroundColor = avtiveFiledColor;
}

function switchTurnB(){
    if(!gameLast) return;
    if(aTurn) return;
    if(gamePaused) return;
    switchTurn();
    document.getElementById('bottom').style.backgroundColor = notActiveFieldColor;
    document.getElementById('top').style.backgroundColor = avtiveFiledColor;
}

function gamePause(){
    if(!gameLast) return;
    if(!gamePaused) gamePaused = true;
    else{
        gamePaused = false;
        timer();
    }
}

function gameStart(){
    updateSomeCss();
    gameLast = true;
    document.getElementById('gameStarter').style.display = 'none';
    updateATime();
    updateBTime();
    aTurn = Date.now() % 2;
    if(aTurn) aTime -= bonusTime;
    else bTime -= bonusTime;

    switchTurn();
    setUpActiveFieldColor();
    timer();
}

function gameEnd(){
    if(aTurn){
        document.getElementsByClassName('timeLeft')[0].innerHTML = 'You have lost the game :(';
        document.getElementsByClassName('timeLeft')[0].style.color = 'rgb(184, 34, 34)';
        document.getElementsByClassName('timeLeft')[1].innerHTML = 'You are a winner!';
        document.getElementsByClassName('timeLeft')[1].style.color = 'rgb(25, 199, 34)';
    }else{
        document.getElementsByClassName('timeLeft')[0].innerHTML = 'You are a winner!';
        document.getElementsByClassName('timeLeft')[0].style.color = 'rgb(25, 199, 34)';
        document.getElementsByClassName('timeLeft')[1].innerHTML = 'You have lost the game :(';
        document.getElementsByClassName('timeLeft')[1].style.color = 'rgb(184, 34, 34)';
    }
    gameLast = false;
    
    if(aTurn) console.log('player B won in ' + moves[1] + ' moves');
    else console.log('player A won in ' + moves[0] + ' moves');
}

var timer = function(){
    if(gamePaused) return;
    tick++;
    if(tick >= tickRate){
        tick = 0;
        if(aTurn)
        {
            aTime--;
            updateATime();
        }else{
            bTime--;
            updateBTime();
        }
    }
    if(aTime != 0 && bTime != 0) setTimeout(timer, 1000/tickRate);
    else gameEnd();
}

function setUpActiveFieldColor(){
    if(aTurn)
    {
        document.getElementById('bottom').style.backgroundColor = notActiveFieldColor;
        document.getElementById('top').style.backgroundColor = avtiveFiledColor;
    }else{
        document.getElementById('top').style.backgroundColor = notActiveFieldColor;
        document.getElementById('bottom').style.backgroundColor = avtiveFiledColor;
    }
}

function updateSomeCss(){
    document.getElementsByClassName('timeLeft')[0].style.transform = 'rotate(-180deg)';
    document.getElementsByClassName('moves')[1].style = 'position: absolute; color: white; font-size: 30px; right: 5%; bottom: 5%;';
    document.getElementsByClassName('moves')[0].style = 'position: absolute; color: white; left: 5%; font-size: 30px; transform: rotate(-180deg); top: 5%;';
}