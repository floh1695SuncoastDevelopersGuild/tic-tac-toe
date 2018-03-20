/* eslint semi: ["error", "always", { "omitLastInOneLineBlock": true}] */
/* eslint space-before-function-paren: "off" */
/* eslint indent: "off" */

class GameBoard {
    constructor() {
        this.boardArray = [];
        for (let i = 0; i < 3; i++) {
            this.boardArray.push([null, null, null]);
        }
        console.log(this.boardArray);
    }
}

const main = () => {
    new GameBoard(); // Only at the testing stage
};

document.addEventListener('DOMContentLoaded', main);
