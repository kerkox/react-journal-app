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

const firebaseConfigTesting = {
  apiKey: "AIzaSyBSaSfRZgW4L5YhiTg_gUQ4P6VqdL8Bw14",
  authDomain: "react-app-curso-test-c8ca9.firebaseapp.com",
  projectId: "react-app-curso-test-c8ca9",
  storageBucket: "react-app-curso-test-c8ca9.appspot.com",
  messagingSenderId: "834774073006",
  appId: "1:834774073006:web:860997daddc8ede4ef373f",
};

if( process.env.NODE_ENV === 'test') {
  // TESTING
  firebase.initializeApp(firebaseConfigTesting);
} else {
  //dev/prod
  firebase.initializeApp(firebaseConfig);
}




const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
  db,
  googleAuthProvider,
  firebase
}
