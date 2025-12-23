import { Panel } from '../primitives/Panel.js';
import { TextLabel } from '../primitives/TextLabel.js';
import { Button } from '../primitives/Button.js';

export class PauseOverlay {
    constructor(canvas, { onResume = () => { }, onQuit = () => { }, input = null } = {}) {
        this.canvas = canvas;
        this.width = canvas.width;
        this.height = canvas.height;
        this.input = input;

        this.background = new Panel({
            x: 0, y: 0, width: this.width, height: this.height,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            borderWidth: 0
        });

        this.titleLabel = new TextLabel({
            text: 'PAUSED',
            x: this.width / 2,
            y: this.height * 0.3,
            fontSize: 40,
            align: 'center',
            color: '#fff'
        });

        this.resumeButton = new Button({
            x: this.width / 2 - 100,
            y: this.height * 0.5,
            width: 200,
            height: 50,
            text: 'Resume',
            onClick: onResume,
            input: this.input
        });

        this.quitButton = new Button({
            x: this.width / 2 - 100,
            y: this.height * 0.6 + 10,
            width: 200,
            height: 50,
            text: 'Quit',
            onClick: onQuit,
            input: this.input,
            style: { normal: { backgroundColor: '#622', borderColor: '#a44', color: '#ebb' } }
        });
    }

    update() {
        this.resumeButton.update();
        this.quitButton.update();
    }

    draw(ctx) {
        this.background.draw(ctx);
        this.titleLabel.draw(ctx);
        this.resumeButton.draw(ctx);
        this.quitButton.draw(ctx);
    }
}
