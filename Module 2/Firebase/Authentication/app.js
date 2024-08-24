import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

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
const auth = getAuth(app);

let getSBtn = document.querySelector("#sbtn");

if (getSBtn) {
  getSBtn.addEventListener("click", () => {
    let email = document.getElementById("semail");
    let password = document.getElementById("spass");

    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);

        Swal.fire({
            title: "Good job!",
            text: `WELCOME ${user.email}`,
            icon: "success"
          }).then(()=>{
              location.href = './signin.html'
          })




      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

      
        Swal.fire({
          icon: "error",
          title: errorCode,
          text: errorMessage,
        });
      });
  });
}

let getLBtn = document.querySelector("#lbtn");

if (getLBtn) {
  getLBtn.addEventListener("click", () => {
    let email = document.querySelector("#lemail");
    let password = document.querySelector("#lpass");

    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  });
}
