//     <!-- GAME JAVASCRIPT -->
// <!-- Follows is the game state -->

// Environment variables.
// This code is only executed once.
var GRID_HEIGHT = 40; // = 600 / 15
var GRID_WIDTH = 60; // = 900 / 15
var BLOCK_SIZE = 15;
// Accesses the correct COL_CHANGE and ROW_CHANGE
var DIRECTIONS = {
    up: 0,
    right: 1,
    down: 2,
    left: 3
}
/*
        0
    3       1
        2
*/
var COL_CHANGE = [0, 1, 0, -1];
var ROW_CHANGE = [-1, 0, 1, 0];

var SNAKE_DIRECTION = DIRECTIONS["up"];
var IS_DYING = false;
var IS_EATING = false;
var GAME_SPEED = 200;

// Get the snakeGrid so we can dynamically change it throughout the game.
var gameGrid = document.getElementById("snakeGrid");
var scoreText = document.getElementById("score");

// Handle user input
document.onkeydown = checkKey;
function checkKey(e) {
    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
        SNAKE_DIRECTION = DIRECTIONS["up"];
    } else if (e.keyCode == '40') {
        // down arrow
        SNAKE_DIRECTION = DIRECTIONS["down"];
    } else if (e.keyCode == '37') {
        // left arrow
        SNAKE_DIRECTION = DIRECTIONS["left"];
    } else if (e.keyCode == '39') {
        // right arrow
        SNAKE_DIRECTION = DIRECTIONS["right"];
    }
}

var snake = [];
var PLAY_GAME = true;

var gameScore = 0;

var snakeHead = new SnakePiece(20, 30);
snake.push(new SnakePiece(20, 31));
snake.push(new SnakePiece(20, 32));
snake.push(new SnakePiece(20, 33));
snake.push(new SnakePiece(20, 34));

var foods = [];
foods.push(new FoodPiece());
foods.push(new FoodPiece());
foods.push(new FoodPiece());

// the shift() and unshift() functions let you use a javascript array as a queue.
snake.push(snakeHead);

// Will execute function() every 1000 milliseconds
if (PLAY_GAME) {
    setInterval(function () {

        ///////////////////////// Main Game Loop //////////////////////

        // Move the snake one space in it's current direction.
        snake.unshift(new SnakePiece(snake[0].row + ROW_CHANGE[SNAKE_DIRECTION], snake[0].col + COL_CHANGE[SNAKE_DIRECTION]));

        IS_EATING = isEating();
        if (IS_EATING) {
            gameScore = gameScore + 1;
            console.log("YOU ATE A FOOD");
        }
        // move tail of snake
        if (!IS_EATING) {
            gameGrid.removeChild(snake.pop().el);
        }

        IS_DYING = isDying();
        if (IS_DYING) {
            // The snake collided with a wall or with itself.
            PLAY_GAME = false;
            console.log("YOU'VE DIED");
        }

        // End of cycle logic.
        IS_EATING = false;
        IS_DYING = false;

        console.log(SNAKE_DIRECTION);
        console.log(foods);
        scoreText.innerHTML = "Your Score: " + gameScore.toString();

        // Spawn more foods if they're all gone.
        if (foods.length < 1) {
            foods.push(new FoodPiece());
            foods.push(new FoodPiece());
            foods.push(new FoodPiece());
        }
    }, GAME_SPEED);
}

// Constructor for a new snake piece.
function SnakePiece(row, col) {

    var mySnakePieceElement = document.createElement("div");
    mySnakePieceElement.className = "snake";
    mySnakePieceElement.style.top = (row * BLOCK_SIZE) + "px";
    mySnakePieceElement.style.left = (col * BLOCK_SIZE) + "px";
    gameGrid.appendChild(mySnakePieceElement);

    // curRow and curCol are declared inside the function,
    // so the calling code can't use it. It's javascript's
    // version of a private variable.
    //var curRow = row;
    //var curCol = col;

    this.col = col;
    this.row = row;
    this.el = mySnakePieceElement;

    //this.movePiece = function() {
    //    this.col += COL_CHANGE[SNAKE_DIRECTION];
    //    this.row += ROW_CHANGE[SNAKE_DIRECTION];
    //    this.el.style.top = (this.row * BLOCK_SIZE) + "px";
    //    this.el.style.left = (this.col * BLOCK_SIZE) + "px";
    //}
}

// Constructor for a new food piece.
function FoodPiece() {
    var col = getRandomInt(0, GRID_WIDTH - 1);
    var row = getRandomInt(0, GRID_HEIGHT - 1);

    var myFoodElement = document.createElement("div");
    myFoodElement.className = "food";
    myFoodElement.style.top = (row * BLOCK_SIZE) + "px";
    myFoodElement.style.left = (col * BLOCK_SIZE) + "px";
    gameGrid.appendChild(myFoodElement);

    this.col = col;
    this.row = row;
    this.el = myFoodElement;
}

function isDying() {
    // hits wall
    var head = snake[0];
    if (head.row < 0 || head.row >= GRID_HEIGHT || head.col < 0 || head.col >= GRID_WIDTH) {
        return true;
    }
    // collides with self
    var i;
    for (i = 1; i < snake.length; i++) {
        var curPiece = snake[i];
        // === is more explicit. It demands that datatypes be the same.
        // == would return true with '1' == 1, for example.
        if (head.row === curPiece.row && head.col === curPiece.col) {
            return true;
        }
    }
    return false;
}

function isEating() {
    // eats food
    var head = snake[0];
    var i;
    for (i = 0; i < foods.length; i++) {
        var curPiece = foods[i];
        if (head.row === curPiece.row && head.col === curPiece.col) {
            // Gets rid of food i (since its been eaten)
            foods.splice(i, 1);
            gameGrid.removeChild(curPiece.el);
            return true;
        }
    }
    return false;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
