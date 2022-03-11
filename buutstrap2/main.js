let bookOpenNav = document.querySelector(".book-open-btn")
let bookClossNav = document.querySelector(".book-colose")
let menuBar= document.querySelector(".menu-bar")


bookClossNav.onclick=()=>{
    menuBar.classList.toggle("active")
    bookOpenNav.classList.toggle("active")
    bookClossNav.classList.toggle("active")
}
bookOpenNav.onclick=()=>{
    menuBar.classList.toggle("active")
    bookOpenNav.classList.toggle("active")
    bookClossNav.classList.toggle("active")
}