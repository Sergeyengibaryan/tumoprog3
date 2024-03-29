var express = require("express");
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var random = require('./random')
app.use(express.static("."));

app.get("/", function (req, res) {
    res.redirect("index.html");
});

server.listen(3000, function () {
    console.log("Example is running on port 3000");
});

var Grass = require('./grass1')
var GrassEater = require('./grasseater')
var AllEater = require('./AllEater')
var Bariq = require('./bariq')
var Chariq = require('./chariq')
var Predator = require('./Predator')
var Kaytak = require('./kaytak')
var Pojar = require('./pojar')


sideX = 50;
sideY = 70;
side = 100;
grassArr = [];
grassEaterArr = []
predArr = []
kaytakArr = []
chariqArr = []
bariqArr = []
matrix = []
pojarArr = []
function createMatrix() {
    for (let i = 0; i < sideX; i++) {
        matrix.push([])
        for (let j = 0; j < sideY; j++) {
            matrix[i].push(0)
        }

    }
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

    matrixGenerator(30, 80, 4, 3, 10, 4, 4, 6)

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
            } else if (matrix[y][x] == 7) {
                let pojar = new Pojar(x, y)
                pojarArr.push(pojar)
            }
        }
    }
}



function playGame() {
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

    io.emit('MATRIX', matrix)
}



io.on("connection", function (socket) {
    createMatrix()
    socket.emit('MATRIX', matrix)
    setInterval(function () {
        playGame()
    }, 1000)

    socket.on("p", function () {
        for (var x = 0; x < matrix.length; x++) {
            matrix[20][x] = 7;
        }

    })
})











// var clickCount = 0;
// function clickHandler(evt) {


// }
// var p = document.getElementById("statistic");



