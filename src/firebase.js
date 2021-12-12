import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD3HgIAzx87UBWVv7CkxyfX4rdDt33Jb0o",
  authDomain: "netflix-dc30c.firebaseapp.com",
  projectId: "netflix-dc30c",
  storageBucket: "netflix-dc30c.appspot.com",
  messagingSenderId: "442583934474",
  appId: "1:442583934474:web:dedbe6feb4e14091de21f3",
  measurementId: "G-KBHYJJF379"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export default storage;