export class TextLabel {
    constructor({ text = '', x = 0, y = 0, fontSize = 24, fontFamily = 'sans-serif', color = '#fff', align = 'left', baseline = 'top' } = {}) {
        this.text = text;
        this.x = x;
        this.y = y;
        this.fontSize = fontSize;
        this.fontFamily = fontFamily;
        this.color = color;
        this.align = align;
        this.baseline = baseline;
    }

    draw(ctx) {
        ctx.save();
        ctx.font = `${this.fontSize}px ${this.fontFamily}`;
        ctx.fillStyle = this.color;
        ctx.textAlign = this.align;
        ctx.textBaseline = this.baseline;
        ctx.fillText(this.text, this.x, this.y);
        ctx.restore();
    }
}
