# MERN Stack Project - Frontend

## Project Setup

This is the frontend for the MERN stack project. It provides the user interface using React.js.

### Prerequisites

- Node.js (v14+)

### Installation

1. Clone the repository:
    ```bash
    git clone <your-frontend-repo-url>
    cd <your-frontend-repo>
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm start
    ```

The frontend will be running on `http://localhost:3000`.

### Features

- **Pagination**: Navigate between product pages using "Next" and "Previous" buttons.
- **Search**: Search for products by name.
- **Categorization**: Filter products by brand, category, and price range.
- **Sorting**: Sort products by price or date added.
- **Authentication**: Sign in using Google or email/password (Firebase).

### Folder Structure


### UI Instructions

- Fully responsive design with a mobile-first approach.
- Fixed-size product cards for a clean and concise display.
- Navbar with logo and routes for easy navigation.
- Footer with additional information and links.

### Firebase Setup

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
2. Add your Firebase configuration to the `.env` file:
    ```bash
    REACT_APP_FIREBASE_API_KEY=your_api_key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
    REACT_APP_FIREBASE_PROJECT_ID=your_project_id
    REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
    REACT_APP_FIREBASE_APP_ID=your_app_id
    ```

### Available Scripts

In the project directory, you can run:

- `npm start`: Runs the app in the development mode.
- `npm build`: Builds the app for production.

---

Feel free to expand these README files with more specific details as needed!


