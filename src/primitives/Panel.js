export class Panel {
    constructor({ x = 0, y = 0, width = 200, height = 100, backgroundColor = 'rgba(0, 0, 0, 0.7)', borderColor = '#fff', borderWidth = 2, padding = 10 } = {}) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.backgroundColor = backgroundColor;
        this.borderColor = borderColor;
        this.borderWidth = borderWidth;
        this.padding = padding;
    }

    draw(ctx) {
        ctx.save();

        // Background
        ctx.fillStyle = this.backgroundColor;
        ctx.fillRect(this.x, this.y, this.width, this.height);

        // Border
        if (this.borderWidth > 0) {
            ctx.strokeStyle = this.borderColor;
            ctx.lineWidth = this.borderWidth;
            ctx.strokeRect(this.x, this.y, this.width, this.height);
        }

        ctx.restore();
    }
}
