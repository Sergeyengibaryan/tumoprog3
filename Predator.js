class Predator {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.energy = 4;
    this.directions = []
  }
  //getting new coordinates for neighbor cells
  getNewCoordinates() {
    this.directions = [
      [this.x - 1, this.y - 1],
      [this.x, this.y - 1],
      [this.x + 1, this.y - 1],
      [this.x - 1, this.y],
      [this.x + 1, this.y],
      [this.x - 1, this.y + 1],
      [this.x, this.y + 1],
      [this.x + 1, this.y + 1]
    ];
  }
  // choosing cell between empty(0) and grass(1)
  chooseCell(character) {
    this.getNewCoordinates()
    var found = [];
    for (var i in this.directions) {
      var x = this.directions[i][0];
      var y = this.directions[i][1];
      if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

        if (matrix[y][x] == character) {
          found.push(this.directions[i]);
        }
      }
    }
    return found;

  }
  die() {
    matrix[this.y][this.x] = 0;
    for (var i in predArr) {
      if (this.x == predArr[i].x && this.y == predArr[i].y) {
        predArr.splice(i, 1);
        break;
      }
    }

  }


  // method that allows to move within changing cell coordinates
  move() {
    if (this.energy > 0) {
      this.energy--;
      var emptyCells = this.chooseCell(0)
      var oneEmptyCell = random(emptyCells);
      if (oneEmptyCell) {
        matrix[this.y][this.x] = 0;
        var newX = oneEmptyCell[0];
        var newY = oneEmptyCell[1];
        matrix[newY][newX] = 3;
        this.x = newX;
        this.y = newY;
      }
    } else {
      this.die();

    }
  }

  eat() {
    let eaters = this.chooseCell(2);
    let preds = this.chooseCell(1);
    let all = eaters.concat(preds);
    let oneGrass = random(all);
    if (oneGrass) {
      this.energy++;
      matrix[this.y][this.x] = 0;
      var oneGrassX = oneGrass[0];
      var oneGrassY = oneGrass[1];
      matrix[oneGrassY][oneGrassX] = 3;
      this.x = oneGrassX;
      this.y = oneGrassY;

      for (var i in grassArr) {
        if (oneGrassX == grassArr[i].x && oneGrassY == grassArr[i].y) {
          grassArr.splice(i, 1);
          break;
        }
      }
      // for (var i in grassEaterArr) {
      //   if (oneGrassX == grassEaterArr[i].x && oneGrassY == grassEaterArr[i].y) {
      //     grassEaterArr.splice(i, 1);
      //     break;
      //   }
      // }

    } else {
      this.move();
    }
  } 
  mul() {
    this.multiply++;
    var newCell = random(this.chooseCell(0));
    console.log(newCell);
    if (this.multiply >= 5 && newCell) {
      var newGrass = new Grass(newCell[0], newCell[1]);
      grassArr.push(newGrass);
      matrix[newCell[1]][newCell[0]] = 4;
      this.multiply = 0;

    }

  }
}
