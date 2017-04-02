import firebase from 'firebase';

try {
  var config = {
   apiKey: "AIzaSyBquTgHxEmxRD8avbFBLn08O61V2SYhILc",
   authDomain: "todo-app-ac434.firebaseapp.com",
   databaseURL: "https://todo-app-ac434.firebaseio.com",
   storageBucket: "todo-app-ac434.appspot.com",
   messagingSenderId: "775439300049"
  };
  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
