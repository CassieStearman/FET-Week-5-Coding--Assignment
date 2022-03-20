let turn = document.getElementById("turn");
let boxes = document.querySelectorAll("#main div"), X_or_O = 0;

    //This function displays the winner
    function selectWinnerBoxes(b1, b2, b3) {
        b1.classList.add("win");
        b2.classList.add("win");
        b3.classList.add("win");
        turn.innerHTML = b1.innerHTML + " is a winner";
        turn.style.fontSize = "40px";

    }

    //This function determines winning combinations, and declares a cats game if there is a draw
    function getWinner() {

        let tieGame = true;

        let box1 = document.getElementById("box1"),
            box2 = document.getElementById("box2"),
            box3 = document.getElementById("box3"),
            box4 = document.getElementById("box4"),
            box5 = document.getElementById("box5"),
            box6 = document.getElementById("box6"),
            box7 = document.getElementById("box7"),
            box8 = document.getElementById("box8"),
            box9 = document.getElementById("box9");

        if (box1.innerHTML !== "" && box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML)
            selectWinnerBoxes(box1, box2, box3);

        if (box4.innerHTML !== "" && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML)
            selectWinnerBoxes(box4, box5, box6);

        if (box7.innerHTML !== "" && box7.innerHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML)
            selectWinnerBoxes(box7, box8, box9);

        if (box1.innerHTML !== "" && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML)
            selectWinnerBoxes(box1, box4, box7);

        if (box2.innerHTML !== "" && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerHTML)
            selectWinnerBoxes(box2, box5, box8);

        if (box3.innerHTML !== "" && box3.innerHTML === box6.innerHTML && box3.innerHTML === box9.innerHTML)
            selectWinnerBoxes(box3, box6, box9);

        if (box1.innerHTML !== "" && box1.innerHTML === box5.innerHTML && box1.innerHTML === box9.innerHTML)
            selectWinnerBoxes(box1, box5, box9);

        if (box3.innerHTML !== "" && box3.innerHTML === box5.innerHTML && box3.innerHTML === box7.innerHTML)
            selectWinnerBoxes(box3, box5, box7);   
        
        for(let i = 0; i < boxes.length; i++){
            if(boxes[i].innerHTML === "")
                tieGame = false;
        }

        if (tieGame) {
            turn.innerHTML = "Cat's Game!"
        }
            
    }

    //this is the function to clear the board
    function clearBoard() {
      for (let i = 0; i < boxes.length; i++) {
        boxes[i].classList.remove("win");
        boxes[i].innerHTML = "";
        turn.innerHTML = "Tic-Tac-Toe";
        turn.style.fontSize = "40px";
      }

    }

    // This for loop determins whether an X or O goes in the box
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].onclick = function () {
            if (this.innerHTML !== "X" && this.innerHTML !== "O") {
                if (X_or_O % 2 === 0) {
                    this.innerHTML = "X";
                    turn.innerHTML = "O's Turn";
                    getWinner();
                    X_or_O += 1;

                } else {
                    this.innerHTML = "O";
                    turn.innerHTML = "X's Turn";
                    getWinner();
                    X_or_O += 1;
                }
            }
        };
    }
    
    //code to connect the clear board function to the HTML
    document.getElementById('clear board').addEventListener('click', clearBoard);  