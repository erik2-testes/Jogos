class Enemy extends Player {
    constructor(x, y, name) {
        super(x, y, name);
        this.aiTimer = 0;
    }

    updateAI(playerTarget) {
        this.aiTimer++;

        if (this.aiTimer % 30 === 0) {
            if (this.x < playerTarget.x) this.move(1);
            else if (this.x > playerTarget.x) this.move(-1);
            else this.move(0);

            if (random(1) < 0.05 && this.onGround) {
                this.jump();
            }
        }

        this.update();
    }
}