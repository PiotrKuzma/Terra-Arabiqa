import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDLS6vygvBoPqvQqIAyKdxdkx2Jbn82sp8",
    authDomain: "arabiqa-db.firebaseapp.com",
    databaseURL: "https://arabiqa-db.firebaseio.com",
    projectId: "arabiqa-db",
    storageBucket: "arabiqa-db.appspot.com",
    messagingSenderId: "1066149885778",
    appId: "1:1066149885778:web:cc5be875bd9065704bac8b"
};

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()

provider.setCustomParameters( {prompt: "select_account"} )

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase