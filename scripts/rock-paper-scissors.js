var round_number = 1;
var fight_count_player = 0;
var fight_count_machine = 0;


//stores round number and fight result.
function fightProgress() {

    if (round_number <= 3) {
        document.getElementById("round-number").innerHTML = `Round ${round_number} (out of 3)...`;
        document.getElementById("fight-count-player").innerHTML = fight_count_player.toString();
        document.getElementById("fight-count-machine").innerHTML = fight_count_machine.toString();
        round_number++;      
    } else {
        fightResult(); 
    }
    
}

function fightResult() {
    if (fight_count_player > fight_count_machine) {
        /*in case you win, lateral divs become invisible and central one changes image
        to the "you win" case. The reset button becomes visible too */
        document.getElementById("player-image").style.visibility = "hidden";
        document.getElementById("machine-image").style.visibility = "hidden";
        document.getElementById("vs-image").src = "/images/you-win.png"
        document.getElementById("vs-image").style.transform = "none";
        document.getElementById("reset-button").style.visibility = "visible";
    } else {
        /* in case you lose, lateral divs become invisible and central one changes to
        game-over-continue image. Selector appears in continue: yes by default.*/
        document.getElementById("player-image").style.visibility = "hidden";
        document.getElementById("machine-image").style.visibility = "hidden";
        document.getElementById("vs-image").src = "/images/fail.png";
        document.getElementById("vs-image").style.transform = "none";
        document.getElementById("reset-button").style.visibility = "visible";
    }
}


//when user clicks reset button, images, round number and fight count reset
function fightReset(){
    document.getElementById("round-number").innerHTML = "Round 1 (out of 3)...";
    document.getElementById("fight-count-player").innerHTML = "0";
    document.getElementById("fight-count-machine").innerHTML = "0";
    document.getElementById("player-image").src = "/images/question.png";
    document.getElementById("player-image").style.transform = "scale(0.5)";
    document.getElementById("player-image").style.visibility = "visible";
    document.getElementById("vs-image").src = "/images/versus.png";
    document.getElementById("vs-image").style.transform = "scale(0.15)";
    document.getElementById("machine-image").src = "/images/question.png";
    document.getElementById("machine-image").style.transform = "scale(0.5)";
    document.getElementById("machine-image").style.visibility = "visible";
    document.getElementById("reset-button").style.visibility = "hidden";
    round_number = 1;
    fight_count_player = 0;
    fight_count_machine = 0;
}



//stores round score, depending on player and machine choice
function roundScore () {
    if ((document.getElementById("player-image").getAttribute("src") == "/images/rock.png" &&
    document.getElementById("machine-image").getAttribute("src") == "/images/scissors.png") ||
    (document.getElementById("player-image").getAttribute("src") == "/images/paper.png" &&
    document.getElementById("machine-image").getAttribute("src") == "/images/rock.png") ||
    (document.getElementById("player-image").getAttribute("src") == "/images/scissors.png" &&
    document.getElementById("machine-image").getAttribute("src") == "/images/paper.png")) {
        fight_count_player++;
    } else if ((document.getElementById("player-image").getAttribute("src") == "/images/rock.png" &&
    document.getElementById("machine-image").getAttribute("src") == "/images/rock.png") ||
    (document.getElementById("player-image").getAttribute("src") == "/images/paper.png" &&
    document.getElementById("machine-image").getAttribute("src") == "/images/paper.png") ||
    (document.getElementById("player-image").getAttribute("src") == "/images/scissors.png" &&
    document.getElementById("machine-image").getAttribute("src") == "/images/scissors.png")){
    } else {
        fight_count_machine++;
    }
}


//generate a random 1-3 number for the random computer choice.
function getRandomChoice () {
    return Math.floor(Math.random()*4);
}


//function to associate images to player and computer
function fightBegin () {
    let player_choice = document.getElementById("player-choice").value;
    let computer_choice = getRandomChoice();
    let submit_button = document.getElementById("submit-button");
    const PLAYER_CHOICE_ARRAY = ["rock", "paper", "scissors"];

    if (!PLAYER_CHOICE_ARRAY.includes(player_choice))
    {
        alert("You must choose between rock, paper or scissors");
    } else {
        switch (player_choice) {
            case "rock":
                document.getElementById("player-image").src = "/images/rock.png";
                break;
            case "paper":
                document.getElementById("player-image").src = "/images/paper.png";
                break;
            case"scissors":
                document.getElementById("player-image").src = "/images/scissors.png"; 
                break;
        }        
        switch(computer_choice) {
            case 1:
                document.getElementById("machine-image").src = "/images/rock.png";
                break;
            case 2:
                document.getElementById("machine-image").src = "/images/paper.png";
                break;
            case 3:
                document.getElementById("machine-image").src = "/images/scissors.png";
                break;
        }
        
    }
roundScore();
fightProgress();    
}



