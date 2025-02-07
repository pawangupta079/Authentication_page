# mern-auth-app Backend Documentation

## Overview
This backend application is built using the MERN stack (MongoDB, Express, React, Node.js) and provides authentication functionalities, including user registration and login.

## Setup Instructions

### Prerequisites
- Node.js (version 14 or higher)
- MongoDB (local or cloud instance)

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/mern-auth-app.git
   ```
2. Navigate to the backend directory:
   ```
   cd mern-auth-app/backend
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Configuration
1. Create a `.env` file in the `backend` directory and add your MongoDB connection string:
   ```
   MONGO_URI=your_mongodb_connection_string
   ```
   
### Running the Application
1. Start the server:
   ```
   npm start
   ```
2. The server will run on `http://localhost:5000`.

## API Endpoints

### User Registration
- **Endpoint:** `POST /api/auth/register`
- **Request Body:**
  ```json
  {
    "username": "string",
    "email": "string",
    "password": "string"
  }
  ```
- **Response:**
  - Success: 201 Created
  - Error: 400 Bad Request

### User Login
- **Endpoint:** `POST /api/auth/login`
- **Request Body:**
  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```
- **Response:**
  - Success: 200 OK
  - Error: 401 Unauthorized

## Usage Examples
### Register a User
```bash
curl -X POST http://localhost:5000/api/auth/register -H "Content-Type: application/json" -d '{"username": "testuser", "email": "test@example.com", "password": "password123"}'
```

### Login a User
```bash
curl -X POST http://localhost:5000/api/auth/login -H "Content-Type: application/json" -d '{"email": "test@example.com", "password": "password123"}'
```

## File Structure
- **src/**: Contains the source code for the backend.
  - **controllers/**: Contains controller files for handling requests.
  - **models/**: Contains Mongoose models.
  - **routes/**: Contains route definitions.
  - **config/**: Contains configuration files, including database connection.
- **package.json**: Lists dependencies and scripts for the backend.

## License
This project is licensed under the MIT License. See the LICENSE file for details.