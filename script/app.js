/* Data module */
const responsiveLinks = document.querySelector(".responsiveLinks");
const responsiveAllRequest = document.querySelector(".responsiveAllRequest");
const responsiveContactNames = document.querySelector(".responsiveContactNames");

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