import firebase from 'firebase';

var config = {
 apiKey: "AIzaSyBquTgHxEmxRD8avbFBLn08O61V2SYhILc",
 authDomain: "todo-app-ac434.firebaseapp.com",
 databaseURL: "https://todo-app-ac434.firebaseio.com",
 storageBucket: "todo-app-ac434.appspot.com",
 messagingSenderId: "775439300049"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'TodoApp',
    version: '0.1'
  },
  isRunning: true,
  user: {
    name: 'Tobias',
    age: 28
  }
});

firebaseRef.update({
  isRunning: false,
  'app/name': 'Todo application',
  'user/name': 'Dick'
});


var notesRef = firebaseRef.child('notes');

notesRef.on('child_added', (snapshot) => {
  console.log('child_added', snapshot.key, snapshot.val());
});

notesRef.on('child_changed', (snapshot) => {
  console.log('child_changed', snapshot.key, snapshot.val());
});

notesRef.on('child_removed', (snapshot) => {
  console.log('child_removed', snapshot.key, snapshot.val());
});

var newNoteRef = notesRef.push({
  text: 'Walk the dog!'
});
