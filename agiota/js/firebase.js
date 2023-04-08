(function () {

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKliuSLXG-hyzg7oR3LeLj5UTS-fmafh0",
  authDomain: "agiotagemonline-801f1.firebaseapp.com",
  databaseURL: "https://agiotagemonline-801f1-default-rtdb.firebaseio.com",
  projectId: "agiotagemonline-801f1",
  storageBucket: "agiotagemonline-801f1.appspot.com",
  messagingSenderId: "618466370845",
  appId: "1:618466370845:web:23b041dff4e3eab52a6df4",
  measurementId: "G-R5WXM67TL3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Add Firebase scripts
const firebaseAuthScript = document.createElement('script');
firebaseAuthScript.src = "https://www.gstatic.com/firebasejs/8.6.8/firebase-auth.js";
document.head.appendChild(firebaseAuthScript);

const firebaseDatabaseScript = document.createElement('script');
firebaseDatabaseScript.src = "https://www.gstatic.com/firebasejs/8.6.8/firebase-database.js";
document.head.appendChild(firebaseDatabaseScript);

const firebaseAppScript = document.createElement('script');
firebaseAppScript.src = "https://www.gstatic.com/firebasejs/8.6.8/firebase-app.js";
document.head.appendChild(firebaseAppScript);

})();
