//generate a random rock-paper-scissors when pressing the button.




function fightBegin () {
    let player_choice = document.getElementById("player-choice").value;
    let computer_choice = Math.floor(Math.random()*4);
    let submit_button = document.getElementById("submit-button");
    const PLAYER_CHOICE_ARRAY = ["rock", "paper", "scissors"];

    if (!PLAYER_CHOICE_ARRAY.includes(player_choice))
    {
        alert("You must choose between rock, paper or scissors");
    } else {
        switch (player_choice) {
            case "rock":
                document.getElementById("player-image").src = "/images/rock.png";
            case "paper":
                document.getElementById("player-image").src = "/images/paper.png";
            case"scissors":
                document.getElementById("player-image").src = "/images/scissors.png"; 
        }
        switch(computer_choice) {
            case 1:
                document.getElementById("machine-image").src = "/images/rock.png";
            case 2:
                document.getElementById("machine-image").src = "/images/paper.png";
            case 3:
                document.getElementById("machine-image").src = "/images/scissors.png";
        }
    }

    

    
}

/*
if (submitOK == "false") {
  return false;
}
*/


//stores round number and fight result.