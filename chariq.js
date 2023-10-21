var LivingCreature = require('./LivingCreature')
let random = require("./random");

module.exports=class Chariq extends LivingCreature{
    constructor(x, y) {
      super(x,y)
      this.energy = 8;
      this.directions = [];
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

    mul() {
      if (this.energy >= 10) {
        var newCell = random(this.chooseCell(4)); //newCell-1 datark harevan
        if (newCell) { //[3,4]
          var chariq1 = new Chariq(newCell[0], newCell[1]);
          grassEaterArr.push(chariq1);
          matrix[newCell[1]][newCell[0]] = 5;
          this.energy = 5
  
        }
      }
    }
    move() {
      if (this.energy > -300) {
        this.energy--;
        let emptyCells = this.chooseCell(0)
        let oneEmptyCell = random(emptyCells)
        if (oneEmptyCell) {
          matrix[this.y][this.x] = 0
          let newX = oneEmptyCell[0]
          let newY = oneEmptyCell[1]
          matrix[newY][newX] = 5
          this.y = newY
          this.x = newX
        }
      }

    }
  
    eat() {
     
      let grasses = this.chooseCell(4)
      let oneGrass = random(grasses)
      if (oneGrass) {
        this.energy++;
        matrix[this.y][this.x] = 0;
        let oneGrassX = oneGrass[0];
        let oneGrassY = oneGrass[1];
        matrix[oneGrassY][oneGrassX] = 5;
  
        this.y = oneGrassY;
        this.x = oneGrassX;
    
        for (var i in kaytakArr) {
            if (oneGrassX == kaytakArr[i].x && oneGrassY == kaytakArr[i].y) {
              kaytakArr.splice(i, 1);//[[1,2],[2,3]]
              break;
            }
          }
      } else {
        this.move()
      } 
    }
    }
  