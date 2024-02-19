// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
  deleteDoc,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1_I43LZMG5NdLBwStM6nOwq306eCVa2Q",
  authDomain: "clase-18-3.firebaseapp.com",
  projectId: "clase-18-3",
  storageBucket: "clase-18-3.appspot.com",
  messagingSenderId: "164383458517",
  appId: "1:164383458517:web:04499650c51dcebf504e5c"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const querySnapshot = await getDocs(collection(db, "tasks"));

function createCard(id, task) {
  //<div class="card text-white bg-info mb-6  offset-md-4" style="max-width: 20rem;">
  const principalDiv = document.createElement("div");
  principalDiv.setAttribute("class", "card bg-light mb-3");
  principalDiv.style = "max-width: 20rem;";
  principalDiv.setAttribute("name", id);
  //<div class="card-header">Formulario Tareas</div>
  const headerDiv = document.createElement("div");
  const contentDiv = document.createTextNode("Id: " + id);
  headerDiv.setAttribute("class", "card-header");

  headerDiv.appendChild(contentDiv);
  principalDiv.appendChild(headerDiv);
  // <div class="card-body">
  const bodyDiv = document.createElement("div");
  const pTitle = document.createElement("p");
  const pTitleText = document.createTextNode("Title: " + task.title);
  const hr = document.createElement("hr");
  const pDesc = document.createElement("p");
  const pDescText = document.createTextNode("Description: " + task.description);

  pTitle.appendChild(pTitleText);
  bodyDiv.appendChild(pTitle);
  bodyDiv.appendChild(hr);
  pDesc.appendChild(pDescText);
  bodyDiv.appendChild(pDesc);
  bodyDiv.appendChild(hr);

  var input = document.createElement("input");
  input.type = "button";
  input.value = "Borrar Tarea";
  input.setAttribute("name", "delete");
  input.setAttribute("id", id);
  bodyDiv.appendChild(input);

  principalDiv.appendChild(bodyDiv);

  document.body.appendChild(principalDiv);
  const br = document.createElement("br");
  document.body.appendChild(br);
}

export function getTasks() {
  querySnapshot.forEach((doc) => {
    createCard(doc.id, doc.data());
  });
}
function generateRandomIdTask(num) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < num; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}
export async function insertTask(task) {
  await setDoc(doc(db, "tasks", generateRandomIdTask(20)), task);
  alert("Insertada la tarea: " + task.title);
}

export async function deleteTask(id) {
  await deleteDoc(doc(db, "tasks", id));
  alert("Borrada la tarea: " + id);
}