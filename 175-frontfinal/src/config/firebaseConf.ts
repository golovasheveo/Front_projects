// Your web app's Firebase configuration
import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyBf8nEibz8ISydaXXfEcYGVXOi8teIKfYY",
    authDomain: "shop-98d97.firebaseapp.com",
    databaseURL: "https://shop-98d97.firebaseio.com",
    projectId: "shop-98d97",
    storageBucket: "shop-98d97.appspot.com",
    messagingSenderId: "258101334078",
    appId: "1:258101334078:web:add940e5f14ddc95ccc16f"
};

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);

const appFirebase = firebase.initializeApp(firebaseConfig);
export default appFirebase;





// var washingtonRef = db.collection('cities').doc('DC');
//
// // Atomically increment the population of the city by 50.
// washingtonRef.update({
//     population: firebase.firestore.FieldValue.increment(50)
// });