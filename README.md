# 📝 Fullstack Todo App

A simple yet complete **Full Stack Todo Application** built using **React**, **Node.js**, **Express**, and **PostgreSQL**.
This project marks my first successful integration of frontend, backend, and database into a working application.

---

## 🚀 Features

* Add new todos
* Edit existing todos
* Delete todos
* Persistent data storage using PostgreSQL
* RESTful API architecture
* Clean separation of frontend and backend

---

## 🛠️ Tech Stack

### Frontend

* React
* JavaScript (ES6+)
* HTML5
* CSS3

### Backend

* Node.js
* Express.js

### Database

* PostgreSQL

---

## 📂 Project Structure

```
fullstack-todo-app/
│
├── client/        # React frontend
├── server/        # Node + Express backend
├── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Shaiju-Raju/fullstack-todo-app.git
cd fullstack-todo-app
```

---

### 2️⃣ Backend Setup

```bash
cd server
npm install
```

Create a `.env` file inside the `server` folder:

```
PORT=3000
DATABASE_URL=your_postgresql_connection_string
```

Start the backend server:

```bash
npm start
```

---

### 3️⃣ Frontend Setup

```bash
cd client
npm install
npm start
```

Frontend will run on `http://localhost:3000` (or the configured port).

---

## 🔗 API Endpoints

| Method | Endpoint   | Description       |
| ------ | ---------- | ----------------- |
| GET    | /todos     | Fetch all todos   |
| POST   | /todos     | Create a new todo |
| PUT    | /todos/:id | Update a todo     |
| DELETE | /todos/:id | Delete a todo     |

---

## 📸 Screenshots

*(Add screenshots or GIFs here)*

---

## 🎯 Learning Outcomes

* Understanding fullstack architecture
* Connecting React with Express APIs
* Performing CRUD operations with PostgreSQL
* Handling async operations and state updates
* Debugging real-world integration issues

---

## 🔮 Future Improvements

* User authentication (login & signup)
* User-specific todos
* Improved UI/UX design
* Deployment (Vercel + Render / Railway)
* Add unit and integration tests

---

## 🙏 Acknowledgements

This project is a personal milestone in my journey to becoming a **Full Stack Developer**.
Thanks to consistent practice, learning, and guidance along the way.

---

## 👤 Author

**Shaiju Raju**
GitHub: [https://github.com/Shaiju-Raju](https://github.com/Shaiju-Raju)

---

⭐ If you like this project, feel free to star the repository!
