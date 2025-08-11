import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth'; 

const firebaseConfig = {
  //testing
  // apiKey: "AIzaSyCTmFMUSQL_lvxZSGzihrx5G7AypB4Uk5Q",
  // authDomain: "testing-855ce.firebaseapp.com",
  // projectId: "testing-855ce",
  // storageBucket: "testing-855ce.appspot.com",
  // messagingSenderId: "1086229411180",
  // appId: "1:1086229411180:web:4a835dadcfb73b08a42f49" 
  
    //main
    // apiKey: "AIzaSyD9dhzJrhhENssGVbsGleNDk7ZTBUxsyik",
    // authDomain: "mainbilling1-166c9.firebaseapp.com",
    // projectId: "mainbilling1-166c9",
    // storageBucket: "mainbilling1-166c9.appspot.com",
    // messagingSenderId: "411663637638",
    // appId: "1:411663637638:web:d7b7c7221860edcba74507"
  //main2
  // apiKey: "AIzaSyC7CD7ve78jS2k3a3XzkdlWwBGhp_9Lfg0",
  // authDomain: "billing-software2.firebaseapp.com",
  // projectId: "billing-software2",
  // storageBucket: "billing-software2.appspot.com",
  // messagingSenderId: "97163152398",
  // appId: "1:97163152398:web:b02de4e1e085efbca9c05f"

  //main db
apiKey: "AIzaSyD9y8pzNLusjJa6pmz6bQ8eenzf5smz1p8",
  authDomain: "thangam-crackers.firebaseapp.com",
  projectId: "thangam-crackers",
  storageBucket: "thangam-crackers.firebasestorage.app",
  messagingSenderId: "201371411338",
  appId: "1:201371411338:web:7d62918c513cd6cd4b5e73"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app); 
const storage = getStorage(app); 
const auth = getAuth(app); 
const firestore = getFirestore(app);
export { db, storage, auth , firestore}; 
