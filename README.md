# 📱 Todo Mobile App (Expo + React Native + Convex)

A modern **cross-platform Todo mobile application** built using **React Native (Expo)** with a **Convex backend**, featuring real-time updates, custom theming (light/dark mode), and a clean, scalable architecture.

This project focuses on **real-world app structure**, not just demos !

---

## ✨ Features

* ✅ Create, update, delete todos
* 🔁 Toggle completion status
* 🧹 Clear all todos
* 🌗 Light / Dark mode with persistent storage
* ⚡ Real-time backend with Convex
* 🎨 Gradient-based modern UI
* 🧭 Stack + Tabs navigation (Expo Router)
* 🧠 Clean separation of UI, logic, and backend
* 📦 Fully typed (TypeScript)

---

## 🛠 Tech Stack

### Frontend


<p align="center"> <img src="https://skillicons.dev/icons?i=react" height="42" /> <img src="https://skillicons.dev/icons?i=expo" height="42" /> <img src="https://skillicons.dev/icons?i=typescript" height="42" /> <img src="https://skillicons.dev/icons?i=javascript" height="42" /> </p> <p align="center"> <img src="https://img.shields.io/badge/Expo-Go-000000?style=for-the-badge&logo=expo&logoColor=white" /> <img src="https://img.shields.io/badge/React%20Native-Mobile-blue?style=for-the-badge" /> <img src="https://img.shields.io/badge/Cross--Platform-iOS%20%7C%20Android-success?style=for-the-badge" /> </p>

### Backend
<p align="center"> <img src="https://skillicons.dev/icons?i=typescript,nodejs" height="42" /> </p> <p align="center"> <img src="https://img.shields.io/badge/Convex-Backend-black?style=for-the-badge&logo=data:image/svg+xml&logoColor=white" /> <img src="https://img.shields.io/badge/Real--Time-Database-success?style=for-the-badge" /> <img src="https://img.shields.io/badge/Serverless-Functions-blueviolet?style=for-the-badge" /> </p>



---

## 📂 Project Structure

```
todo-rn/
├── app/
│   ├── (tabs)/
│   │   ├── index.tsx        # Home / Todos
│   │   ├── settings.tsx     # Settings screen
│   │   └── _layout.tsx      # Tabs layout
│   ├── about.tsx
│   └── _layout.tsx          # Root stack layout
│
├── components/
│   ├── TodoInput.tsx
│   ├── Header.tsx
│   ├── EmptyState.tsx
│   ├── LoadingSpinner.tsx
│   ├── Preferences.tsx
│   ├── DangerZone.tsx
│   └── ProgressStats.tsx
│
├── convex/
│   ├── schema.ts
│   ├── todos.ts
│   └── _generated/
│
├── hooks/
│   └── use-theme-color.tsx
│
├── assets/
│   └── images/
│
├── package.json
├── tsconfig.json
└── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Install dependencies

```bash
npm install
```

### 2️⃣ Start Convex backend

```bash
npx convex dev
```

This will:

* Start the Convex server
* Generate `.env.local`
* Create backend types

---

### 3️⃣ Start Expo app

```bash
npx expo start
```

Run on:

* 📱 Expo Go (recommended)
* 🌐 Web
* 🤖 Android emulator
* 🍎 iOS simulator (requires Xcode)

---

## 🧩 Convex Schema (Example)

```ts
export default defineSchema({
  todos_v2: defineTable({
    text: v.string(),
    isCompleted: v.boolean(),
  }),
});
```

---

## 🔁 Real-time Data Flow

* `useQuery()` → subscribes to live data
* `useMutation()` → updates backend instantly
* UI updates automatically without refresh

---

## 🌗 Dark / Light Mode

* Custom theme context
* Stored using `AsyncStorage`
* Persists across app restarts

---

## 🎯 Learning Outcomes

This project demonstrates:

* Real-world React Native architecture
* Backend integration (not mocked APIs)
* Navigation patterns used in production
* Handling async + real-time data
* Debugging platform-specific issues
* Managing developer frustration 😄

---

## 🚀 Future Improvements

* ⏳ Animations with Reanimated
* 🔔 Notifications
* ☁️ Auth (Convex Auth)
* 🧪 Tests
* 📱 Native modules

---

## 🧠 Author

Built with persistence, frustration, debugging, and eventual clarity.
Powered by **React Native**, **Convex**, and **AI-assisted problem solving**.

---


