/* Data module */
const responsiveLinks = document.querySelector(".responsiveLinks");
const responsiveAllRequest = document.querySelector(".responsiveAllRequest");
const responsiveContactNames = document.querySelector(".responsiveContactNames");
const posts = document.querySelector(".posts");

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

/* Functions */

/* Responsive Navbar */
document.querySelector(".responsiveNav").addEventListener("click", () =>{
    responsiveLinks.classList.toggle("toggle")
    responsiveAllRequest.classList.remove("toggle")
    responsiveContactNames.classList.remove("toggle")
});
document.querySelector(".responsiveRequests").addEventListener("click", () =>{
    responsiveAllRequest.classList.toggle("toggle")
    responsiveContactNames.classList.remove("toggle")
    responsiveLinks.classList.remove("toggle")
});
document.querySelector(".responsiveContacts").addEventListener("click", () =>{
    responsiveContactNames.classList.toggle("toggle")
    responsiveLinks.classList.remove("toggle")
    responsiveAllRequest.classList.remove("toggle")
})


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