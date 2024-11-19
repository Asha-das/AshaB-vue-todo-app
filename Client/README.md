## Vue Todo App

## Overview

The Vue Todo App is a simple yet powerful task management application built using Vue.js. It allows users to manage their tasks efficiently with features like user authentication, CRUD operations, and priority management. The app is responsive and suitable for use on various devices.


## Features

- User Authentication: Register and log in securely to access your tasks.
- Task Management: Perform Create, Read, Update, and Delete (CRUD) operations on tasks.
- Priority Levels: Assign High, Medium, or Low priority to tasks.
- Responsive Design: Optimized for desktop, tablet, and mobile views.
- State Management: Utilizes Vuex for centralized state management.
- Backend Simulation: Mock APIs powered by JSON Server.


## Technologies Used

- Frontend: Vue.js, Vue Router, Vuex
- Backend: JSON Server (mock API for development)
- Styling: Custom CSS for responsive and user-friendly design


## API Endpoints

The JSON Server backend provides the following endpoints:

1. GET /todos: Fetch all tasks.
2. POST /todos: Add a new task.
3. PUT /todos/: Update an existing task by ID.
4. DELETE /todos/: Delete a task by ID.

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/Asha-das/AshaB-vue-todo-app

## Setup
1. Clone the repository.
2. Install dependencies: `npm install`.
3. Client Side Run the app: `npm run serve`.
4. Server Side Run the app: `json-server --watch db.json --port 3000`.
