# MERN Authentication App

This project is a simple authentication application built using the MERN stack (MongoDB, Express, React, Node.js). It provides user registration and login functionality.

## Project Structure

```
mern-auth-app
├── backend
│   ├── src
│   │   ├── controllers
│   │   │   └── authController.js
│   │   ├── models
│   │   │   └── userModel.js
│   │   ├── routes
│   │   │   └── authRoutes.js
│   │   ├── app.js
│   │   └── config
│   │       └── db.js
│   ├── package.json
│   └── README.md
├── frontend
│   ├── src
│   │   ├── components
│   │   │   └── Auth.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── services
│   │       └── authService.js
│   ├── package.json
│   └── README.md
├── .gitignore
└── README.md
```

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Backend Setup

1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up the database connection in `backend/src/config/db.js` with your MongoDB URI.

4. Start the backend server:
   ```
   npm start
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the frontend application:
   ```
   npm start
   ```

## API Endpoints

- **POST /api/auth/register**: Register a new user.
- **POST /api/auth/login**: Log in an existing user.

## Usage

- Access the frontend application in your browser at `http://localhost:3000`.
- Use the registration form to create a new account or log in with an existing account.

## Documentation

For detailed documentation on the backend and frontend, refer to the respective `README.md` files in the `backend` and `frontend` directories.