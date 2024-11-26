// GSAP Timeline
const timeline = gsap.timeline();

// Variables
// var countup = document.getElementById("countup");
const enterBtn = document.getElementById("enter-btn");
// const interlude = document.getElementById("interlude");
// const video = document.getElementById("video");
// const socials = document.getElementById("socials");

var debug = false;
var debugDuration = 0.5;

// Step 1: White screen delay
timeline.set("body", { background: "var(--white)" })
    .to({}, { duration: debug ? debugDuration : 3 });

timeline.to("#countup", { opacity: 1, duration: debug ? debugDuration : 8 });

// Step 3: Move countup down and fade-in button
timeline.to("#countup", { y: "250px", duration: debug ? debugDuration : 3 /*8*/ })
    .to("#enter-btn", { opacity: 1, duration: debug ? debugDuration : 1 });

// Step 4: On button click, transition to Interlude, then the site
const tl = gsap.timeline();
enterBtn.addEventListener("click", () => {
    tl
        .to("#countup", {
            opacity: 0, duration: debug ? debugDuration : 2, onComplete: () => {
                enterBtn.remove();
            }
        })
        .to("#countup", { y: "-200px" })
        .to("#interlude", { opacity: 1, duration: debug ? debugDuration : 1 });

    jQuery("#countup").detach().appendTo('#end');

    tl
        .to("#interlude", {
            opacity: 0, duration: debug ? debugDuration : 1,
            onComplete: () => letScroll()
        })
        .to("#interlude", {
            opacity: 1, duration: debug ? debugDuration : 1
        })
        ;

    tl
        .to("#countup", { opacity: 1, duration: debug ? debugDuration : 2 })
        .to(".main", { clearProps: "all", duration: debug ? debugDuration : 2 })
        ;

    // Show everything
    tl
        .to("#introduction", { opacity: 1, duration: debug ? debugDuration : 1 })
        .to("#pictures", { opacity: 1, duration: debug ? debugDuration : 1 })
        .to("#socials", { opacity: 1, duration: debug ? debugDuration : 1 })
        .to("#trailer", { opacity: 1, duration: debug ? debugDuration : 1 })
        .to("#video", { opacity: 1, duration: debug ? debugDuration : 1 /*, onStart: () => video.play() */ })
        .to("#credits", { opacity: 1, duration: debug ? debugDuration : 1 })
        .to("#containerEnd, #antonio", { opacity: 1, duration: debug ? debugDuration : 1 });
});



function letScroll() {
    document.querySelectorAll(".abs-cent").forEach(el => { el.className = ""; });
    document.querySelector(".main").classList.remove("height");
    document.body.style.overflow = "auto"; // Enable scrolling
}