let player1, player2;
let gameState = "fight"; // outros: "roundOver", "gameOver"
let timer = 99;
let timerFrame = 0;

function setup() {
    let canvas = createCanvas(960, 540);
    canvas.parent("gameCanvas");
    frameRate(60);

    player1 = new Player(100, height - 150, "player1");
    player2 = new Enemy(width - 200, height - 150, "enemy");
}

function draw() {
    background(30);

    if (gameState === "fight") {
        updateGame();
        drawHUD();
    }
}

function updateGame() {
    handleInput();

    player1.update();
    player2.updateAI(player1);

    checkCollisions();

    // Timer
    timerFrame++;
    if (timerFrame % 60 === 0 && timer > 0) timer--;
    if (timer === 0) gameState = "roundOver";
}
