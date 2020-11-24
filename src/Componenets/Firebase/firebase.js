import app from 'firebase/app';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyCv9OZGSEdUSQE_HWW5AgIkjLunxAqPG1g",
    authDomain: "geeksdata-test.firebaseapp.com",
    databaseURL: "https://geeksdata-test.firebaseio.com",
    projectId: "geeksdata-test",
    storageBucket: "geeksdata-test.appspot.com",
    messagingSenderId: "1065746394956",
    appId: "1:1065746394956:web:c7f430e45745be274ea9e9"
  };

class Firebase {

    constructor(){
        app.initializeApp(config);
        this.auth=app.auth()
    }

// connexion
loginUser=(email,password)=>
this.auth.signInWithEmailAndPassword(email,password);

// deconnexion
signoutUser=()=>this.auth.signOut();

// Forget Password
passwordReset=(email)=>this.auth.sendPasswordResetEmail(email);

}

export default Firebase;