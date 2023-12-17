// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAU-tmQhd29vnzqnrNm3QpsthT6oCcaz7Y",
    authDomain: "eman-tcejorp.firebaseapp.com",
    projectId: "eman-tcejorp",
    storageBucket: "eman-tcejorp.appspot.com",
    messagingSenderId: "180268626184",
    appId: "1:180268626184:web:8c9e4bdd7514b39020fcbd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log(user);
            const ListPost = JSON.parse(localStorage.getItem("ListPost")) ?? [];
            const Accounts = JSON.parse(localStorage.getItem("Accounts")) ?? [];
            const USER = JSON.parse(localStorage.getItem("USER")) ?? [];
            const GMAIL = JSON.parse(localStorage.getItem("GMAIL")) ?? [];
            const bruhPost = JSON.parse(localStorage.getItem("bruhPost")) ?? [];
            const ListFriend = JSON.parse(localStorage.getItem("ListFriend")) ?? [];
            const username = user.displayName;
            const gmail = user.email;
            const icon = user.photoURL;
            if(GMAIL.includes(gmail)){
                const currentUser = {
                    User: username,
                    Gmail: gmail,
                    Icon: icon
                }
                localStorage.setItem("CurrentUser", JSON.stringify(currentUser))
                window.location.replace("http://127.0.0.1:5500/CK.html")
            }
            else{
                Accounts.push({
                    username, gmail, icon
                })
                const currentUser = {
                    User: username,
                    Gmail: gmail,
                    Icon: icon
                }
                USER.push(username)
                GMAIL.push(gmail)
                ListPost.push([])
                ListFriend.push([])
                console.log(ListFriend);
                localStorage.setItem("ListPost", JSON.stringify(ListPost))
                localStorage.setItem("ListFriend", JSON.stringify(ListFriend))
                localStorage.setItem("CurrentUser", JSON.stringify(currentUser))
                localStorage.setItem("Accounts", JSON.stringify(Accounts))
                localStorage.setItem("USER", JSON.stringify(USER))
                localStorage.setItem("GMAIL", JSON.stringify(GMAIL))
                localStorage.setItem("bruhPost", JSON.stringify(bruhPost))
                window.location.replace("http://127.0.0.1:5500/CK.html")
            }
            
            // IdP data available using getAdditionalUserInfo(result)
            // ...
        }).catch((error) => {
            console.log(error);
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
}
export { app, auth, signInWithGoogle }
