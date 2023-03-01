
let currentYear = new Date();
let yr = currentYear.getFullYear();

document.querySelector(".year").innerText = yr;

let hamburger = $(".hamburger");
let menu = $(".item_right .navigation_bar ul");
let menuOverlay = $(".mobile_overlay");
let closeMenu = $(".close_menu");
hamburger.on("click", () => {
    menuToggle();
});
menuOverlay.on("click", () => {
    menuToggle();
});
closeMenu.on("click", () => {
    menuToggle();
});

function menuToggle() {
    menuOverlay.toggleClass("active-nav");
    menu.toggleClass("active-nav");
}
var dob = new Date("08/24/2002");  

var month_diff = Date.now() - dob.getTime();  
  

var age_dt = new Date(month_diff);   
  

var year = age_dt.getUTCFullYear();  
  

var age = Math.abs(year - 1970);  


document.querySelector(".age").innerText = age;