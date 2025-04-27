let squares = document.querySelectorAll("td")
let button = document.querySelector("button")
let turn = "eks"

function reset() {
    for (let i = 0; i < 9; i++) {
        squares[i].textContent = "";
    }
    document.querySelector("#result").textContent = "Game On!";
    document.querySelector("#result").style.color = "black"
    turn = "eks"
}

function winner() {
    if (one.textContent + two.textContent + three.textContent === "XXX" ||
    four.textContent + five.textContent + six.textContent === "XXX" ||
    seven.textContent + eight.textContent + nine.textContent === "XXX" ||
    one.textContent + four.textContent + seven.textContent === "XXX" ||
    two.textContent + five.textContent + eight.textContent === "XXX" ||
    three.textContent + six.textContent + nine.textContent === "XXX" ||
    one.textContent + five.textContent + nine.textContent === "XXX" ||
    three.textContent + five.textContent + seven.textContent === "XXX") {
        document.querySelector("#result").textContent = "X Wins";
        document.querySelector("#result").style.color = "green"
        turn = ""
    }
    else if (one.textContent + two.textContent + three.textContent === "OOO" ||
    four.textContent + five.textContent + six.textContent === "OOO" ||
    seven.textContent + eight.textContent + nine.textContent === "OOO" ||
    one.textContent + four.textContent + seven.textContent === "OOO" ||
    two.textContent + five.textContent + eight.textContent === "OOO" ||
    three.textContent + six.textContent + nine.textContent === "OOO" ||
    one.textContent + five.textContent + nine.textContent === "OOO" ||
    three.textContent + five.textContent + seven.textContent === "OOO") {
        document.querySelector("#result").textContent = "O Wins";
        document.querySelector("#result").style.color = "green"
        turn = ""
    }
    else if ((one.textContent + two.textContent + three.textContent + four.textContent + five.textContent + six.textContent + seven.textContent + eight.textContent + nine.textContent).length === 9) {
        document.querySelector("#result").style.color = "blue"
        document.querySelector("#result").textContent = "It's a draw"
    }
}

function turnPlay() {
    if (this.innerHTML === "") {
        if (turn === "eks") {
            this.innerHTML = "X"
            turn = "oh"
        }
        else if (turn === "oh") {
            this.innerHTML = "O"
            turn = "eks"
        } 
    }
    winner() 
}

button.addEventListener("click", reset)

for (let i = 0; i < 9; i++) {
    squares[i].addEventListener("click", turnPlay)
}
