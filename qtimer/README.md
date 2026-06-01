# QuickTimer

A high-performance, minimalist desktop timer built with **React**, **MUI**, and **Tauri v2**. Designed to feel like a futuristic "Widget," QuickTimer stays out of your way while keeping you on track with "Always on Top" functionality and a sleek, frameless interface.

## 🎓 Academic Context

This application was written to demonstrate core concepts explained in the **JavaScript Frameworks** class at **UC Berkeley Extension**, including:
- Component-based architecture with **React**.
- State management and side effects using `useState` and `useEffect`.
- Implementing a professional, responsive interface with **Material UI (MUI)**.
- Performance optimization for production builds and cross-platform compatibility.
- Integration of specialized desktop APIs via **Tauri**.
- Optimizing builds for both standalone desktop executables and cloud-hosted web environments (Vercel).



![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Platform](https://img.shields.io/badge/platform-Windows%20%7C%20macOS%20%7C%20Web-lightgrey)

## ✨ Features

- **🛸 Clean UI**: Circular progress visualization with a "glassmorphism" widget aesthetic.
- **🖱️ Frameless & Draggable**: No bulky window headers. Move the app by dragging the top region.
- **🔔 Visual & Audio Alerts**: Flashing "Time's Up!" animations paired with a high-quality alarm buzzer.
- **⌨️ Power-User Shortcuts**: Control everything from your keyboard without clicking a single button.
- **🌐 Hybrid Build**: Runs as a lightweight standalone desktop executable or a standard web application.

---

## ⌨️ Keyboard Shortcuts

| Key | Action |
| :--- | :--- |
| `Space` | **Play / Pause** |
| `M` | **Toggle Mode** (Break, Exercise, Lab, Quiz) |
| `1` - `6` | **Quick Presets** (5, 10, 15, 20, 25, 30 minutes) |
| `Arrow Left/Right` | Adjust time by **10 seconds** |
| `+` / `-` | Adjust time by **1 minute** |
| `Esc` | **Reset** timer to max |
| `0` | Set timer to **0** (Immediate expiry) |

---

## 🚀 Getting Started

### Prerequisites

To build the desktop version, you need:
- **Node.js** (v18+)
- **Rust** & **Cargo** (via [rustup.rs](https://rustup.rs/))
- **C++ Build Tools** (For Windows users)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/qtimer.git
   cd qtimer
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the web version in your browser:
```bash
npm run dev
```

Run the desktop version (Tauri):
```bash
npx tauri dev
```

---

## 🛠️ Building for Production

### Desktop (.exe / .app)
To create the standalone desktop executable:
```bash
npm run build && npx tauri build
```
Outputs can be found in `src-tauri/target/release/bundle/`.

### Web (Vercel / Netlify)
The project is optimized for Vercel. Ensure your environment does not use top-level Tauri imports to avoid crashes in the browser.
```bash
npm run build
```

---

## 📁 Project Structure

- `src/`: React frontend (Vite).
  - `components/`: Timer logic, MUI displays, and UI controls.
  - `assets/`: Icons and alarm audio files.
- `src-tauri/`: Rust backend and Desktop configuration.
  - `capabilities/`: Permission settings for v2 window control.
  - `icons/`: icons for standalone app.
  - `tauri.conf.json`: Window decorations, transparency settings.

---

## 🎨 Credits

- **Framework**: [Tauri](https://tauri.app/)
- **UI**: [Material UI](https://mui.com/)
- **Author**: Carl Limsico

