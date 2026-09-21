# Full Stack Trading Platform

A comprehensive full-stack trading platform built with the MERN stack (MongoDB, Express.js, React, Node.js). This project demonstrates modern web development practices and provides a complete trading dashboard experience with features for managing holdings, positions, and orders.

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Screenshots](#screenshots)
- [Learning Outcomes](#learning-outcomes)
- [License](#license)

## 🎯 About

This project is a full-featured trading platform developed for learning purposes. It showcases the implementation of a complete trading ecosystem with a landing page, user dashboard, and backend API. The platform allows users to view their stock holdings, track positions, and place new orders.

**Note:** This project was created as a learning exercise to understand full-stack development, RESTful APIs, database management, and modern React practices.

## ✨ Features

### Frontend (Landing Page)
- Modern, responsive landing page design
- Information about trading platform features
- User-friendly navigation and interface

### Dashboard
- **Holdings Management**: View and track all stock holdings with real-time data
- **Positions Tracking**: Monitor active trading positions
- **Order Placement**: Place new buy/sell orders
- **Portfolio Overview**: Comprehensive view of investments
- **Material-UI Integration**: Clean and professional UI components
- **Responsive Design**: Works seamlessly across devices

### Backend
- RESTful API architecture
- MongoDB database integration
- CRUD operations for holdings, positions, and orders
- CORS enabled for cross-origin requests
- Environment-based configuration

## 🛠️ Tech Stack

### Frontend
- **React** (v19.2.0) - UI library
- **React Router DOM** (v7.9.4) - Client-side routing
- **Material-UI** (v7.3.4) - UI component library
- **Axios** (v1.13.1) - HTTP client
- **React Scripts** (v5.0.1) - Build tooling

### Backend
- **Node.js** - Runtime environment
- **Express.js** (v5.1.0) - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** (v8.19.2) - MongoDB ODM
- **dotenv** (v17.2.3) - Environment variable management
- **CORS** (v2.8.5) - Cross-origin resource sharing
- **Body-Parser** (v2.2.0) - Request body parsing
- **Passport.js** - Authentication middleware

### Development Tools
- **Nodemon** (v3.1.10) - Auto-restart development server
- **React Testing Library** - Component testing

## 📁 Project Structure

```
Full-Stack-Trading-Platform/
├── frontend/              # Landing page application
│   ├── public/           # Static assets
│   └── src/
│       ├── landing_page/ # Landing page components
│       ├── index.js      # Entry point
│       └── index.css     # Global styles
│
├── dashboard/            # Trading dashboard application
│   ├── public/          # Static assets
│   └── src/
│       ├── components/  # React components
│       ├── data/        # Mock/static data
│       ├── index.js     # Entry point
│       └── index.css    # Dashboard styles
│
└── backend/             # Node.js backend server
    ├── model/           # Mongoose models
    ├── schemas/         # Database schemas
    ├── index.js         # Server entry point
    └── .env             # Environment variables
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd "Zerodha Clone"
   ```

2. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Install Dashboard Dependencies**
   ```bash
   cd ../dashboard
   npm install
   ```

### Running the Application

1. **Start MongoDB**
   - Make sure MongoDB is running locally or you have a MongoDB Atlas connection string

2. **Start the Backend Server**
   ```bash
   cd backend
   npm start
   ```
   The backend server will run on `http://localhost:3002`

3. **Start the Frontend (Landing Page)**
   ```bash
   cd frontend
   npm start
   ```
   The frontend will run on `http://localhost:3000`

4. **Start the Dashboard**
   ```bash
   cd dashboard
   npm start
   ```
   The dashboard will run on `http://localhost:3001`

## 🔐 Environment Variables

Create a `.env` file in the `backend` directory with the following variables:

```env
PORT=3002
MONGO_URI=your_mongodb_connection_string
```

## 📡 API Endpoints

### Holdings
- `GET /allHoldings` - Retrieve all stock holdings

### Positions
- `GET /allPositions` - Retrieve all active positions

### Orders
- `POST /newOrder` - Place a new order
  - Request Body:
    ```json
    {
      "name": "STOCK_NAME",
      "qty": 10,
      "price": 1500.00,
      "mode": "BUY"
    }
    ```


## 📚 Learning Outcomes

Through this project, I gained hands-on experience with:

- **Full-Stack Development**: Building complete applications from frontend to backend
- **React Development**: Component-based architecture, hooks, and state management
- **RESTful API Design**: Creating and consuming REST APIs
- **Database Management**: Working with MongoDB and Mongoose ODM
- **Material-UI**: Implementing professional UI components
- **Authentication**: Understanding Passport.js integration
- **Environment Configuration**: Managing different environments
- **Routing**: Implementing client-side routing with React Router
- **Async Operations**: Handling asynchronous data fetching with Axios
- **CORS**: Understanding cross-origin resource sharing
- **Project Structure**: Organizing a multi-application monorepo

## 📝 License

This project is created for educational purposes. Feel free to use it as a reference for your own learning journey.

---

**Developed for Learning** | Full Stack Trading Platform | MERN Stack
