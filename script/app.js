/* Data module */
const responsiveLinks = document.querySelector(".responsiveLinks");
const responsiveAllRequest = document.querySelector(".responsiveAllRequest");
const responsiveContactNames = document.querySelector(".responsiveContactNames");
const posts = document.querySelector(".posts");
const navbarProfilePicture = document.querySelector(".profilePicture");
const leftSideProfilePicture = document.querySelector(".profile");
const postInput = document.querySelector(".postInput");

const postsData = [
    {
        name : "Amanda Miles",
        profilePhoto: "pics/profile/profile1.jpg",
        text: "Quisque congue a tellus in interdum. Donec ac tristique magna. Proin quis sapien aliquam ex posuere eleifend. Nam scelerisque, urna euismod facilisis vestibulum.",
        photo: "pics/post/photo1.jpg",
        postTime: new Date("2022.04.10 10:32")
    },
    {
        name : "Melissa Byron",
        profilePhoto : "pics/contactProfile/profile2.jpg",
        text : "Quisque congue a tellus in interdum.Quisque congue a tellus in interdum.Quisque congue a tellus in interdum. Donec ac tristique magna. Proin quis sapien aliquam ex posuere eleifend. Nam scelerisque, urna euismod facilisis vestibulum.",
        photo : "pics/post/photo2.jpg",
        postTime : new Date("2022.04.9 5:32"), 
    }
]
const contacts = [
    {
        name: "Amanda Miles",
        photo: "pics/contactProfile/profile1.jpg"
    },
    {
        name: "Melissa Byrion",
        photo: "pics/contactProfile/profile2.jpg"
    },
    {
        name: "Billy Rosewood",
        photo: "pics/contactProfile/profile3.jpg"
    },
    {
        name: "Katty Monroe",
        photo: "pics/contactProfile/profile4.jpg"
    },
    {
        name: "Kurt Williamson",
        photo: "pics/contactProfile/profile5.jpg"
    }
]
const requests = [
    {
        name: "Tyler Barrows",
        photo: "pics/requestProfile/profile1.jpg"
    },
    {
        name: "Ronald Bezos",
        photo: "pics/requestProfile/profile2.jpg"
    }
]

/* ------------------------------------------------------- */
/* Functions */

/* Responsive Navbar */
document.querySelector(".responsiveNav").addEventListener("click", () =>{
    responsiveLinks.classList.toggle("toggle")
    responsiveLinks.classList.toggle("zIndex")

    responsiveAllRequest.classList.remove("toggle")
    responsiveContactNames.classList.remove("toggle")

    responsiveAllRequest.classList.remove("zIndex")
    responsiveContactNames.classList.remove("zIndex")

});
document.querySelector(".responsiveRequests").addEventListener("click", () =>{
    responsiveAllRequest.classList.toggle("toggle")
    responsiveAllRequest.classList.toggle("zIndex")

    responsiveContactNames.classList.remove("toggle")
    responsiveLinks.classList.remove("toggle")

    responsiveLinks.classList.remove("zIndex")
    responsiveContactNames.classList.remove("zIndex")
});
document.querySelector(".responsiveContacts").addEventListener("click", () =>{
    responsiveContactNames.classList.toggle("toggle")
    responsiveContactNames.classList.toggle("zIndex")

    responsiveLinks.classList.remove("toggle")
    responsiveAllRequest.classList.remove("toggle")

    responsiveAllRequest.classList.remove("zIndex")
    responsiveLinks.classList.remove("zIndex")
})

/* Profile picture */
function profilePictureOnload(){
    navbarProfilePicture.firstElementChild.src = postsData[0].profilePhoto;
    leftSideProfilePicture.firstElementChild.src = postsData[0].profilePhoto;
    postInput.firstElementChild.src = postsData[0].profilePhoto;
}
profilePictureOnload()

/* Posts */
function postsDataHTML(){
    posts.innerHTML = "";
    postsData.forEach(element => {
        posts.insertAdjacentHTML("afterbegin",
        `<div class="post">

        <div class="postTop">
            <div class="picAndName">
                <img src="${element.profilePhoto}">
                <div class="name">
                    <h4>${element.name}</h4>
                    <p>
                    ${element.postTime.getFullYear()}.${element.postTime.getMonth()+1}.${element.postTime.getDate()}
                    ${element.postTime.getHours()}:${element.postTime.getMinutes()}
                    </p>
                </div>
            </div>
            <i class="fa-solid fa-ellipsis dots" style="color: #bbc4cf;"></i>
        </div>

        <div class="postContent">
            <p>${element.text}</p>
            <div class="images">
            <img src="${element.photo}">
            </div>
        </div>
        <div class="line"></div>
        <div class="postBottom">
            <div class="like">
                <i class="fa-solid fa-thumbs-up emoji"></i>
                <p>Like</p>
            </div>
            <div class="comment">
                <i class="fa-solid fa-comments emoji"></i>
                <p>Comment</p>
            </div>
            <div class="share">
                <i class="fa-solid fa-share emoji"></i>
                <p>Share</p>
            </div>
        </div>
    </div>`)});
};
postsDataHTML()

document.querySelector(".postBtn").addEventListener("click", () =>{
    postsData.push({
        name : "Amanda Miles",
        profilePhoto : "pics/profile/profile1.jpg",
        text : document.querySelector(".textAreaText").value,
        photo : "",
        postTime : new Date()
    })
    postsDataHTML()
})

/* Contacts */
function contactsOnload(){
    document.querySelector(".contactNames").innerHTML = "";
    document.querySelector(".responsiveContactNames").innerHTML = "";
    contacts.forEach(element => {
        document.querySelector(".contactNames").insertAdjacentHTML("afterbegin",
        `<div class="contactName">
        <div class="nameAndimg">
           <img src=${element.photo}>
           <h4>${element.name}</h4>
       </div>
       <i class="fa-solid fa-ellipsis dots" style="color: #bbc4cf;"></i>
       </div>`
        )
        document.querySelector(".responsiveContactNames").insertAdjacentHTML("afterbegin",
        `<div class="contactName">
        <div class="nameAndimg">
           <img src=${element.photo}>
           <h4>${element.name}</h4>
       </div>
       <i class="fa-solid fa-ellipsis dots" style="color: #bbc4cf;"></i>
       </div>`
        )
    });
}
contactsOnload()

/* Requests */
function requestsOnload(){
    requests.forEach(element => {
        document.querySelector(".allRequest").insertAdjacentHTML("afterbegin",
        `
        <div class="requests">
                <div class="requestProfile">
                    <img src=${element.photo}>
                    <p><strong>${element.name}</strong> wants to add you to friend</p>
                </div>
                <div class="buttons">
                    <button class="btn accept requestBtn">Accept</button>
                    <button class="btn decline requestBtn">Decline</button>
                </div>
            </div>
        `
        )    
        document.querySelector(".responsiveAllRequest").insertAdjacentHTML("afterbegin",
        `
        <div class="requests">
                <div class="requestProfile">
                    <img src=${element.photo}>
                    <p><strong>${element.name}</strong> wants to add you to friend</p>
                </div>
                <div class="buttons">
                    <button class="btn accept requestBtn">Accept</button>
                    <button class="btn decline requestBtn">Decline</button>
                </div>
            </div>
        `
        ) 
    });
}
requestsOnload()

/* Add or remove requests */
const requestBtn = document.querySelectorAll(".requestBtn");
requestBtn.forEach(element => {
    element.addEventListener("click", () => {
        let reqProfileData = element.parentNode.parentNode.firstElementChild;
        contacts.push({name: reqProfileData.lastElementChild.firstElementChild.innerHTML, photo: reqProfileData.firstElementChild.src})
        element.parentNode.parentNode.remove()
        contactsOnload()
    })
})