function drawHUD() {
    fill("white");
    textSize(24);
    textAlign(LEFT);
    text("P1 HP: " + player1.hp, 20, 30);

    textAlign(RIGHT);
    text("P2 HP: " + player2.hp, width - 20, 30);

    textAlign(CENTER);
    text("Time: " + timer, width / 2, 30);
}