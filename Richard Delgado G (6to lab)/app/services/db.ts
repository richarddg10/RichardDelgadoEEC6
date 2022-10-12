import { initializeApp } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js";
import { getFirestore, collection, query, where, getDocs, addDoc } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyBIZxGUIiToETWOOwU0v4B-t1Fvddf6N7k",
    authDomain: "bd-instagram.firebaseapp.com",
    projectId: "bd-instagram",
    storageBucket: "bd-instagram.appspot.com",
    messagingSenderId: "916504280263",
    appId: "1:916504280263:web:020cfe1773ed7a98ad52e2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const usersRef = collection(db,"usuarios");

export const queryUser = async ({ email, password }: { email: string; password: string; }) => {

    try {
        const q = query(usersRef, where("email", "==", email), where("password","==", password));
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc:any) => {
            console.log(doc.id,"=>",doc.data());
        });

        return !querySnapshot.empty;
    } catch (error) {
        return false;
    }
};

export const addUser = async ({ email, password }: { email: string; password: string; }) => {
    
    try {
        const docRef = await addDoc(collection(db,"usuarios"), { email, password });
        console.log(docRef.id);
        return docRef.ref;
    } catch (error) {
        console.error(error);
        return false;
    }
}