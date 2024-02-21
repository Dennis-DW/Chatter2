# Chatter React App

This React component handles user authentication, ChatEngine setup, and user creation, ensuring a chat interface with Firebase and ChatEngine.


# Demo


![logoin](https://github.com/Dennis-DW/Chatter2/blob/main/assets/images/Screenshot%20from%202023-10-31%2014-07-21.png)


![chatpage](https://github.com/Dennis-DW/Chatter2/blob/main/assets/images/Screenshot%20from%202023-10-31%2014-12-30.png)


## Features

- **Authentication**: Users can sign in securely using their credentials.
- **Private Routes**: Certain routes are protected and can only be accessed by authenticated users.
- **Real-Time Communication**: Chat rooms support real-time messaging functionality.
- **Responsive Design**: The application is responsive and works well on various devices.

## Components

### `App`

Main component responsible for routing and authentication.

### `Chats`

Component for displaying and interacting with chat rooms.

### `Login`

Component for user authentication and login.

### `PrivateRoute`

Higher-order component to protect routes and ensure authentication.

## Installation

1. Clone the repository:

    ```
    git clone https://github.com/Dennis-DW/Chatter2.git
    ```

2. Navigate to the project directory:

    ```
    cd chat-application
    ```

3. Install dependencies:

    ```
    npm install
    ```

## Usage

1. Start the development server:

    ```
    npm start
    ```

2. Open your web browser and navigate to `http://localhost:3000` to access the application.

## Technologies Used

- React
- React Router
- Context API (for authentication)
- CSS (for styling)

## Credits

This project is inspired by various chat applications and tutorials available online.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```