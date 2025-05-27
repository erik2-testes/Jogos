function checkCollisions() {
    let p1Right = player1.x + player1.width;
    let p2Right = player2.x + player2.width;

    if (p1Right > player2.x && player1.x < p2Right &&
        player1.y + player1.height > player2.y && player1.y < player2.y + player2.height) {
        fill("yellow");
        rect((player1.x + player2.x) / 2, player1.y - 20, 20, 20);
    }
}