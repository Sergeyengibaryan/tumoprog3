var LivingCreature = require("./Allclasses")
module.exports = class Kaytak extends LivingCreature {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 8;
        this.directions = [];
    }

    chooseCell(character) {
        this.getNewCoordinates()
        let found = []
        for (let i in this.directions) {
            let x = this.directions[i][0]
            let y = this.directions[i][1]
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
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

    move() {
        if (this.energy > -100) {

            let emptyCells = this.chooseCell(0)
            let oneEmptyCell = this.random(emptyCells)
            if (oneEmptyCell) {
                matrix[this.y][this.x] = 0
                let newX = oneEmptyCell[0]
                let newY = oneEmptyCell[1]
                matrix[newY][newX] = 4
                this.y = newY
                this.x = newX
            }
        }

    }

    eat() {

        let grasses = this.chooseCell(1)
        let oneGrass = this.random(grasses)
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
                    grassArr.splice(i, 1);
                    break;
                }
            }
        } else {
            this.move()
        }
    }
}


