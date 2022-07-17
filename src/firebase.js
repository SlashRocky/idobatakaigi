import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDDdU-rvrBDbcmLYlgSNhzwAb7wCIX-PFY",
  authDomain: "idobatakaigi-with-ham-46b6a.firebaseapp.com",
  databaseURL:
    "https://idobatakaigi-with-ham-46b6a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "idobatakaigi-with-ham-46b6a",
  storageBucket: "idobatakaigi-with-ham-46b6a.appspot.com",
  messagingSenderId: "812136135242",
  appId: "1:812136135242:web:1058c047675f0af8d304b3",
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const messageRef = database.ref("messages");

export const pushMessage = ({ name, text }) => {
  messageRef.push({ name, text });
};
