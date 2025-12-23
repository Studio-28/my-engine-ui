import { TextLabel } from '../primitives/TextLabel.js';

export class Hud {
    constructor({ x = 10, y = 10, align = 'left', persistenceKey = 'my_engine_best_score' } = {}) {
        this.score = 0;
        this.bestScore = 0;
        this.persistenceKey = persistenceKey;

        this.loadBestScore();

        this.scoreLabel = new TextLabel({
            text: `Score: 0`,
            x: x,
            y: y,
            fontSize: 20,
            align: align,
            color: '#fff'
        });

        this.bestScoreLabel = new TextLabel({
            text: `Best: ${this.bestScore}`,
            x: x,
            y: y + 25,
            fontSize: 16,
            align: align,
            color: '#aaa'
        });
    }

    setScore(score) {
        this.score = score;
        this.scoreLabel.text = `Score: ${score}`;
        if (score > this.bestScore) {
            this.bestScore = score;
            this.bestScoreLabel.text = `Best: ${this.bestScore}`;
            this.saveBestScore();
        }
    }

    reset() {
        this.setScore(0);
    }

    loadBestScore() {
        try {
            const stored = localStorage.getItem(this.persistenceKey);
            if (stored) {
                this.bestScore = parseInt(stored, 10) || 0;
            }
        } catch (e) {
            console.warn('localStorage not available');
        }
    }

    saveBestScore() {
        try {
            localStorage.setItem(this.persistenceKey, this.bestScore.toString());
        } catch (e) {
            // ignore
        }
    }

    draw(ctx) {
        this.scoreLabel.draw(ctx);
        this.bestScoreLabel.draw(ctx);
    }
}
