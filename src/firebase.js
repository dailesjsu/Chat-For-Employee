import firebase from "firebase/app"
import "firebase/auth"

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyCQOVQtN08FxPWGmZEbFbWDpxgB01POjyI",

    authDomain: "employee-chat-59828.firebaseapp.com",
  
    projectId: "employee-chat-59828",
  
    storageBucket: "employee-chat-59828.appspot.com",
  
    messagingSenderId: "909021401099",
  
    appId: "1:909021401099:web:e8039346ebcf11800b770e",
  
    measurementId: "G-1Y10D03Q5V"
  
  
}).auth()