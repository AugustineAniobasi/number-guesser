## 🕹️ Number Guesser Game

*A simple and fun number guessing game built with React, TypeScript, and Vite.*

### 📖 Overview

This project was created as part of the **Web3Bridge Cohort XIV Pre-Qualification Exercise**.
It’s an interactive number guessing game where the computer randomly selects a secret number between **1 and 100**, and the player tries to guess it within a limited number of attempts.

The app provides helpful feedback after each guess — whether the guess is *too high*, *too low*, or *correct* — and displays the number of attempts left.

---

### ✨ Features

✅ Random secret number generation between 1 and 100
✅ User-friendly interface for entering guesses
✅ Feedback after each guess: *Too high*, *Too low*, or *Correct!*
✅ Limited attempts based on difficulty level
✅ Restart button to play again without reloading the page
✅ Visual animations (shake effect for invalid inputs)
✅ Responsive and clean UI using warm orange-peach gradient styling

---

### ⚙️ Difficulty Levels

| Level  | Attempts Allowed |
| ------ | ---------------- |
| Easy   | 10 attempts      |
| Medium | 7 attempts       |
| Hard   | 5 attempts       |

---

### 🧠 Game Logic Summary

* The secret number is generated randomly each time a new game starts.
* The user guesses a number between 1–100.
* The app validates the input:

  * Must be a number.
  * Must be an integer.
  * Must be within the valid range (1–100).
* Each incorrect guess reduces the number of remaining attempts.
* If attempts reach zero, the player loses.

---

### 🧩 Project Structure

```
number-guesser/
│
├── src/
│   ├── components/
│   │   └── Game.tsx          # Main game logic and UI
│   ├── utils/
│   │   ├── game.ts           # Game logic helpers (secret number, validation)
│   │   └── game.test.ts      # Unit tests using Vitest
│   ├── App.tsx               # App entry component
│   ├── main.tsx              # ReactDOM root setup
│   ├── styles.css            # Global layout styles
│   ├── App.css               # Page wrapper and footer
│   └── components/Game.css   # Game UI and animations
│
├── vite.config.ts            # Vite configuration
├── vitest.config.ts          # Vitest testing configuration
├── tsconfig.json             # TypeScript root config
├── package.json              # Dependencies and scripts
└── README.md                 # Project documentation
```

---

### 🧪 Running Tests

To run automated tests for your game logic:

```bash
npm run test
```

---

### 🚀 Running the Project Locally

1. **Clone this repository**

   ```bash
   git clone https://github.com/YOUR_GITHUB_USERNAME/number-guesser.git
   cd number-guesser
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

   Your app will run at 👉 [http://localhost:5173]

---

### 🌐 Deployment

You can deploy this project easily to:

* **GitHub Pages**
* **Vercel**
* **Netlify**

Example for **Vercel**:

```bash
npm run build
vercel deploy
```

---

### 🧰 Tech Stack

* **React (with TypeScript)** — UI Framework
* **Vite** — Fast build tool
* **Vitest** — Unit testing framework
* **CSS3** — Styling and animations

---

### 🧑‍💻 Git Workflow Demonstrated

* Feature branching
* Regular commits after implementing features
* Pull request simulation and merging
* Hosted version using GitHub Pages / Vercel

---

### ❤️ Credits

Developed by Augustine Aniobasi as part of the **Web3Bridge Cohort XIV Pre-Qualification Exercise**.