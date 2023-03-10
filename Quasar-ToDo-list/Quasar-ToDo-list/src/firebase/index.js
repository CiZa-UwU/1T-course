import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBIfndD15owDjwzMd1A7SMIgMuZopww6nA",
  authDomain: "quasar-todo-list-c25fe.firebaseapp.com",
  projectId: "quasar-todo-list-c25fe",
  storageBucket: "quasar-todo-list-c25fe.appspot.com",
  messagingSenderId: "754016542163",
  appId: "1:754016542163:web:7cd27ade9bbefa2f26e326"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {
    db
}