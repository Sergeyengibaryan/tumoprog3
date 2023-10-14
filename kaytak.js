// class GrassEater {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//     this.energy = 8;
//     this.directions = [];
//   }

//   chooseCell(character) {
//     this.getNewCoordinates();
//     var found = [];
//     for (var i in this.directions) {
//       var x = this.directions[i][0];
//       var y = this.directions[i][1];
//       if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
//         if (matrix[y][x] == character) {
//           found.push(this.directions[i]);
//         }
//       }
//     }
//     return found;
//   }

//   getNewCoordinates() {
//     this.directions = [
//       [this.x - 1, this.y - 1],

//       [this.x, this.y - 1],

//       [this.x + 1, this.y - 1],

//       [this.x - 1, this.y],

//       [this.x + 1, this.y],

//       [this.x - 1, this.y + 1],

//       [this.x, this.y + 1],

//       [this.x + 1, this.y + 1],
//     ];
//   }

//   move() {
//     if (this.energy > 0) {
//       var emptyCells = this.chooseCell(0);
//       var oneEmptyCell = random(emptyCells);
//       this.energy--;
//       if (oneEmptyCell) {
//         var neighbX = oneEmptyCell[0];
//         var neighbY = oneEmptyCell[1];

//         matrix[this.y][this.x] = 0;
//         matrix[neighbY][neighbX] = 2;
//         this.x = neighbX;
//         this.y = neighbY;

//       }
//     } 
//     else {
//       this.die();
//     }
//   }

//   eat() {
//     var grasses = this.chooseCell(1);
//     var oneGrass = random(grasses);
//     if (oneGrass) {
//       this.energy++;
//       matrix[this.y][this.x] = 0;
//       var oneGrassX = oneGrass[0];
//       var oneGrassY = oneGrass[1];
//       matrix[oneGrassY][oneGrassX] = 2;
//       this.y = oneGrassY;
//       this.x = oneGrassX;

//       for (var i in grassArr) {
//         //jnjum enq grassArr-ic
//         if (oneGrassX == grassArr[i].x && oneGrassY == grassArr[i].y){

//           grassArr.splice(i, 1);

//           break;
//         }
//           //gtnuma xotin zangvaci mejic

//       }
//     } else {
//       this.move();
//     }
//   }

//   mul() {
//     if (this.energy >= 12) {
//       var newCell = random(this.chooseCell(1));
//       if (newCell) {
//         var newGrassEater = new GrassEater(newCell[0], newCell[1]);
//         grassEaterArr.push(newGrassEater);
//         matrix[newCell[1]][newCell[0]] = 2;
//         this.energy = 0;
//       }
//     }
//   }

//   die() {


//     matrix[this.y][this.x] = 0;
//     for (var i in grassEaterArr) {
//       if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
//         grassEaterArr.splice(i, 1);
//         break;
//       }
//     }
//   }
// }
class Kaytak {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 8;
        this.directions = [];
    }

    chooseCell(character) {
        this.getNewCoordinates() // empty cells array [[1,2], [2,4]]
        let found = [] //
        for (let i in this.directions) {
            let x = this.directions[i][0]
            let y = this.directions[i][1]
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) { //
                    found.push(this.directions[i])
                }
            }
        }
        return found
    }

    getNewCoordinates() {
        this.directions = [
            [this.x, this.y - 1],
            [this.x, this.y + 1],
            [this.x, this.y - 1],
            [this.x, this.y + 1],
            [this.x, this.y - 1],
            [this.x, this.y + 1],
            [this.x, this.y - 1],
            [this.x, this.y + 1]
        ];
    }
    // die() {
    //   matrix[this.y][this.x] = 0;
    //   for (var i in grassEaterArr) {
    //     if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
    //       grassEaterArr.splice(i, 1);//[[1,2],[2,3]]
    //       break;
    //     }
    //   }
    // }
    // mul() {
    //   if (this.energy >= 10) {
    //     var newCell = random(this.chooseCell(0)); //newCell-1 datark harevan
    //     if (newCell) { //[3,4]
    //       var kay1 = new Kaytak(newCell[0], newCell[1]);
    //       kaytakArr.push(kay1);
    //       matrix[newCell[1]][newCell[0]] = 4;
    //       this.energy = 5

    //     }
    //   }
    // }
    move() {
        if (this.energy > -100) {
            // this.energy--;
            let emptyCells = this.chooseCell(0)
            let oneEmptyCell = random(emptyCells)
            if (oneEmptyCell) {
                matrix[this.y][this.x] = 0
                let newX = oneEmptyCell[0]
                let newY = oneEmptyCell[1]
                matrix[newY][newX] = 4
                this.y = newY
                this.x = newX
            }
        }
        //   else {
        //     this.die();
        //   }
    }

    eat() {

        let grasses = this.chooseCell(1)
        let oneGrass = random(grasses)
        if (oneGrass) {
            this.energy++;
            matrix[this.y][this.x] = 0;
            let oneGrassX = oneGrass[0];
            let oneGrassY = oneGrass[1];
            matrix[oneGrassY][oneGrassX] = 4;

            this.y = oneGrassY;
            this.x = oneGrassX;
            for (var i in grassArr) {
                if (oneGrassX == grassArr[i].x && oneGrassY == grassArr[i].y) {
                    grassArr.splice(i, 1);//[[1,2],[2,3]]
                    break;
                }
            }
        } else {
            this.move()
        }
    }
} 


