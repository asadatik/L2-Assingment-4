# 📚 Library Management System

A modern, full-stack **Library Management System** built using the **MERN stack with TypeScript**. It manages books, borrowing records, and availability tracking in a streamlined and efficient way.

The system follows a modular, scalable architecture with clearly separated responsibilities for UI, state management, and backend logic.

---

## 🚀 Live Links

- 🔗 **Client Site**: [](https://assingmnet-4.vercel.app)
- 🔗 **Server Site**: [](https://mongose.vercel.app)

---

## 🗂️ GitHub Repositories

- **🔧 Server Repo**: [https://github.com/asadatik/ASSIGNMENT-3-L-2](https://github.com/asadatik/ASSIGNMENT-3-L-2)
- **🖥️ Client Repo**: [https://github.com/asadatik/L2-Assingment-4]( https://github.com/asadatik/L2-Assingment-4)

---

## ✨ Key Features

### 📘 Book Operations
- Add, update, delete, and retrieve books.
- Metadata includes title, author, genre, ISBN, and availability status.

### 📖 Borrowing Functionality
- Borrow books with quantity and due date.
- Validates against available copies.
- Tracks due dates and marks unavailable when stock is zero.

### 📦 Inventory Management
- Tracks total book copies.
- Backend handles real-time status updates for availability.

---

## ⚙️ Tech Stack

### Frontend
- React.js with TypeScript
- Redux Toolkit & RTK Query
- Tailwind CSS + Shadcn UI
- Vite for blazing-fast development

### Backend
- Node.js + Express.js
- MongoDB + Mongoose
- TypeScript, CORS, dotenv

---

## 🔄 API Structure

| Method | Endpoint          | Description                   |
|--------|-------------------|-------------------------------|
| GET    | `/api/books`      | Get all books                 |
| GET    | `/api/books/:id`  | Get a single book             |
| POST   | `/api/books`      | Add a new book                |
| PUT    | `/api/books/:id`  | Update a book                 |
| DELETE | `/api/books/:id`  | Delete a book                 |
| POST   | `/api/borrow`     | Borrow a book                 |
| GET    | `/api/borrow`     | Borrow summary                |

---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Md-Firoz-Mahmud-Nur/Assignment-04.git
cd Assignment-04

