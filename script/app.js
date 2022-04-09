/* Data module */



/* Functions */
document.querySelector(".responsiveNav").addEventListener("click", () =>{
    document.querySelector(".responsiveLinks").classList.toggle("toggle")
    document.querySelector(".responsiveAllRequest").classList.remove("toggle")
    document.querySelector(".responsiveContactNames").classList.remove("toggle")
});
document.querySelector(".responsiveRequests").addEventListener("click", () =>{
    document.querySelector(".responsiveAllRequest").classList.toggle("toggle")
    document.querySelector(".responsiveContactNames").classList.remove("toggle")
    document.querySelector(".responsiveLinks").classList.remove("toggle")
});
document.querySelector(".responsiveContacts").addEventListener("click", () =>{
    document.querySelector(".responsiveContactNames").classList.toggle("toggle")
    document.querySelector(".responsiveLinks").classList.remove("toggle")
    document.querySelector(".responsiveAllRequest").classList.remove("toggle")
})