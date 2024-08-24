import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getFirestore,
  doc,
  setDoc,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA3WofDB98eUXVVqMcilo38RyJgF2vTpf8",
  authDomain: "batch11-c9ba6.firebaseapp.com",
  projectId: "batch11-c9ba6",
  storageBucket: "batch11-c9ba6.appspot.com",
  messagingSenderId: "756118996711",
  appId: "1:756118996711:web:776547e825a3a6786b8442",
  measurementId: "G-2QVJFV7ERD",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

let getBtn = document.querySelector("#sendToDatabase");
getBtn.addEventListener("click", async () => {
  let getUser = document.querySelector("#username");
  let getEmail = document.querySelector("#email");
  let getPass = document.querySelector("#password");
  let randomKey = Math.random() * 10;
  await setDoc(doc(db, "users", `${randomKey}/`), {
    name: getUser.value,
    email: getEmail.value,
    password: getPass.value,
  });

  console.log("Data inserted successfully");
});
