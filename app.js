let days = 0;
const possibleTools = ["teeth", "rusty scissors", "old-timey lawnmower", "fancy lawnmower", "crew",]
const player = {
    firstName: "Rusty",
    lastName: "Shackleford",
    money: 0,
    tools: [possibleTools[0]],
    currentTool: possibleTools[0]
}
let gameInProgress = true
let playerDayChoice;



function cutGrass(){
    playerChoosesDays();
   if(isNaN(playerDayChoice)){
        alert("I'm sorry. I didn't get that.")
        playerChoosesDays();
   }
    for(let i = 1; i <= playerDayChoice; i++){
        if(player.currentTool === possibleTools[0]){
            days += 1;
            player.money += 1;
        }
        else if(player.currentTool === possibleTools[1]){
            days += 1;
            player.money += 5;
        }
        else if(player.currentTool === possibleTools[2]){
            days += 1;
            player.money += 50;
        }
        else if(player.currentTool === possibleTools[3]){
            days += 1;
            player.money += 100;
        }
        else if(player.currentTool === possibleTools[4]){
            days += 1;
            player.money += 250;
        }
    }    
    if(player.currentTool === possibleTools[0]){
        buyRustyScissors();
    }
    else if(player.currentTool === possibleTools[1]){
        buyOldTimeyLawnmower();
    }
    else if(player.currentTool === possibleTools[2]){
        buyFancyLawnmower();
    }
    else if(player.currentTool === possibleTools[3]){
        hireCrew();
    }
    else if(player.currentTool === possibleTools[4]){
        endGame();
    }
}


function buyRustyScissors(){
    if(player.currentTool === possibleTools[0] && player.money >= 5 && player.tools.includes(possibleTools[1]) === false){
        let playerResponse = prompt(`You have worked for ${days} days and have $${player.money}. Would you like to purchase a pair of ${possibleTools[1]} to help grow your buisness?`)
            if (playerResponse.toUpperCase() === "YES"){
                player.money -= 5
                player.tools.push(possibleTools[1])
                player.currentTool = player.tools[1]
                alert(`You have purchased the ${player.currentTool}`)                
                cutGrass();
                console.log(player.currentTool)
        }
            else if (playerResponse.toUpperCase() === "NO"){
                cutGrass();
            }
            else{
                iDontUnderstandYou();
                buyRustyScissors();
            }
    } 
}


function buyOldTimeyLawnmower(){
    if(player.currentTool === possibleTools[1] && player.money >= 25 && player.tools.includes(possibleTools[2]) === false){
        let playerResponse = prompt(`You have worked for ${days} days and have $${player.money}. Would you like to purchase an ${possibleTools[2]} to help grow your buisness?`)
        if(playerResponse.toUpperCase() === "YES"){
            player.money -= 25;
            player.tools.push(possibleTools[2]);
            player.currentTool = player.tools[2];
            alert(`You have purchased the ${player.currentTool}`)
            cutGrass();
        }
        else if (playerResponse.toUpperCase() === "NO"){
            cutGrass();
        }
        else{
            iDontUnderstandYou();
            buyOldTimeyLawnmower();
        }
    }
}


function buyFancyLawnmower(){
    if(player.currentTool === possibleTools[2] && player.money >= 250 && player.tools.includes(possibleTools[3]) === false){
        let playerResponse = prompt(`You have worked for ${days} days and have $${player.money}. Would you like to purchase a ${possibleTools[3]} to help grow your buisness?`)
        if (playerResponse.toUpperCase() === "YES"){
            player.money -= 250;
            player.tools.push(possibleTools[3]);
            player.currentTool = possibleTools[3];
            alert(`You have purchased the ${player.currentTool}`)
            cutGrass();
        }
        else if(playerResponse.toUpperCase() === "NO"){
            cutGrass();
        }
        else{
            iDontUnderstandYou();
            buyFancyLawnmower();
        }
    }
}


function hireCrew(){
    if(player.currentTool === possibleTools[3] && player.money >= 500 && player.tools.includes(possibleTools[4]) === false){
        let playerResponse = prompt(`You have worked for ${days} days and have $${player.money}. Would you like to hire a ${possibleTools[4]} to help grow your buisness?`)
        if(playerResponse.toUpperCase() === "YES"){
            player.money -= 500;
            player.tools.push(possibleTools[4]);
            player.currentTool = possibleTools[4];
            alert(`You have hired a ${player.currentTool}`)
            cutGrass();
        }
        else if(playerResponse.toUpperCase() === "NO"){
            cutGrass();
        }
        else{
            iDontUnderstandYou();
            hireCrew();
        }
    }
}


function endGame(){
    if(player.currentTool === possibleTools[4] && player.money >= 1000){
        gameInProgress = false;
        alert(`Congratulations! You win! You've achieved the American Dream! You've been in buisiness for ${days} days and have earned $${player.money}. Hard working people like you are what makes America great.`)
    }
}


function iDontUnderstandYou(){
    alert(`I'm sorry. I don't understand your response. Please enter "yes" or "no".`)
}


function playerChoosesDays(){
    playerDayChoice = parseInt(prompt("How many days would you like to work?"))
}


player.name = prompt("Please enter your name: ")
alert(`Congratulation ${player.name}! You've just incorporated. Your lawncare bussiness is officially up and running. Unfortunately, your funding fell through so you'll have to start cutting grass with just you ${player.currentTool}, but if you pull yourself up by your bootstraps (or molars) and work hard, maybe you can afford better equipment.`)
cutGrass();