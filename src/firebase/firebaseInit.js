import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "./fbConfig";
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();
