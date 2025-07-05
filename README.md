# 📚 Library Management App

A full-stack MERN application for managing books and borrow operations in a library. This app allows users to view, add, edit, and borrow books, and provides an interactive UI for managing library resources efficiently.

## 🚀 Live Site

🔗 [https://your-live-site-url.vercel.app](https://assingmnet-4.vercel.app)
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


ChatGPT said:
Absolutely bro! Here's a professional-level README.md for your full assignment project. It's clean, job-ready, and documents everything clearly:

markdown
Copy
Edit
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
✨ Features
📘 Book Management
Add new books with details (title, author, genre, copies, etc.)

View all books in a paginated, searchable, and filterable table

Edit and delete existing books

Dynamic availability badge (Available / Unavailable)

📖 Borrow System
Borrow books by selecting quantity and due date

Quantity cannot exceed available copies

Books automatically marked "Unavailable" if no copies left

Borrow Summary shows total borrowed copies with stats

📊 Borrow Summary Page
Displays:

Total borrowed books

Unique borrowed titles

Borrowed books with quantity and ISBN

Visual indicators for due dates (expired, warning, safe)

📡 API Endpoints
📚 Books
Method	Endpoint	Description
GET	/api/books	Get all books
GET	/api/books/:id	Get a single book
POST	/api/books	Add a new book
PUT	/api/books/:id	Update book by ID
DELETE	/api/books/:id	Delete book by ID

📦 Borrow
Method	Endpoint	Description
POST	/api/borrow	Borrow a book
GET	/api/borrow	Get borrow summary

🛠️ Getting Started
📍 Backend Setup
bash
Copy
Edit
cd server
npm install
npm run dev
⚙️ Setup .env
env
Copy
Edit
PORT=5000
DB_USER=yourMongoUser
DB_PASS=yourMongoPassword
DB_NAME=yourDatabaseName
💻 Frontend Setup
bash
Copy
Edit
cd client
npm install
npm run dev
Make sure your frontend is running at http://localhost:5173 and backend at http://localhost:5000

📸 Screenshots
🏠 Homepage

📚 All Books

📖 Borrow Summary

🧠 Learning Outcomes
Full CRUD using MongoDB + Express

Clean reusable UI with ShadCN

API integration using Redux Toolkit Query

Form validation and controlled components

Conditional rendering and state-based UI

Component-based architecture in React
