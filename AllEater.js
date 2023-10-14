class Predator {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 8;
        this.direction = [];
    }
    chooseCell(character) {
        this.getNewCoordinates();
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
    move() {
        if (this.energy > -20  ) {
            this.energy--;
            let emptyCells = this.chooseCell(0);
            let oneEmptyCells = random(emptyCells);
            if (oneEmptyCells) {
                matrix[this.y][this.x] = 0
                let newX = oneEmptyCells[0]
                let newY = oneEmptyCells[1]
                matrix[newY][newX] = 3
                this.x = newX
                this.y = newY
            }
        }
        else {
            this.die()
        }
    }
    mul() {
        if (this.energy >= 12) {
            var newCell = random(this.chooseCell(0));
            if (newCell) {
                var pred2 = new Predator(newCell[0], newCell[1]);
                predArr.push(pred2);
                matrix[newCell[1]][newCell[0]] = 3;
                this.energy = 5

            }
        }
    }
    eat() {
        let grasses = this.chooseCell(2);
        let oneGrass = random(grasses);
        if (oneGrass) {
            this.energy++;
            matrix[this.y][this.x] = 0
            let GrassnewX = oneGrass[0]
            let GrassnewY = oneGrass[1]
            matrix[GrassnewY][GrassnewX] = 3
            this.x = GrassnewX
            this.y = GrassnewY
            for (var i in grassEaterArr) {
                if (GrassnewX == grassEaterArr[i].x && GrassnewY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }


            }
        }
        else {
            this.move()
        }
    }
    die() {
        matrix[this.y][this.x] = 0
        for (var i in predArr) {
            if (this.x == predArr[i].x && this.y == predArr[i].y) {
                predArr.splice(i, 1);
                break

            }

        }
    }

}


