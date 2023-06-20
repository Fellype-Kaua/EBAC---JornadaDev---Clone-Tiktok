
import { initializeApp } from "firebase/app";
import { getFirestore }  from 'firebase/firestore/lite';


const firebaseConfig = {
  apiKey: "AIzaSyC6YR2_fgYmAfeN7B4Thm4RxQIqYZtjZWA",
  authDomain: "tiktok---jornada-dev-8af6f.firebaseapp.com",
  projectId: "tiktok---jornada-dev-8af6f",
  storageBucket: "tiktok---jornada-dev-8af6f.appspot.com",
  messagingSenderId: "77796295244",
  appId: "1:77796295244:web:29901a6bdb4a8080c0eae9"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default db;