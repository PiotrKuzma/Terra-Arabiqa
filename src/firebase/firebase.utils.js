import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDv8zR6gS36PMRPNuA3iLmAE0m6SMAElnA",
  authDomain: "terra-arabiqa.firebaseapp.com",
  databaseURL: "https://terra-arabiqa.firebaseio.com",
  projectId: "terra-arabiqa",
  storageBucket: "terra-arabiqa.appspot.com",
  messagingSenderId: "501963184564",
  appId: "1:501963184564:web:bed6acf31d74a279f33ae1",
};

export const createProfileDoc = async (userAuth, additional) => {
  if (!userAuth) return;

  const userReference = firestore.doc(`users/${userAuth.uid}`);

  const snap = await userReference.get();

  if (!snap.exists) {
    const { displayName, email } = userAuth;
    const creationDate = new Date();

    try {
      await userReference.set({
        displayName,
        email,
        creationDate,
        ...additional,
      });
    } catch (error) {
      console.log("user creation failed");
    }
  }
  return userReference;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
