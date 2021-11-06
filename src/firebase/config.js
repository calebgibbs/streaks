import firebase from 'firebase/app' 
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAPYAaDfsrfgHCtsv8SMQby5TS569rqCF8",
  authDomain: "streaks-9efa1.firebaseapp.com",
  projectId: "streaks-9efa1",
  storageBucket: "streaks-9efa1.appspot.com",
  messagingSenderId: "156228921596",
  appId: "1:156228921596:web:7c860ef6ce5afa679c0f79"
} 

firebase.initializeApp(firebaseConfig) 

const projectFirestore = firebase.firestore() 
const timestamp = firebase.firestore.FieldValue.serverTimestamp 

export {
  projectFirestore, 
  timestamp
}