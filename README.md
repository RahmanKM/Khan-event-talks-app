# Khan Event Talks App

This project is a simple, single-page website for a one-day tech conference. It displays a schedule of talks and allows users to search for talks by category.

## Features

- **Dynamic Schedule:** The schedule is dynamically generated from a data source.
- **Search Functionality:** Users can filter the talks by category.
- **Serverless Option:** The website can be compiled into a single, serverless HTML file.

## Getting Started

There are two ways to run this project:

### 1. Using the Node.js Server

This method is ideal for development.

**Prerequisites:**

- [Node.js](https://nodejs.org/)

**Instructions:**

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/RahmanKM/Khan-event-talks-app.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd Khan-event-talks-app
    ```
3.  **Start the server:**
    ```bash
    node server.js
    ```
4.  Open your browser and go to `http://localhost:3000`.

### 2. Using the Serverless HTML File

This method is ideal for deployment or local preview without a Node.js environment.

**Prerequisites:**

- [Python 3](https://www.python.org/)

**Instructions:**

1.  **Build the serverless file:**
    ```bash
    node build.js
    ```
    This will create a `dist/index.html` file.

2.  **Start a Python server:**
    ```bash
    python3 -m http.server 8000 --directory dist
    ```
3.  Open your browser and go to `http://localhost:8000`.

## How to Use

- **View the Schedule:** The main page displays the full schedule of talks for the day.
- **Search by Category:** Use the search bar at the top of the page to filter the talks by category. As you type, the schedule will update to show only the talks that match your search.
