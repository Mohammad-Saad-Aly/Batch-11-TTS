import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";
import { getStorage, ref, uploadBytesResumable, getDownloadURL   } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-storage.js";

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
const storage = getStorage(app);
const db = getFirestore(app)


let getBtn = document.getElementById('btn')
getBtn.addEventListener('click',()=>{
    let getInp = document.getElementById('inp')

    console.log(getInp.files[0])

    const file = getInp.files[0]
    const storageRef = ref(storage, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed', 
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        }, 
        (error) => {
          console.log(error)
        }, 
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
            console.log('File available at', downloadURL);
            const docRef = await addDoc(collection(db, "images"), {
                img: downloadURL
              });
              console.log("Document written with ID: ", docRef.id);
          });
        }
      );



})