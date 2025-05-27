class Player {
    constructor(x, y, name) {
        this.x = x;
        this.y = y;
        this.name = name;
        this.width = 50;
        this.height = 100;
        this.vx = 0;
        this.vy = 0;
        this.speed = 5;
        this.jumpPower = 15;
        this.onGround = true;
        this.color = name === "player1" ? "blue" : "red";
        this.hp = 100;
    }

    update() {
        this.vy += 1;
        this.y += this.vy;

        if (this.y + this.height >= height) {
            this.y = height - this.height;
            this.vy = 0;
            this.onGround = true;
        }

        this.x += this.vx;
        this.draw();
    }

    draw() {
        fill(this.color);
        rect(this.x, this.y, this.width, this.height);
    }

    move(dir) {
        this.vx = dir * this.speed;
    }

    jump() {
        if (this.onGround) {
            this.vy = -this.jumpPower;
            this.onGround = false;
        }
    }
}