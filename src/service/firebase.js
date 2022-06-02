
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC82r5hrKj4WbvxM6boJqy1ZQHuEId7gRs",
  authDomain: "coder-react-36552.firebaseapp.com",
  projectId: "coder-react-36552",
  storageBucket: "coder-react-36552.appspot.com",
  messagingSenderId: "505560644711",
  appId: "1:505560644711:web:b5345362ca6c47fd25e8c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db;