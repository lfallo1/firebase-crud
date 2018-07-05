import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDPYYLQi4GoR0PiBR25S_8tA5RUzVzXhc4",
    authDomain: "fir-crud-pos.firebaseapp.com",
    databaseURL: "https://fir-crud-pos.firebaseio.com",
    projectId: "fir-crud-pos",
    storageBucket: "",
    messagingSenderId: "473126916275"
};

firebase.initializeApp(config);
export default firebase;