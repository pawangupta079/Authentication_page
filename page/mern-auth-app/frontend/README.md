# Frontend Authentication Application

This README provides an overview of the frontend part of the MERN authentication application, including setup instructions, component descriptions, and usage examples.

## Table of Contents

- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Components](#components)
- [API Integration](#api-integration)
- [Usage Examples](#usage-examples)

## Installation

1. Navigate to the frontend directory:
   ```
   cd mern-auth-app/frontend
   ```

2. Install the required dependencies:
   ```
   npm install
   ```

## Running the Application

To start the frontend application, run the following command in the frontend directory:
```
npm start
```
This will start the development server and open the application in your default web browser.

## Components

### Auth Component

- **File:** `src/components/Auth.js`
- **Description:** This component handles user registration and login. It includes forms for user input and manages form submissions.

### App Component

- **File:** `src/App.js`
- **Description:** The main component that sets up routing and renders the Auth component.

### Index File

- **File:** `src/index.js`
- **Description:** The entry point of the application that renders the App component into the DOM.

## API Integration

The frontend communicates with the backend using the `authService`:

- **File:** `src/services/authService.js`
- **Functions:**
  - `register(data)`: Sends a POST request to register a new user.
  - `login(data)`: Sends a POST request to log in an existing user.

## Usage Examples

1. **User Registration:**
   - Fill in the registration form with username, email, and password.
   - Submit the form to create a new user.

2. **User Login:**
   - Fill in the login form with email and password.
   - Submit the form to log in.

For further details, refer to the backend documentation located in `mern-auth-app/backend/README.md`.