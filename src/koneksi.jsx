import firebase from "firebase";

function database() {
    const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyA9FlSWX8KsaOAUxmIeysQs15duhwaq9VU",
        authDomain: "kriditin-b0188.firebaseapp.com",
        databaseURL: "https://kriditin-b0188.firebaseio.com",
        projectId: "kriditin-b0188",
        storageBucket: "kriditin-b0188.appspot.com",
        messagingSenderId: "283984412895",
        appId: "1:283984412895:web:9d3b5873f7c352a7eda96a",
        measurementId: "G-LFX70WN54W"
    });

    return firebaseApp.firestore();
}

export const db = database();