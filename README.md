# 📚 Library Management App

A full-stack MERN application for managing books and borrow operations in a library. This app allows users to view, add, edit, and borrow books, and provides an interactive UI for managing library resources efficiently.

## 🚀 Live Site

🔗 [https://your-live-site-url.vercel.app](https://your-live-site-url.vercel.app)

---

## 🧰 Tech Stack

**Frontend**  
- React.js  
- TypeScript  
- React Router DOM  
- Redux Toolkit & RTK Query  
- Tailwind CSS + ShadCN UI  
- Lucide React Icons  

**Backend**  
- Node.js  
- Express.js  
- MongoDB + Mongoose  
- CORS, dotenv  

---

## 📂 Project Structure

```bash
├── client
│   ├── src
│   │   ├── components      # Reusable UI components (Table, Button, Loader, etc.)
│   │   ├── features/api    # RTK Query API slices
│   │   ├── pages           # All pages (Home, Books, Borrow Summary, etc.)
│   │   ├── routes          # Route configurations
│   │   ├── types           # TypeScript types
│   │   └── App.tsx         # Main app component
│   └── index.tsx           # App entry point
│
├── server
│   ├── app/controllers     # Book and Borrow route controllers
│   ├── app/models          # Mongoose schemas
│   ├── app.ts              # Express app setup
│   └── index.ts            # Server entry point
