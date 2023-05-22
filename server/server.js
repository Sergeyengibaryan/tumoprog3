var express = require("express");

var app = express();

app.use(express.static("../client"));

app.get("/", function (req, res) {

    res.redirect("index.html");

});
var server = require('http').createServer(app);

io = require('socket.io')(server);
server.listen(3000, function () {

    console.log("Game is running on port 3000");

});


Predator = require("./my_modules/Predator")
 Kaytak = require("./my_modules/Kaytak")
 grasseater = require("./my_modules/grasseater")
 Grass = require("./my_modules/grass1")
 Chariq = require("./my_modules/Chariq")
 Bariq = require("./my_modules/Bariq")
AllEater = require("./my_modules/AllEater")

function createObject() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let grass = new Grass(x, y)
                grassArr.push(grass)
            }
            else if (matrix[y][x] == 2) {
                let grassEater = new GrassEater(x, y)
                grassEaterArr.push(grassEater)
            }
            else if (matrix[y][x] == 3) {
                let pred1 = new Predator(x, y)
                predArr.push(pred1)
            }
            else if (matrix[y][x] == 4) {
                let kay = new Kaytak(x, y)
                kaytakArr.push(kay)
            }
            else if (matrix[y][x] == 5) {
                let char = new Chariq(x, y)
                chariqArr.push(char)
            }
            else if (matrix[y][x] == 6) {
                let bari = new Bariq(x, y)
                bariqArr.push(bari)
            }
        }
    }

}




var matrix = []
n = 100;
m = 100;
grassArr = [];
grassEaterArr = []
predArr = []
kaytakArr = []
chariqArr = []
bariqArr = []

function matrixGenerator(size, countGrass, countGrassEater, predatorCount, kaytakCount, chariqCount, bariqCount) {
    for (let i = 0; i < size; i++) {
        matrix.push([])
        for (let j = 0; j < size; j++) {
            matrix[i].push(0)
        }

    }
    for (let k = 0; k < countGrass; k++) {
        let x = Math.floor(random(size))
        let y = Math.floor(random(size))
        if (matrix[y][x] == 0) {
            matrix[y][x] = 1
        }
        else {
            k--
        }


    }
    for (let k = 0; k < countGrassEater; k++) {
        let x = Math.floor(random(size))
        let y = Math.floor(random(size))
        if (matrix[y][x] == 0) {
            matrix[y][x] = 2
        }
        else {
            k--
        }
    }
    for (let k = 0; k < predatorCount; k++) {
        let x = Math.floor(random(size))
        let y = Math.floor(random(size))
        if (matrix[y][x] == 0) {
            matrix[y][x] = 3
        }
        else {
            k--
        }
        for (let k = 0; k < kaytakCount; k++) {
            let x = Math.floor(random(size))
            let y = Math.floor(random(size))
            if (matrix[y][x] == 0) {
                matrix[y][x] = 4

            }
            else {
                k--
            }



        }

        for (let k = 0; k < chariqCount; k++) {
            let x = Math.floor(random(size))
            let y = Math.floor(random(size))
            if (matrix[y][x] == 0) {
                matrix[y][x] = 5

            }
            else {
                k--
            }



        }
        for (let k = 0; k < bariqCount; k++) {
            let x = Math.floor(random(size))
            let y = Math.floor(random(size))
            if (matrix[y][x] == 0) {
                matrix[y][x] = 6

            }
            else {
                k--
            }



        }


    }
}

matrixGenerator(30, 80, 4, 3, 10, 4, 4, 6);
createObject();
setInterval(game,1000)


io.on('connection', function (socket) {
socket.emit("my_matrix",matrix);
    });
    function game()  {
        for (var i = 0; i < grassArr.length; i++) {
            grassArr[i].mul();
        }
    
        for (var i = 0; i < grassEaterArr.length; i++) {
            grassEaterArr[i].mul()
        }
        for (var i = 0; i < grassEaterArr.length; i++) {
            grassEaterArr[i].eat()
    
        }
        for (var i = 0; i < predArr.length; i++) {
            predArr[i].mul()
    
        }
        for (var i = 0; i < predArr.length; i++) {
            predArr[i].eat()
    
        }
        for (var i = 0; i < kaytakArr.length; i++) {
            kaytakArr[i].eat()
    
        }
        for (var i = 0; i < chariqArr.length; i++) {
            chariqArr[i].mul()
    
        }
    
        setTimeout(function () {
            for (var i = 0; i < chariqArr.length; i++) {
                chariqArr[i].eat()
    
            }
        }, 27000)
    
        setTimeout(function () {
            for (var i = 0; i < bariqArr.length; i++) {
                bariqArr[i].eat()
            }
        }, 43000)
    
    
    
    
    io.sockets.emit("my_matrix", matrix);
    
    }
    