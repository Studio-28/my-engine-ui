# @aurel/my-engine-ui

A set of reusable, canvas-based UI components designed for games built with `@kenzoobryan/my-engine` (or any compatible 2D setup).

This package is **ESM only** and **browser-only**.

## Features

- **Primitives**: `Panel`, `TextLabel`, `Button` (with hover/click states)
- **Overlays**: Ready-to-use screens for `MainMenu`, `Pause`, `GameOver`.
- **HUD**: Simple score and best score tracking with `localStorage` persistence.
- **Input Neutral**: Works with your engine's input or provides a built-in `MouseInput` fallback.

## Installation

```bash
npm install @aurel/my-engine-ui
```

## Integration

### Basic Usage

```javascript
import { Hud, MainMenuOverlay, MouseInput } from '@aurel/my-engine-ui';

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// 1. Setup Input (use Core's input if available, else fallback)
const input = new MouseInput(canvas);

// 2. Create Components
const hud = new Hud({ x: 10, y: 10 });
const menu = new MainMenuOverlay(canvas, {
  title: 'My Awesome Game',
  onPlay: () => console.log('Game Start!'),
  input: input
});

// 3. Game Loop
function loop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  input.update(); // Update input state
  
  menu.update();  // Update UI logic
  menu.draw(ctx); // Render UI
  
  requestAnimationFrame(loop);
}
loop();
```

### Compatibility

- Requires a browser environment (DOM `canvas` and `localStorage`).
- Designed for `@kenzoobryan/my-engine` ^0.1.0 but framework agnostic.

## API Reference

### `MouseInput(canvas)`
- `update()`: updates internal state.
- `isClicked()`: returns true if mouse was released this frame.
- `x`, `y`, `isDown`: properties.

### `Hud({ x, y, align, persistenceKey })`
- `setScore(number)`: updates score and checks best score.
- `draw(ctx)`: renders.

### `Button({ x, y, width, height, text, onClick, input, style })`
- `update()`: handles hover/click logic via `input`.
- `draw(ctx)`: renders.