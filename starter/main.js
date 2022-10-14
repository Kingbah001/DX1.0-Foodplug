


//ES5
// console.log("send me your account number")
// var writeup = "i'm hungry"
// alert(writeup)
// console.log(hamburgerdiv)
// console.log(document)

var hamburgerdiv = document.querySelector(".hamburger");
var mobileLinks = document.querySelector(".mobile-link-holder")
var mybackdrop = document.querySelector(".backdrop")

function dosomething (){
    hamburgerdiv.classList.toggle("showburger")
    mobileLinks.classList.toggle("show-mobile-link-holder")
    mybackdrop.classList.toggle("show-backdrop")
}