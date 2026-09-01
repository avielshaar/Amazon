# Amazon Clone 🛒

[![Live Demo](https://img.shields.io/badge/Live_Demo-View_App-00C7B7?style=for-the-badge&logo=vercel&logoColor=white)](#)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/avielshaar/Amazon)
[![MERN Stack](https://img.shields.io/badge/Stack-MERN-informational?style=for-the-badge&logo=react)](https://react.dev/)

> A full-stack MERN e-commerce web application featuring JWT authentication, product catalog search/filtering, persistent cart state management, and an end-to-end checkout workflow.

---

## 🔗 Project Links
* **Live Demo:** [View Live Application](#) *(Add your deployment URL here)*
* **GitHub Repository:** [github.com/avielshaar/Amazon](https://github.com/avielshaar/Amazon)

---

## ✨ Features

- **User Authentication & Authorization**: Secure registration, login, and user profile management using JSON Web Tokens (JWT) and bcrypt password hashing.
- **Product Catalog & Filtering**: Dynamic product browsing, categorized search/filtering, and detailed product views with dynamic meta tags (`react-helmet-async`).
- **Persistent Shopping Cart**: Client-side state management preserving cart items across user sessions using React Context API and `useReducer`.
- **Order & Checkout Pipeline**: Complete multi-step checkout flow covering shipping details, payment selection, order creation, and summary.
- **Responsive UI & Feedback**: Mobile-friendly layout built with `react-bootstrap` and interactive notifications via `react-toastify`.

---

## 🛠️ Tech Stack

### Frontend
- **Framework & Tooling**: React 18, Vite
- **Routing**: `react-router-dom`, `react-router-bootstrap`
- **UI Components & Styling**: `react-bootstrap`, Bootstrap 5
- **State Management**: React Context API + `useReducer`
- **Utilities**: `axios`, `react-helmet-async`, `react-toastify`

### Backend
- **Runtime & Server**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Security & Authentication**: `jsonwebtoken` (JWT), `bcryptjs`
- **Middleware**: `cors`, `dotenv`, `express-async-handler`, `nodemon`

---

## 📂 Project Structure

```
Amazon/
├── backend/
│   ├── controllers/       # Request handlers
│   ├── models/            # Mongoose schemas (User, Product, Order)
│   ├── routes/            # Express REST endpoints
│   ├── data.js            # Seed data
│   ├── index.js           # Server entry point
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Views (Home, Product, Cart, Shipping, etc.)
│   │   ├── Store.jsx      # Global context & reducer
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
└── README.md
```

---

## ⚙️ Environment Variables

Create a `backend/.env` file:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/amazon_clone
JWT_SECRET=your_jwt_secret_key
```

---

## 🚀 Getting Started

### 1. Setup Backend
```bash
cd backend
npm install
npm run dev
```
*Backend runs on `http://localhost:5000`.*

### 2. Setup Frontend
```bash
cd ../frontend
npm install
npm run dev
```
*Frontend runs on `http://localhost:5173`.*

---

## 👥 Contributors
- **Aviel Shaar** ([@avielshaar](https://github.com/avielshaar))
- **Ori Bennett** ([@OriBennett](https://github.com/OriBennett))
