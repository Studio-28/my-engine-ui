/**
 * Simple internal mouse input handler if the core doesn't provide one.
 * Tracks mouse position and click state relative to the canvas.
 */
export class MouseInput {
    constructor(canvas) {
        this.canvas = canvas;
        this.x = 0;
        this.y = 0;
        this.isDown = false;
        this.wasDown = false;

        this.rect = canvas.getBoundingClientRect();

        this._onMouseMove = (e) => {
            this.rect = this.canvas.getBoundingClientRect();
            this.x = e.clientX - this.rect.left;
            this.y = e.clientY - this.rect.top;
        };

        this._onMouseDown = () => {
            this.isDown = true;
        };

        this._onMouseUp = () => {
            this.isDown = false;
        };

        canvas.addEventListener('mousemove', this._onMouseMove);
        canvas.addEventListener('mousedown', this._onMouseDown);
        canvas.addEventListener('mouseup', this._onMouseUp);
    }

    update() {
        this.wasDown = this.isDown;
        // In a real frame-based engine, we might reset 'justPressed' flags here if we had them.
        // For this simple UI, checking current state is often enough, but let's be cleaner.
    }

    isClicked() {
        return !this.isDown && this.wasDown; // Released this frame (conceptual)
    }

    destroy() {
        this.canvas.removeEventListener('mousemove', this._onMouseMove);
        this.canvas.removeEventListener('mousedown', this._onMouseDown);
        this.canvas.removeEventListener('mouseup', this._onMouseUp);
    }
}
