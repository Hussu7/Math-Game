var playing = false;
var score;
var action;
var timeremaining;
var correctanswer;


// if we click on start/reset
document.getElementById("startreset").onclick =
    function () {

        // if we are playing
        if (playing == true) {
            location.reload(); // reloading the page

        }
        else {
            playing = true;

            // set score to 0
            score = 0;

            document.getElementById("scorevalue").innerHTML = score;
            // show countdown box
            show("time");
            timeremaining = 60;

            document.getElementById("timeremaining").innerHTML = timeremaining;
            hide("gameover");
            // Change button to reset
            document.getElementById("startreset").innerHTML = "Reset Game";

            setcountdown();

            generateQA();

        }

    }
    for (i =1; i<5; i++){     
  
    document.getElementById("option"+i).onclick=
    function()
    {
        if (playing==true) 
        {
            if (this.innerHTML== correctanswer) {
                score++;
                document.getElementById("scorevalue").innerHTML=score;
                show("correct");
                hide("wrong");
                
            } else {
                show("wrong");
                hide("correct");
                

                
            }

            generateQA();

        }
        
    }
 
}




// reduce time by 1sec in loops
// time left?
// yes> continue
// no> gameover
// change buttom to reset
// generate time & questions options
//  if we 


// if click answerbox
// if we are playing
// corret?
// yes
// increase score
// show correct boxfor 1 sec
// generate new question
// if no
// show try again for 1 sec]




// functions
function setcountdown() {
    action = setInterval(function () {
        timeremaining -= 1;
        document.getElementById("timeremaining").innerHTML = timeremaining;
        if (timeremaining == 0) {
            stopcountdown();
            show("gameover");
            document.getElementById("gameover").innerHTML = "<p>Your gaame is over!</p> <p>Total score:" + score + ".</p>"
            hide("time");
            hide("correct");
            hide("wrong");
            playing = false;
            document.getElementById("startreset").innerHTML = "Start Game";
        }
    }, 1000)

}
// stop countdowmn
function stopcountdown() {
    clearInterval(action);
}
// hide elements
function hide(Id) {
    document.getElementById(Id).style.display = "none";
}
// show elem,ents
function show(Id) {
    document.getElementById(Id).style.display = "block";
}
// generate questions & options
function generateQA() {
    var x = 1 + Math.round(9 * Math.random());
    var y = 1 + Math.round(9 * Math.random());
    correctanswer = x * y;
    document.getElementById("question").innerHTML = x + "x" + y;
    var correctPosition = 1 + Math.round(3 * Math.random());
    document.getElementById("option" + correctPosition).innerHTML = correctanswer; // fill one box with correct answer

    // fill other three boxes with the wrong answer

    for (i = 1; i < 5; i++) {
        if (i != correctPosition) {
            var wronganswer 
            do {
                wronganswer= (1 + Math.round(9 * Math.random())) * (1 + Math.round(9 * Math.random()));
            } while (wronganswer==correctanswer && wronganswer==wronganswer);
            
            // wrong answer
            document.getElementById("option" + i).innerHTML = wronganswer;

        }

    }



}