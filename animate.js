// GSAP Timeline
const timeline = gsap.timeline();

// Variables
var countup = document.getElementById("countup");
const enterBtn = document.getElementById("enter-btn");
const interlude = document.getElementById("interlude");
const video = document.getElementById("video");
const socials = document.getElementById("socials");

// Step 1: White screen delay
timeline.set("body", { background: "var(--white)" })
    .to({}, { duration: 1 });

// Step 2: Count-up animation
// let timer = 0;
// const timerInterval = setInterval(() => {
//     if (timer >= 5) clearInterval(timerInterval); // Stop after 5 seconds
//     countup.textContent = ++timer;
// }, 1000);

timeline.to("#countup", { opacity: 1, duration: 0.5 });

// Step 3: Move countup down and fade-in button
timeline.to("#countup", { y: "200px", duration: 1 })
    .to("#enter-btn", { opacity: 1, duration: 0.5 });

// Step 4: On button click, transition to Interlude
enterBtn.addEventListener("click", () => {
    gsap.timeline()
        .to("#countup, #enter-btn", { opacity: 0, duration: 0.5 })
        .to("#interlude", { opacity: 1, duration: 1 })
        .to("#interlude", { opacity: 0, duration: 1 })
        .to("#video", { opacity: 1, duration: 1, onStart: () => video.play() });
});

// Step 5: After video ends, show socials
video.addEventListener("ended", () => {

    gsap.timeline()
        .to("#video", { opacity: 0, duration: 1 })
        .to("#socials", { opacity: 1, duration: 1 });
    document.body.style.overflow = "auto"; // Enable scrolling
});