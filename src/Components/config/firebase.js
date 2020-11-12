import * as firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/database'

var firebaseConfig = {
    apiKey: "AIzaSyBqbaSrjGHD3bivhc8JAe5tNWM3NmajCys",
    authDomain: "facebook-login-d6342.firebaseapp.com",
    databaseURL: "https://facebook-login-d6342.firebaseio.com",
    projectId: "facebook-login-d6342",
    storageBucket: "facebook-login-d6342.appspot.com",
    messagingSenderId: "608429458234",
    appId: "1:608429458234:web:5d727cf843105409d2c603",
    measurementId: "G-RWV0D3KF0D"
  };
  
export default firebase.initializeApp(firebaseConfig);