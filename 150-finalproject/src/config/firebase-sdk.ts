import firebase from "firebase";
// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: "AIzaSyD73f6CAF35xf6l6_KlgG-ybD46kOGbexs",
    // authDomain: "employees-50edc.firebaseapp.com",
    // databaseURL: "https://employees-50edc.firebaseio.com",
    // projectId: "employees-50edc",
    // storageBucket: "employees-50edc.appspot.com",
    // messagingSenderId: "280730905574",
    // appId: "1:280730905574:web:6cef5c3d310d0a384f8427"

    // eo

    apiKey: "AIzaSyA79H72mhU9F3UhPA5GJPiw_Cw0s0oSmHI",
    authDomain: "eo-frontproject.firebaseapp.com",
    databaseURL: "https://eo-frontproject.firebaseio.com",
    projectId: "eo-frontproject",
    storageBucket: "eo-frontproject.appspot.com",
    messagingSenderId: "367116427311",
    appId: "1:367116427311:web:20c3f17d49f48ef8d166da",
    measurementId: "G-L2QKZ45F68"

    // apiKey: "AIzaSyCuV7EPJekawSAgeRDBXJwVj38yBc_zRks",
    // authDomain: "employees-f5438.firebaseapp.com",
    // databaseURL: "https://employees-f5438.firebaseio.com",
    // projectId: "employees-f5438",
    // storageBucket: "employees-f5438.appspot.com",
    // messagingSenderId: "540376015441",
    // appId: "1:540376015441:web:980da1e58e9e071efc4e70"
};
// Initialize Firebase
const appFirebase = firebase.initializeApp(firebaseConfig);
export default appFirebase;
