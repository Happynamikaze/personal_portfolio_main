
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

if (document.querySelector(".age")){

    document.querySelector(".age").innerText = age;
}

options = {
    "outerStyle": "circle-basic",
    "hoverEffect": "pointer-blur",
    "hoverItemMove": false,
    "defaultCursor": false,
    "outerWidth": 35,
    "outerHeight": 35,
    
  }; 
   magicMouse(options);


//    $(window).on('load', function(){
//     setTimeout(removeLoader, 2000); //wait for page load PLUS two seconds.
//   });
//   function removeLoader(){
//       $( "#loader" ).fadeOut(500, function() {
//         // fadeOut complete. Remove the loading div
//         $( "#loader" ).remove(); //makes page more lightweight 
//     });  
//   }

//   $(window).on('load', function(){
//     setTimeout(ShowSite, 2000); //wait for page load PLUS two seconds.
//   });
//   function ShowSite(){
//       $( "#after-loder-show" ).fadeIn(500, function() {
//         // fadeOut complete. Remove the loading div
//         $( "#after-loder-show" ).remove(); //makes page more lightweight 
//     });  
//   }const videos = document.querySelectorAll("video")



// Listening to the video element
let clip = document.querySelector(".vid")

/* Adding the event listeners on the video to play/pause the video. */
clip.addEventListener("mouseover", function (e) {
   clip.play();
})

/* Applying the mouse out event to pause the video */
clip.addEventListener("mouseout", function (e) {
   clip.pause();
})
