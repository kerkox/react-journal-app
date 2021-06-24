import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyChEA3cv-Ox9wNcj0grXLl2FH76m9497jQ",
  authDomain: "react-app-cursos-9c6a5.firebaseapp.com",
  projectId: "react-app-cursos-9c6a5",
  storageBucket: "react-app-cursos-9c6a5.appspot.com",
  messagingSenderId: "243782188903",
  appId: "1:243782188903:web:c2fbb3ac7d1d54e3a279c2",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
  db,
  googleAuthProvider,
  firebase
}
