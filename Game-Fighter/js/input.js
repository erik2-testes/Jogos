function handleInput() {
    if (keyIsDown(65)) player1.move(-1); // A
    else if (keyIsDown(68)) player1.move(1); // D
    else player1.move(0);

    if (keyIsDown(87)) player1.jump(); // W
}