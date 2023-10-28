let socket = io();
var side = 20, m = 40, n = 40;
var matrix = []



function setup() {
    createCanvas(n * side, m * side);
    background('#acacac');
}


let my_btn = document.getElementById("btn");
let colors = {
    white: "white",
    green: "green",
    yellow: "yellow",
    red: "red",
    cyan: "cyan",
    black: "black",
    fire: "indigo"
}



let slow_btn = document.getElementById("slow")
let fast_btn = document.getElementById("fast")
let button_btn = document.getElementById("exanak")
let pojar_btn = document.getElementById("pojar")
my_btn.addEventListener("click", changeColor);
pojar_btn.addEventListener("click", pojar)


function pojar() {
    socket.emit("p")
}

function changeColor() {
    if (colors.green === "green") {
        colors = {
            white: "purple",
            green: "white",
            yellow: "blue",
            red: "red",
            cyan: "cyan",
            black: "black",
            fire: "yellow"
        };
    } else if (colors.green === "white") {
        colors = {
            white: "white",
            green: "green",
            yellow: "yellow",
            red: "red",
            cyan: "cyan",
            black: "black",
            fire: "orange"
        }
    }
    else {
        colors = {
            white: "white",
            green: "green",
            yellow: "yellow",
            red: "red",
            cyan: "cyan",
            black: "black",
            fire: "ora"
        }
    }
}




function draw(m) {
    matrix = m
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix.length; x++) {
            if (matrix[y][x] == 1) {
                fill(colors.green);
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill('#acacac')
                rect(x * side, y * side, side, side)
            }
            else if (matrix[y][x] == 2) {
                fill(colors.yellow)
                rect(x * side, y * side, side, side)
            }
            else if (matrix[y][x] == 3) {
                fill(colors.red)
                rect(x * side, y * side, side, side)
            }
            else if (matrix[y][x] == 4) {
                fill(colors.cyan)
                rect(x * side, y * side, side, side)
            }
            else if (matrix[y][x] == 5) {
                fill(colors.black)
                rect(x * side, y * side, side, side)
            }
            else if (matrix[y][x] == 6) {
                fill(colors.white)
                rect(x * side, y * side, side, side)
            }else if (matrix[y][x] == 7) {
                fill(colors.fire)
                rect(x * side, y * side, side, side)
            }
        }
    }


}

socket.on('MATRIX', (m) => {
    matrix = m


})

socket.on('MATRIX', (m) => {
    draw(m)

})


