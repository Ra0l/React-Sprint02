import firebase from 'firebase';

const  firebaseConfig = {
    apiKey: "AIzaSyBJ4mDTqx5GRXJZ6xrtTgsVXIq0NAN66ps",
    authDomain: "bustec-21808.firebaseapp.com",
    databaseURL: "https://bustec-21808.firebaseio.com",
    projectId: "bustec-21808",
    storageBucket: "bustec-21808.appspot.com",
    messagingSenderId: "582200125898",
    appId: "1:582200125898:web:38f1f07210d31277"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;