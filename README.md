# Project 4 Pokemon Site

This project showcases the use of various technologies and skills to build a dynamic and interactive web application using React and Vite as the frontend framework. The application includes features such as user authentication, real-time chat, API integration, and more.

### Home page
![Alt Text](Screenshot%20from%202023-08-19%2000-53-24.png)

### Pokemon box with sprite animation
![Alt Text](Screenshot%20from%202023-08-19%2000-56-14.png)



## Technologies Used

### Frontend

- **React**: The frontend of the application is built using React, a popular JavaScript library for building user interfaces.

- **Vite**: Vite is used as the build tool and development server, providing fast and efficient module loading.

- **Redux**: Redux is utilized for state management, ensuring a centralized store for managing application-wide data.

- **Redux Persist**: Redux Persist is integrated to persist Redux store data in local storage, maintaining user data between sessions.

- **Reselect**: Reselect is integrated with Redux to enable efficient memoization and data selection from the store, improving performance.

- **React Query**: React Query is employed for handling API mutations and fetching data from the backend, offering a seamless data management solution.

- **Chakra UI**: Chakra UI is used for building consistent and responsive user interface components, maintaining a clean and professional design.

- **React Bootstrap**: React Bootstrap components are incorporated for styling and layout, providing a robust set of UI components.

- **GSAP**: GSAP (GreenSock Animation Platform) is integrated for smooth and interactive animations, enhancing user experience.

- **Styled Components**: Styled Components are employed to customize and modify Chakra UI and React Bootstrap components to match the project's design requirements.

### Backend

- **Node.js**: The backend server is built using Node.js, allowing for server-side logic and handling API requests.

- **Express**: Express.js is utilized as the web application framework for Node.js, simplifying route handling and middleware management.

- **CORS**: Cross-Origin Resource Sharing (CORS) is implemented to enable secure communication between frontend and backend on different origins.

- **JSON Web Token (JWT)**: JWT is used for securing routes and user authentication. It generates tokens that are stored in the frontend to authenticate requests.

- **Socket.io**: Socket.io enables real-time, bidirectional communication between clients and the server. It's used to implement live chat functionality.

- **MongoDB**: MongoDB is the chosen database system, storing user data, messages, and other application-related information.

### Other Technologies

- **Axios**: Axios is used for making HTTP requests to the backend API, providing a convenient way to interact with the server.

## Features Implemented

- User authentication and authorization using JWT
- Live chat functionality with WebSocket.io
- Profile picture upload
- Retrieving and displaying Pokemon data from an external API
- Styling using Chakra UI, React Bootstrap, and custom Styled Components
- Animation effects using GSAP

## Future Improvements

1. **Live Chat Forum:** Implement a dedicated chat forum where users can discuss and organize battles, trades, and more within the application.

2. **Pokemon Battles:** Allow users to select Pokemon from their PokeBox and use them to battle AI or other players online. Implement a battle mechanism and display battle outcomes.

3. **Chat Notifications:** Add real-time notifications for new chat messages. Notify users when they receive new messages, even if they are not actively using the chat feature.

4. **History Page:** Convert the chat history from a modal dialog to a dedicated page. Provide options to search, filter, and manage chat history effectively.

5. **Enhance PokeTV:** Style and enhance the PokeTV section for a better user experience. Display trending Pokemon-related content or updates.

6. **Improved Logout:** Style the logout functionality and ensure a smooth user experience when logging out of the application.

7. **Access Token Refresh:** Incorporate a JWT token refresher on the frontend. Automatically request a new access token from the server when the old token expires, providing a seamless user experience.

8. **Update USer Profile Button** Allow users to update change or deactivate the user accounts.


## Getting Started

1. Clone the repository.

2. Install dependencies using `npm install`.

3. Start the frontend development server using `npm run dev`.

4. Start the backend server using `node app.js`.



## License

This project is licensed under the [MIT License](LICENSE).
