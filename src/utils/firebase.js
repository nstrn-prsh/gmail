import firebase from "firebase";

const firebaseConfig = {
     apiKey: "AIzaSyDE2Sl0Edq9sKRV0UJx1WJLY0IcbmVzPXs",
     authDomain: "clone-1e3d3.firebaseapp.com",
     projectId: "clone-1e3d3",
     storageBucket: "clone-1e3d3.appspot.com",
     messagingSenderId: "991969147858",
     appId: "1:991969147858:web:a83a48879cdc437608e60b",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider, db };
