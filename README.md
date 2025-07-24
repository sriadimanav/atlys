# ⚡ React UI with Toast, Form Validation, and Animations

This is a modern React app demonstrating:

- 🧾 Sign-in / Sign-up forms with validations
- 🔔 Toast notifications with stack animation
- 🎬 Subtle UI animations for smoother UX
- ☝️ Scroll to Top functionality
- 🧪 Modular structure using atoms (Jotai) and hooks

![Preview](https://files.catbox.moe/z8r7vs.gif)

## 🚀 Live Demo

[🔗 View Deployed App](atlys-rho.vercel.app)

## 🎥 Demo Video

https://files.catbox.moe/py2ewe.mov

> _Click to preview the app features in action._

## 🛠 Features

- ✅ **React 19+**
- ✅ **Custom Toast Stack** using `Jotai` atoms
- ✅ **Form Validation** via `react-hook-form`
- ✅ **Subtle UI animations** using CSS transforms
- ✅ **Authentication Handling** (demo-only logic)

## 📁 Project Structure

/src
┣ /atoms # Toast atom state and actions
┣ /components # UI Components like Form, Modal, Toast
┣ /hooks # Custom hooks
┣ /utils # Business logic for form handlers
┣ /pages # app routes business logic
┗ App.jsx

## 🧑‍💻 Getting Started

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
yarn install
yarn dev
```

## Learn more

🧰 Built With:

⚛️ React

🎣 React Hook Form

🧪 Jotai

💅 SCSS Modules

🚀 Rsbuild

☁️ Deployed via Vercel

📦 Toast Stack Animation
Max 4 toasts visible at once
Stacked top-to-bottom
Automatic dismissal

🧠 Code Design
Form submit logic (onSignInFormSubmit, etc.) is extracted into utils/formUtils.js for separation of concerns

Toast actions (addToast, removeToast) are handled in atoms/toastActions.js

Use useToast() anywhere to trigger toasts easily

To learn more about Rsbuild, check out the following resources:

- [Rsbuild documentation](https://rsbuild.rs) - explore Rsbuild features and APIs.
- [Rsbuild GitHub repository](https://github.com/web-infra-dev/rsbuild) - your feedback and contributions are welcome!
