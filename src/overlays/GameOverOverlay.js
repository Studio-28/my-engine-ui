import { Panel } from '../primitives/Panel.js';
import { TextLabel } from '../primitives/TextLabel.js';
import { Button } from '../primitives/Button.js';

export class GameOverOverlay {
    constructor(canvas, { score = 0, onRestart = () => { }, input = null } = {}) {
        this.canvas = canvas;
        this.width = canvas.width;
        this.height = canvas.height;
        this.input = input;

        this.background = new Panel({
            x: 0, y: 0, width: this.width, height: this.height,
            backgroundColor: 'rgba(50, 0, 0, 0.8)',
            borderWidth: 0
        });

        this.titleLabel = new TextLabel({
            text: 'GAME OVER',
            x: this.width / 2,
            y: this.height * 0.25,
            fontSize: 50,
            align: 'center',
            color: 'red'
        });

        this.scoreLabel = new TextLabel({
            text: `Score: ${score}`,
            x: this.width / 2,
            y: this.height * 0.4,
            fontSize: 30,
            align: 'center',
            color: '#fff'
        });

        this.restartButton = new Button({
            x: this.width / 2 - 100,
            y: this.height * 0.6,
            width: 200,
            height: 60,
            text: 'Try Again',
            onClick: onRestart,
            input: this.input
        });
    }

    setScore(score) {
        this.scoreLabel.text = `Score: ${score}`;
    }

    update() {
        this.restartButton.update();
    }

    draw(ctx) {
        this.background.draw(ctx);
        this.titleLabel.draw(ctx);
        this.scoreLabel.draw(ctx);
        this.restartButton.draw(ctx);
    }
}
