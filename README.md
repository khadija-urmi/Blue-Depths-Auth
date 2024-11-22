
# Adventure Explorer

A modern web application designed to help users explore, book, and manage adventurous activities. This platform offers a seamless experience to discover various adventures, view details, and book their dream journeys.


## 🚀 Live Demo
Check out the live version of the app [here](http://localhost:5173/).


## 🎯 Purpose
The purpose of this project is to create a user-friendly platform where users can:
- Explore various adventure activities.
- View detailed descriptions, images, and costs of adventures.
- Book adventures with ease.
- Reset passwords and log in securely with Firebase Authentication.

## ✨ Key Features
1. **User Authentication**:
   - Login with Email and Password.
   - Google Sign-In.
   - Forgot Password functionality with Firebase.
   - After successfully log in, user get a successful message.

2. **Login& Register Validation**
   - Password validation ensures the password meets specific criteria (e.g., minimum length is 6, at least 1 uppercase letter & lowercase letter, etc.).
   - If the user successfully Log In or Register , a green success message is displayed; otherwise, an error message is shown.
   - WithOut Log In , user can not go to private route.
   - When a user log in , then he can go to his desire route.
   
3. **Explore Adventure Activities**:
   - View Adventure Activities short  descriptions, images, and eco-friendly features of adventures.
   - When user is login only then can view  full details of Adventure Activities .
   - User can consult with expert to know their query.
   - Book adventures  from the detail page.

4. **Talk in consultation time**:
   - User can directly talk to expert only available consultation time in Google Meet.
   - Consultation time i 10 am to 8pm.
   - After finishing time, user can not talk to expert.

5. **Update Profile**:
   - After Login , User can go to Profile Page.
   - User can update his profile if he wants.
   - After Updating Profile, user get a confirmation message .  

6. **Password Reset**:
   - Integrated password reset feature via email using Firebase Authentication.
   - If the entered email is invalid or unregistered, the user receives a clear error message.
   - Reset emails are sent promptly, and users are alerted to check their inbox .
   - User can reset their password from email inbox message.

## 📦 NPM Packages Used
The following npm packages were used in this project:
- **Firebase**: For user authentication and database integration.
 
- **React Router DOM**: For routing and navigation.
  
- **Moment.js**: For handling time and date logic.
  
- **Tailwind CSS**: For styling and responsive design.

- **AOS**: For scroll-based animations.  

## 📚 Tech Stack
- **Frontend**: React.js, Tailwind CSS
- **Backend**: Firebase Authentication
- **Tools**: NPM, React Router

  
**Enjoy exploring adventures journey !**
