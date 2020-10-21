import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD2HOdbuI8zta2TZCbdftBtuiwNgRDR8Z4",
  authDomain: "imessenger-77299.firebaseapp.com",
  databaseURL: "https://imessenger-77299.firebaseio.com",
  projectId: "imessenger-77299",
  storageBucket: "imessenger-77299.appspot.com",
  messagingSenderId: "543529773170",
  appId: "1:543529773170:web:817038c1843c4ed4c3faeb",
  measurementId: "G-T03TJ7ET53",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
