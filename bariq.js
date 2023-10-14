
class Bariq {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.energy = 8;
      this.directions = [];
    }
  
    chooseCell(character) { // empty cells array [[1,2], [2,4]]
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
    die() {
      matrix[this.y][this.x] = 0;
      for (var i in grassEaterArr) {
        if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
          grassEaterArr.splice(i, 1);//[[1,2],[2,3]]
          break;
        }
      }
    }
    mul() {
      if (this.energy >= 9) {
        var newCell = random(this.chooseCell(0)); //newCell-1 datark harevan
        if (newCell) { //[3,4]
          var newGrassEater = new Bariq(newCell[0], newCell[1]);
          bariqArr.push(newGrassEater);
          matrix[newCell[1]][newCell[0]] = 6;
          this.energy = 9
  
        }
      }
    }
    move() {
      if (this.energy > -1000) {
        this.getNewCoordinates();
        this.energy--;
        let emptyCells = this.chooseCell(0)
        let oneEmptyCell = random(emptyCells)
        if (oneEmptyCell) {
          matrix[this.y][this.x] = 0
          let newX = oneEmptyCell[0]
          let newY = oneEmptyCell[1]
          matrix[newY][newX] = 6
          this.y = newY
          this.x = newX
        }
      }
      else {
        this.die();
      }
    }
  
    eat() {
      this.getNewCoordinates()
      let grasses = this.chooseCell(5)
      let oneGrass = random(grasses)
      if (oneGrass) {
        this.energy++;
        matrix[this.y][this.x] = 0;
        let oneGrassX = oneGrass[0];
        let oneGrassY = oneGrass[1];
        matrix[oneGrassY][oneGrassX] = 6;
  
        this.y = oneGrassY;
        this.x = oneGrassX;
        for (var i in chariqArr) {
          if (oneGrassX == chariqArr[i].x && oneGrassY == chariqArr[i].y) {
            chariqArr.splice(i, 1);//[[1,2],[2,3]]
            break;
          }
        }
      } else {
        this.move()
      }
    }
  }