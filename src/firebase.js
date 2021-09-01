import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDw7q0n6cvCQjXpecMISaBqGwaCPD8M0SE",
    authDomain: "facebook-clone-13d94.firebaseapp.com",
    projectId: "facebook-clone-13d94",
    storageBucket: "facebook-clone-13d94.appspot.com",
    messagingSenderId: "465427300400",
    appId: "1:465427300400:web:a4441ef0058ebbcf7dadf5",
    measurementId: "G-DDZQ6CELKT"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig)

  const db=firebaseApp.firestore()
  const auth=firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export {auth , provider};
  export default db;