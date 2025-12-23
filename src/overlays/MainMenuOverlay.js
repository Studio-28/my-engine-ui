import { Panel } from '../primitives/Panel.js';
import { TextLabel } from '../primitives/TextLabel.js';
import { Button } from '../primitives/Button.js';

export class MainMenuOverlay {
    constructor(canvas, { title = 'Game Title', onPlay = () => { }, input = null } = {}) {
        this.canvas = canvas;
        this.width = canvas.width;
        this.height = canvas.height;
        this.input = input;

        // Background dimmer
        this.background = new Panel({
            x: 0, y: 0, width: this.width, height: this.height,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            borderWidth: 0
        });

        // Title
        this.titleLabel = new TextLabel({
            text: title,
            x: this.width / 2,
            y: this.height * 0.3,
            fontSize: 48,
            align: 'center',
            color: '#fff'
        });

        // Play Button
        this.playButton = new Button({
            x: this.width / 2 - 100,
            y: this.height * 0.5,
            width: 200,
            height: 60,
            text: 'Play',
            onClick: onPlay,
            input: this.input
        });
    }

    update() {
        this.playButton.update();
    }

    draw(ctx) {
        this.background.draw(ctx);
        this.titleLabel.draw(ctx);
        this.playButton.draw(ctx);
    }
}
