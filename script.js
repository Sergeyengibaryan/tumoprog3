socket = io();
var side = 20,m = 40, n = 40;
var matrix=[]

 function setup() {
frameRate(9);
createCanvas(n * side, m * side);
background('#acacac');   
}


function draw(m) {
    matrix = m
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix.length; x++) {
            if (matrix[y][x] == 1){
                fill('green');
                rect(x*side, y*side, side, side);
            }
            else if (matrix[y][x] == 0){
                fill('#acacac')
                rect(x*side, y*side, side, side)
            }
            else if (matrix[y][x] == 2){
                fill('yellow')
                rect(x*side, y*side, side, side)
            } 
            else if (matrix[y][x] == 3){
                fill('red')
                rect(x*side, y*side, side, side)
            } 
            else if (matrix[y][x] == 4){
                fill('cyan')
                rect(x*side, y*side, side, side)
            } 
            else if (matrix[y][x] == 5){
                fill('black')
                rect(x*side, y*side, side, side)
            } 
            else if (matrix[y][x] == 6){
                fill('white')
                rect(x*side, y*side, side, side)
            }
        }
    }    


} 

socket.on('MATRIX', (m)=>{
  matrix=m


})

socket.on('MATRIX', (m)=>{
  draw(m)

})


