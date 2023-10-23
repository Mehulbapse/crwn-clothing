import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCFziU6JUEewT_HC6XU572rMf5a4i0qRmg",
  authDomain: "crwn-clothing-7e205.firebaseapp.com",
  projectId: "crwn-clothing-7e205",
  storageBucket: "crwn-clothing-7e205.appspot.com",
  messagingSenderId: "669641418965",
  appId: "1:669641418965:web:a7bad690d3b93873459a5c",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
