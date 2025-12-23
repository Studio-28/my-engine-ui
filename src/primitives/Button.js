import { Panel } from './Panel.js';
import { TextLabel } from './TextLabel.js';

export class Button {
    constructor({ x = 0, y = 0, width = 150, height = 50, text = 'Button', onClick = () => { }, style = {}, input = null } = {}) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.text = text;
        this.onClick = onClick;
        this.input = input; // Expecting { x, y, isClicked() } interface

        this.style = {
            normal: { backgroundColor: '#444', borderColor: '#fff', color: '#fff' },
            hover: { backgroundColor: '#666', borderColor: '#ff0', color: '#ff0' },
            active: { backgroundColor: '#888', borderColor: '#0f0', color: '#0f0' },
            ...style
        };

        this.state = 'normal'; // normal, hover, active

        this.panel = new Panel({ x, y, width, height, ...this.style.normal });
        this.label = new TextLabel({
            text,
            x: x + width / 2,
            y: y + height / 2,
            align: 'center',
            baseline: 'middle',
            color: this.style.normal.color
        });
    }

    update() {
        if (!this.input) return;

        const mx = this.input.x;
        const my = this.input.y;

        const isHover = mx >= this.x && mx <= this.x + this.width &&
            my >= this.y && my <= this.y + this.height;

        if (isHover) {
            if (this.input.isDown) { // Assuming isDown property exists for 'active' state visual
                this.state = 'active';
            } else {
                this.state = 'hover';
            }

            if (this.input.isClicked()) {
                this.onClick();
            }
        } else {
            this.state = 'normal';
        }

        // Update visuals based on state
        const currentStyle = this.style[this.state];
        this.panel.backgroundColor = currentStyle.backgroundColor;
        this.panel.borderColor = currentStyle.borderColor;
        this.label.color = currentStyle.color;
    }

    draw(ctx) {
        this.panel.draw(ctx);
        this.label.draw(ctx);
    }
}
