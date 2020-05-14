import firebase from 'firebase/app'
import 'firebase/firestore' // for the database
import 'firebase/auth'  // for the authorisation

const config = {
  apiKey: "AIzaSyCE8o3gtPNquPCj89EfRlgbVlCtEChYQSk",
  authDomain: "crwn-db-949da.firebaseapp.com",
  databaseURL: "https://crwn-db-949da.firebaseio.com",
  projectId: "crwn-db-949da",
  storageBucket: "crwn-db-949da.appspot.com",
  messagingSenderId: "703367615173",
  appId: "1:703367615173:web:4b8686cc8be509b48dd6ac",
  measurementId: "G-XSCE9G9LR6"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase