const ListPost = JSON.parse(localStorage.getItem("ListPost"))
const ListFriend = JSON.parse(localStorage.getItem("ListFriend"))
const USER = JSON.parse(localStorage.getItem("USER"))
const IMG = document.getElementById("imG")
const Account = JSON.parse(localStorage.getItem("Accounts"))
const currentUser = JSON.parse(localStorage.getItem("CurrentUser"))
const currentPlace = USER.indexOf(currentUser.User)
const currentListFriend = ListFriend[USER.indexOf(currentUser.User)]
document.getElementById("Icon1").insertAdjacentHTML("afterbegin", `<img style="border-radius: 50%;" src="${currentUser.Icon}" alt="">`)
var Friend = false
const bruhPost = JSON.parse(localStorage.getItem("bruhPost"))
var imgDIS = false
var c = false


document.getElementById("IconM").insertAdjacentHTML("afterbegin", `<img onclick="askfalfkalfkj()" style="border-radius: 50%; height = 100px" src="${currentUser.Icon}" alt="" id="Icon1">`)
document.getElementById("Mname").insertAdjacentHTML("afterbegin", `<div onclick="askfalfkalfkj()" class="Nickname2"><p class="abc2">${currentUser.User}</p></div>`)
document.getElementById("Mmail").insertAdjacentHTML("afterbegin", `<div onclick="askfalfkalfkj()" class="Nickname2"><p class="abc3">${currentUser.Gmail}</p></div>`)

function submitIMG() {
    const img1 = document.getElementById("img-input").value
    if (img1 == "") {
        IMG.style.display = "none"
        IMG.innerHTML = ""
    }
    else {
        IMG.style.display = "block"
        if (IMG.innerHTML == img1) {
            IMG.insertAdjacentHTML("afterbegin", `
            <img id= iMg src="${img1}">`)
        }
        else {
            IMG.innerHTML = ""
            IMG.insertAdjacentHTML("afterbegin", `
            <img id= iMg src="${img1}">`)
        }
    }
}
function pickIMG() {
    if (imgDIS == false) {
        document.getElementById("a123").style.display = "flex"
        imgDIS = true
        const img1 = document.getElementById("img-input").value
        setInterval(submitIMG, 500)
    }
}
function endPickIMG() {
    if (imgDIS == true) {
        document.getElementById("a123").style.display = "none"
        imgDIS = false
        clearInterval(submitIMG)
        IMG.style.display = "none"
        IMG.innerHTML = ""
        document.getElementById("img-input").value = ""
    }
}
function creatPost() {
    clearInterval(submitIMG)
    if (document.getElementById("Crt-input").value == "") {
        alert("You need to write something to post")
    }
    else {
        const date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let hour = date.getHours();
        let minute = date.getMinutes();

        if (document.getElementById("img-input").value == "") {
            document.getElementById("Content").insertAdjacentHTML("afterbegin", `<div class="Post">
        <div class="Post-head">
            <img onclick="inspect('${currentUser.User}')" style="border-radius: 50%;" src="${currentUser.Icon}" alt="" id="Icon2">
            <div onclick="inspect('${currentUser.User}')" class="Nickname"><p class="abc1">${currentUser.User}</p></div>
        </div>
        <div class="Post-content">
            <div id="Time">${hour}:${minute} / ${month}-${day}-${year}</div>
            <div class="Status"><p class="abc2">${document.getElementById("Crt-input").value}</p></div>
        </div>
    </div>`)
            document.getElementById("a123").style.display = "none"
            imgDIS = false
            IMG.style.display = "none"
            IMG.innerHTML = ""
        }
        else {
            document.getElementById("Content").insertAdjacentHTML("afterbegin", `<div class="Post">
        <div class="Post-head">
            <img onclick="inspect(${currentUser.User})" style="border-radius: 50%;" src="${currentUser.Icon}" alt="" id="Icon2">
            <div onclick="inspect(${currentUser.User})" class="Nickname"><p class="abc1">${currentUser.User}</p></div>
        </div>
        <div class="Post-content">
            <div id="Time">${hour}:${minute} / ${month}-${day}-${year}</div>
            <div class="Status"><p class="abc2">${document.getElementById("Crt-input").value}</p></div>
            <img class="Status_img" src="${document.getElementById("img-input").value}" alt="">
        </div>
    </div>`)
            document.getElementById("a123").style.display = "none"
            imgDIS = false
            IMG.style.display = "none"
            IMG.innerHTML = ""
        }
        const Post = {
            User: currentUser.User,
            Icon: currentUser.Icon,
            Hour: hour,
            Minute: minute,
            Month: month,
            Day: day,
            Year: year,
            Status: document.getElementById("Crt-input").value,
            Img: document.getElementById("img-input").value
        }
        ListPost[currentPlace].unshift(Post)
        localStorage.setItem("ListPost", JSON.stringify(ListPost))
        bruhPost.unshift(Post)
        localStorage.setItem("bruhPost", JSON.stringify(bruhPost))
        document.getElementById("img-input").value = ""
        document.getElementById("Crt-input").value = ""
    }
}
// for (let a = 0; a < ListPost.length; a+=1) {
//     currentListPost = ListPost[a]
//     for (let i = currentListPost.length - 1; i >= 0; i=i-1) {
//         if (currentListPost.length == 0) {
//             continue
//         }
//         else{
//             bruhPost.unshift(currentListPost[i])
//         }
//     }
// }

for (let i = 0; i < bruhPost.length; i += 1) {
    if (bruhPost[i].Img == "") {
        document.getElementById("Content").insertAdjacentHTML("beforeend", `<div class="Post">
    <div class="Post-head">
        <img onclick="inspect('${bruhPost[i].User}')" style="border-radius: 50%;" src="${bruhPost[i].Icon}" alt="" id="Icon2">
        <div onclick="inspect('${bruhPost[i].User}')" class="Nickname"><p class="abc1">${bruhPost[i].User}</p></div>
    </div>
    <div class="Post-content">
        <div id="Time">${bruhPost[i].Hour}:${bruhPost[i].Minute} / ${bruhPost[i].Month}-${bruhPost[i].Day}-${bruhPost[i].Year}</div>
        <div class="Status"><p class="abc2">${bruhPost[i].Status}</p></div>
    </div>
</div>`)
    }
    else {
        document.getElementById("Content").insertAdjacentHTML("beforeend", `<div class="Post">
    <div class="Post-head">
        <img onclick="inspect('${bruhPost[i].User}')" style="border-radius: 50%;" src="${bruhPost[i].Icon}" alt="" id="Icon2">
        <div onclick="inspect('${bruhPost[i].User}')" class="Nickname"><p class="abc1">${bruhPost[i].User}</p></div>
    </div>
    <div class="Post-content">
        <div id="Time">${bruhPost[i].Hour}:${bruhPost[i].Minute} / ${bruhPost[i].Month}-${bruhPost[i].Day}-${bruhPost[i].Year}</div>
        <div class="Status"><p class="abc2">${bruhPost[i].Status}</p></div>
        <img class="Status_img" src="${bruhPost[i].Img}" alt="">
    </div>
</div>`)
    }
}
function out() {
    c = false
    document.getElementById("Home").style.display = "none"
    document.getElementById("SignOut").style.display = "none"
    currentUser.User = ""
    currentUser.Pass = ""
    currentUser.Icon = ""
    localStorage.setItem("CurrentUser", JSON.stringify(currentUser))
}

function ADD() {
    if (Friend == true) {
        currentListFriend.splice(currentListFriend.indexOf(Iname), 1)
        Friend = false
        document.getElementById("frd-add").innerHTML = "Add"
        localStorage.setItem("ListFriend", JSON.stringify(ListFriend))
    }
    else if (Friend == false) {
        currentListFriend.unshift(Iname.innerText)
        Friend = true
        document.getElementById("frd-add").innerHTML = "Unfriend"
        localStorage.setItem("ListFriend", JSON.stringify(ListFriend))
    }
}
function inspect(x) {
    const xUser = x
    const xIcon = Account[USER.indexOf(x)].icon
    const xListPost = ListPost[USER.indexOf(x)]
    document.getElementById("vsContent").innerHTML = ""
    document.getElementById("Post-crt").style.display = "none"
    document.getElementById("Content").style.display = "none"
    document.getElementById("vsContent").style.display = "flex"
    document.getElementById("butuba").style.display = "block"
    if(ListFriend[USER.indexOf(currentUser.User)].includes(xUser)){
        var Friend = true
        console.log(Friend);
    }
    else{
        var Friend = false
        console.log(Friend);
    }
    if (xUser == currentUser.User) {
        document.getElementById("vsContent").insertAdjacentHTML("afterbegin",`<div id="frd-pro">
        <img id="Iicon" src="${xIcon}" alt="">
        <div id="Iname">${xUser}</div>
    </div>`)
    }
    else{
        document.getElementById("vsContent").insertAdjacentHTML("afterbegin",`<div id="frd-pro">
        <img id="Iicon" src="${xIcon}" alt="">
        <div id="Iname">${xUser}</div>
        <a id="frd-add" onclick="ADD()">Add</a>
    </div>`)
    }
    
    if (xUser == currentUser.User) {
        if (xListPost.length == 0) {
            document.getElementById("Content").insertAdjacentHTML("beforeend", "There is no post")
        }
        else {
            for (let i = 0; i < xListPost.length; i += 1) {
                if (xListPost[i].Img == "") {
                    document.getElementById("vsContent").insertAdjacentHTML("beforeend", `<div class="Post">
                <div class="Post-head">
                    <img style="border-radius: 50%;" src="${xListPost[i].Icon}" alt="" id="Icon2">
                    <div class="Nickname"><p class="abc1">${bruhPost[i].User}</p></div>
                </div>
                <div class="Post-content">
                    <div id="Time">${xListPost[i].Hour}:${xListPost[i].Minute} / ${xListPost[i].Month}-${xListPost[i].Day}-${xListPost[i].Year}</div>
                    <div class="Status"><p class="abc2">${xListPost[i].Status}</p></div>
                </div>
            </div>`)
                }
                else {
                    document.getElementById("vsContent").insertAdjacentHTML("beforeend", `<div class="Post">
                <div class="Post-head">
                    <img style="border-radius: 50%;" src="${xListPost[i].Icon}" alt="" id="Icon2">
                    <div class="Nickname"><p class="abc1">${xListPost[i].User}</p></div>
                </div>
                <div class="Post-content">
                    <div id="Time">${xListPost[i].Hour}:${xListPost[i].Minute} / ${xListPost[i].Month}-${xListPost[i].Day}-${xListPost[i].Year}</div>
                    <div class="Status"><p class="abc2">${xListPost[i].Status}</p></div>
                    <img class="Status_img" src="${xListPost[i].Img}" alt="">
                </div>
            </div>`)
                }
            }
        }
    }

    else {
        if (xListPost.length == 0) {
            document.getElementById("Content").insertAdjacentHTML("beforeend", "There is no post")
        }
        else {
            for (let i = 0; i < xListPost.length; i += 1) {
                if (xListPost[i].Img == "") {
                    document.getElementById("vsContent").insertAdjacentHTML("beforeend", `<div class="Post">
                <div class="Post-head">
                    <img style="border-radius: 50%;" src="${xListPost[i].Icon}" alt="" id="Icon2">
                    <div class="Nickname"><p class="abc1">${bruhPost[i].User}</p></div>
                </div>
                <div class="Post-content">
                    <div id="Time">${xListPost[i].Hour}:${xListPost[i].Minute} / ${xListPost[i].Month}-${xListPost[i].Day}-${xListPost[i].Year}</div>
                    <div class="Status"><p class="abc2">${xListPost[i].Status}</p></div>
                </div>
            </div>`)
                }
                else {
                    document.getElementById("vsContent").insertAdjacentHTML("beforeend", `<div class="Post">
                <div class="Post-head">
                    <img style="border-radius: 50%;" src="${xListPost[i].Icon}" alt="" id="Icon2">
                    <div class="Nickname"><p class="abc1">${xListPost[i].User}</p></div>
                </div>
                <div class="Post-content">
                    <div id="Time">${xListPost[i].Hour}:${xListPost[i].Minute} / ${xListPost[i].Month}-${xListPost[i].Day}-${xListPost[i].Year}</div>
                    <div class="Status"><p class="abc2">${xListPost[i].Status}</p></div>
                    <img class="Status_img" src="${xListPost[i].Img}" alt="">
                </div>
            </div>`)
                }
            }
        }
    }
}

function back() {
    ;
    document.getElementById("vsContent").innerHTML = ""
    document.getElementById("Content").innerHTML = ""
    document.getElementById("Post-crt").style.display = "flex"
    document.getElementById("Content").style.display = "flex"
    document.getElementById("vsContent").style.display = "none"
    document.getElementById("vsContent").innerHTML = ""
    document.getElementById("p123").style.display = "none"
    document.getElementById("butuba").style.display = "none"
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    for (let i = 0; i < bruhPost.length; i += 1) {
        if (bruhPost[i].Img == "") {
            document.getElementById("Content").insertAdjacentHTML("beforeend", `<div class="Post">
        <div class="Post-head">
            <img onclick="inspect('${bruhPost[i].User}')" style="border-radius: 50%;" src="${bruhPost[i].Icon}" alt="" id="Icon2">
            <div onclick="inspect('${bruhPost[i].User}')" class="Nickname"><p class="abc1">${bruhPost[i].User}</p></div>
        </div>
        <div class="Post-content">
            <div id="Time">${bruhPost[i].Hour}:${bruhPost[i].Minute} / ${bruhPost[i].Month}-${bruhPost[i].Day}-${bruhPost[i].Year}</div>
            <div class="Status"><p class="abc2">${bruhPost[i].Status}</p></div>
        </div>
    </div>`)
        }
        else {
            document.getElementById("Content").insertAdjacentHTML("beforeend", `<div class="Post">
        <div class="Post-head">
            <img onclick="inspect('${bruhPost[i].User}')" style="border-radius: 50%;" src="${bruhPost[i].Icon}" alt="" id="Icon2">
            <div onclick="inspect('${bruhPost[i].User}')" class="Nickname"><p class="abc1">${bruhPost[i].User}</p></div>
        </div>
        <div class="Post-content">
            <div id="Time">${bruhPost[i].Hour}:${bruhPost[i].Minute} / ${bruhPost[i].Month}-${bruhPost[i].Day}-${bruhPost[i].Year}</div>
            <div class="Status"><p class="abc2">${bruhPost[i].Status}</p></div>
            <img class="Status_img" src="${bruhPost[i].Img}" alt="">
        </div>
    </div>`)
        }
    }
}


function MyAccount() {
    const currentListPost = ListPost[USER.indexOf(currentUser.User)]
    c = false
    document.getElementById("Home").style.display = "none"
    document.getElementById("SignOut").style.display = "none"
    document.getElementById("vsContent").innerHTML = ""
    document.getElementById("Content").innerHTML = ""
    document.getElementById("Post-crt").style.display = "none"
    document.getElementById("Content").style.display = "none"
    document.getElementById("vsContent").style.display = "flex"
    document.getElementById("p123").style.display = "none"
    document.getElementById("butuba").style.display = "block"
    document.getElementById("butuba").style.position = "fixed"
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    if (currentListPost.length == 0) {
        document.getElementById("vsContent").insertAdjacentHTML("beforeend", "There is no post")
    }
    else {
        for (let i = 0; i < currentListPost.length; i += 1) {
            if (currentListPost[i].Img == "") {
                document.getElementById("vsContent").insertAdjacentHTML("beforeend", `<div class="Post">
            <div class="Post-head">
                <img style="border-radius: 50%;" src="${currentListPost[i].Icon}" alt="" id="Icon2">
                <div class="Nickname"><p class="abc1">${bruhPost[i].User}</p></div>
            </div>
            <div class="Post-content">
                <div id="Time">${currentListPost[i].Hour}:${currentListPost[i].Minute} / ${currentListPost[i].Month}-${currentListPost[i].Day}-${currentListPost[i].Year}</div>
                <div class="Status"><p class="abc2">${currentListPost[i].Status}</p></div>
            </div>
        </div>`)
            }
            else {
                document.getElementById("vsContent").insertAdjacentHTML("beforeend", `<div class="Post">
            <div class="Post-head">
                <img style="border-radius: 50%;" src="${currentListPost[i].Icon}" alt="" id="Icon2">
                <div class="Nickname"><p class="abc1">${currentListPost[i].User}</p></div>
            </div>
            <div class="Post-content">
                <div id="Time">${currentListPost[i].Hour}:${currentListPost[i].Minute} / ${currentListPost[i].Month}-${currentListPost[i].Day}-${currentListPost[i].Year}</div>
                <div class="Status"><p class="abc2">${currentListPost[i].Status}</p></div>
                <img class="Status_img" src="${currentListPost[i].Img}" alt="">
            </div>
        </div>`)
            }
        }
    }
}


function askfalfkalfkj() {
    if (c == true) {
        document.getElementById("Home").style.display = "none"
        document.getElementById("SignOut").style.display = "none"
        c = false
    }
    else {
        document.getElementById("Home").style.display = "flex"
        document.getElementById("SignOut").style.display = "flex"
        c = true
    }
}