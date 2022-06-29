import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA0uAKW9aV1c8BRL870DQiPqHhCIswIpzM",
  authDomain: "react-netflix-clone-978ac.firebaseapp.com",
  projectId: "react-netflix-clone-978ac",
  storageBucket: "react-netflix-clone-978ac.appspot.com",
  messagingSenderId: "45506615770",
  appId: "1:45506615770:web:d0dbc567be3d07400c88e3",
  measurementId: "G-T416N9EY4Y"
};


const app = initializeApp(firebaseConfig);


export const firebaseAuth = getAuth(app)