
const ListPost = JSON.parse(localStorage.getItem("ListPost")) ?? [];
const Accounts = JSON.parse(localStorage.getItem("Accounts")) ?? [];
const USER = JSON.parse(localStorage.getItem("USER")) ?? [];
const PASS = JSON.parse(localStorage.getItem("PASS")) ?? [];
const bruhPost = JSON.parse(localStorage.getItem("bruhPost")) ??[];
const ListFriend = JSON.parse(localStorage.getItem("ListFriend")) ?? [];

function submit() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const icon = document.getElementById("icon").value;

    if (isUsed(username)) {
        alert("Username not available")
    }
    else {

        Accounts.push({
           username, password, icon
        })
        const currentUser = {
            User : username,
            Pass : password,
            Icon : icon
        }
        USER.push(username)
        PASS.push(password)
        ListPost.push([])
        ListFriend.push([])
        console.log(ListFriend);
        localStorage.setItem("ListPost",JSON.stringify(ListPost))
        localStorage.setItem("ListFriend",JSON.stringify(ListFriend))
        localStorage.setItem("CurrentUser", JSON.stringify(currentUser))
        localStorage.setItem("Accounts", JSON.stringify(Accounts))
        localStorage.setItem("USER", JSON.stringify(USER))
        localStorage.setItem("PASS", JSON.stringify(PASS))
        localStorage.setItem("bruhPost", JSON.stringify(bruhPost))
        alert("Sign up successfully")
        window.location.replace("http://127.0.0.1:5500/CK.html")
    }
    return false;
}

function isUsed(x) {
    return Accounts.some((user) => user.username == x);
}