import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCil1Ls_GvGdxdgqBdUWjIgp9VtGmJwn04",
  authDomain: "mytodolist-70f86.firebaseapp.com",
  projectId: "mytodolist-70f86",
  storageBucket: "mytodolist-70f86.appspot.com",
  messagingSenderId: "626678402204",
  appId: "1:626678402204:web:f1a4134382546c3466f159"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {
    db
}