// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBU8hJU-D2jAtMKkOznM1lRlzGw9-TG0jU",
  authDomain: "mern-book-iventory.firebaseapp.com",
  projectId: "mern-book-iventory",
  storageBucket: "mern-book-iventory.appspot.com",
  messagingSenderId: "297123655875",
  appId: "1:297123655875:web:2110af6ca1a19b79acb276"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default  app;