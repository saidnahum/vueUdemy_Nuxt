import firebase from "firebase/app";
require("firebase/auth");
require("firebase/firestore");
require("firebase/storage");


const firebaseConfig = {
   apiKey: "AIzaSyAITt2AvUF87iis9qTnfSl7aohLJIc2vx0",
   authDomain: "nuxt-1-78bb6.firebaseapp.com",
   projectId: "nuxt-1-78bb6",
   storageBucket: "nuxt-1-78bb6.appspot.com",
   messagingSenderId: "241581333197",
   appId: "1:241581333197:web:cac6ceef97759215456784"
};

if (!firebase.apps.length) {
   firebase.initializeApp(firebaseConfig);
}


const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { firebase, db, auth, storage }