# Book Store Landing Page

This repository contains the source code for a full-stack book store landing page. It's designed to showcase and sell a single book, featuring a dynamic landing page that pulls book data from a backend API and a lead capture form to collect potential customer information.

## Features

*   **Dynamic Content**: The landing page dynamically loads the book's title, price, cover image, and descriptive text from the backend.
*   **Lead Capture**: A dedicated "Buy" page with a form to collect user names and emails.
*   **API-Driven**: Built with a RESTful API to manage book data and leads.
*   **Database Integration**: Uses MongoDB to store book information and customer leads.
*   **User Feedback**: The form provides real-time feedback on submission status (sending, success, error).
*   **Responsive Design**: The frontend is fully responsive and adapts to various screen sizes, from mobile devices to desktops.
*   **Vercel-Ready**: Configured for easy deployment as serverless functions on Vercel.

## Technology Stack

*   **Frontend**: HTML, CSS, JavaScript (Vanilla)
*   **Backend**: Node.js, Express.js
*   **Database**: MongoDB with Mongoose
*   **Deployment**: Vercel

## Project Structure

```
/
├── api/             # Vercel serverless function entry point
│   └── index.js
├── back/            # Backend Express application source
│   ├── config/      # Database connection
│   ├── controllers/ # Route logic
│   ├── models/      # Mongoose schemas
│   └── routes/      # API routes
│   └── server.js    # Main server file for local development
├── front/           # Frontend files
│   ├── css/
│   ├── js/
│   ├── buy.html
│   └── index.html
├── package.json     # Project dependencies
└── vercel.json      # Vercel deployment configuration
```

## API Endpoints

The following endpoints are available:

*   `GET /book` : Retrieves the book's details (title, price, image, description).
*   `POST /api/leads`: Creates a new lead. Expects a JSON body with `name` and `email`.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

*   Node.js installed
*   A MongoDB database URI (from a local instance or a service like MongoDB Atlas)

### Local Development

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/realsaiftheprogrammer/book_store.git
    cd book_store
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the root directory and add your MongoDB connection string and a port number:
    ```env
    DB_URL=your_mongodb_connection_string
    PORT=3000
    ```

4.  **Run the backend server:**
    ```bash
    node back/server.js
    ```
    The server will start on `http://localhost:3000` or the port you specified.

5.  **Run the frontend:**
    Open the `front/index.html` file in your preferred web browser. For the APIs to work correctly, you may need to update the fetch URLs in `front/js/main.js` and `front/js/buy.js` to point to your local server (e.g., `http://localhost:3000/book`).

## Deployment

This project is configured for seamless deployment on Vercel. The `vercel.json` file manages the build and routing, while the `api/index.js` file acts as the serverless function entry point. To deploy, connect your GitHub repository to a Vercel project and configure the necessary environment variables (like `DB_URL`) in the Vercel project settings.
