
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyBjGeM4smXizBoZGN-ThMT9rgQU9L_LSCw",
  authDomain: "hostel-management-65298.firebaseapp.com",
  projectId: "hostel-management-65298",
  storageBucket: "hostel-management-65298.firebasestorage.app",
  messagingSenderId: "455120676890",
  appId: "1:455120676890:web:871172a082c577682949a3",
  measurementId: "G-6SWG08SBMK"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication=getAuth(app)
export const db=getFirestore(app)




