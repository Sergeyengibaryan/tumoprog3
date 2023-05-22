var socket = io();
socket.on("my_matrix",my_draw)

function setup() {
    frameRate(10);
    //createCanvas(matrix[0].length * side, matrix.length)
    createCanvas(400,400)
    background("#acanac"); //client
}

function my_draw(){
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix.length; x++) {
            if (matrix[y][x] == 1) {
                fill('green');
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill('#acacac')
                rect(x * side, y * side, side, side)
            }
            else if (matrix[y][x] == 2) {
                fill('yellow')
                rect(x * side, y * side, side, side)
            }
            else if (matrix[y][x] == 3) {
                fill('red')
                rect(x * side, y * side, side, side)
            }
            else if (matrix[y][x] == 4) {
                fill('cyan')
                rect(x * side, y * side, side, side)
            }
            else if (matrix[y][x] == 5) {
                fill('black')
                rect(x * side, y * side, side, side)
            }
            else if (matrix[y][x] == 6) {
                fill('white')
                rect(x * side, y * side, side, side)
            }
        }
    }
}