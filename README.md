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

## Publishing to npm

### 1. Create an npm Account
If you don't have an account:
1.  Go to [https://www.npmjs.com/signup](https://www.npmjs.com/signup)
2.  Fill in your details (Username, Email, Password).
3.  Verify your email address.

### 2. Login via Terminal
Open your terminal in this directory and run:
```bash
npm login
```
Follow the prompts (it will open a browser window).

### 3. Update Version
Before publishing, ensure the version in `package.json` is new.
```bash
npm version patch # increments 0.0.X -> 0.0.X+1
# or
npm version minor # increments 0.X.0 -> 0.X+1.0
```

### 4. Publish
Since this is a scoped package (`@aurel/...`), you must explicitly set access to public usually:
```bash
npm publish --access public
```

### 5. Verify
Check the package page: `https://www.npmjs.com/package/@aurel/my-engine-ui`
