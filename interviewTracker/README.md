# Interview Practice Tracker

A responsive dashboard to organize and track weekly interview preparation tasks across DSA, Git & GitHub, Full-Stack Technical topics, and Machine Coding.

## Features

- **DSA Tracker:** Track progress on five LeetCode problems.
- **Git & GitHub Practice:** Keep track of five common Git workflow scenarios.
- **Full-Stack Interview Preparation:** Track five technical interview topics.
- **Machine Coding Checklist:** Track the steps required to finish and submit a project.
- **Progress Dashboard:** View task completion across all preparation sections.
- **Responsive UI:** Designed for mobile, tablet, and desktop screens.
- **Interactive Task Status:** Mark tasks as completed or pending.

## Tech Stack

- React
- Vite
- Redux Toolkit
- React Redux
- React Router
- Tailwind CSS
- React Icons

## Getting Started

### Prerequisites

Install a recent version of [Node.js](https://nodejs.org/) and npm.

### Installation

1. Clone this repository:

   ```bash
   git clone YOUR_GITHUB_REPOSITORY_URL
   ```

2. Move into the project folder:

   ```bash
   cd YOUR_PROJECT_FOLDER
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL printed in the terminal (Vite commonly uses `http://localhost:5173`).

## Project Sections

### 1. DSA
- Two Sum
- Remove Duplicates from Sorted Array
- Move Zeroes
- Rotate Array
- 3Sum

### 2. Git & GitHub
- Wrong Branch, Correct Work
- Merge Conflict During PR
- Secret Accidentally Committed
- PR Review With New Changes
- Recovering Lost Local Work

### 3. Full-Stack Technical
- JavaScript Async Flow
- React Unnecessary Re-render
- REST API and Express Request Flow
- MongoDB and Mongoose Duplicate Data
- Authentication, Authorization, and ImageKit

### 4. Machine Coding
- Understand the problem statement
- Build a responsive dashboard
- Push the project to GitHub
- Deploy the project and record a demo

## Project Structure

```text
src/
├── app/
│   └── store.js
├── components/
│   └── Header.jsx
├── features/
│   └── tracker/
│       └── trackerSlice.js
├── pages/
│   ├── Dashboard.jsx
│   ├── DSA.jsx
│   ├── GitGithub.jsx
│   ├── FullStack.jsx
│   └── MachineCoding.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Progress Tracking

Use the dashboard to review your progress and mark each task as completed when you have finished practicing it.

> Note: If task progress resets after refreshing the browser, persistence (for example, with `localStorage`) has not been implemented yet.

## Screenshots

After capturing screenshots, place them in a `screenshots` folder and update this example path:

`./screenshots/dashboard.png`

## Live Demo

Add your deployed project URL here: `YOUR_LIVE_DEMO_URL`

## GitHub Repository

Add your repository URL here: `YOUR_GITHUB_REPOSITORY_URL`

## Demo Video

Add your 1–2 minute project demo video URL here: `YOUR_DEMO_VIDEO_URL`

## Future Improvements

- Save task progress across browser refreshes using `localStorage`.
- Add notes or answer fields for each interview question.
- Improve progress analytics and filtering.

## Author

Add your name here.

---

Built as a machine-coding project for interview preparation.
