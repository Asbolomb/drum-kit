const Boomhit = document.getElementById("boomhit");
const Claphit = document.getElementById("claphit");
const Hihathit = document.getElementById("hihathit");
const Kickhit = document.getElementById("kickhit");
const Openhathit = document.getElementById("openhathit");
const Ridehit = document.getElementById("ridehit");
const Snarehit = document.getElementById("snarehit");
const Tinkhit = document.getElementById("tinkhit");
const Tomhit = document.getElementById("tomhit");

document.addEventListener("keypress", (event) => {
    if(event.key == "a"|| event.key == "A") {
		Boomhit.src = "sounds/boom.wav"};
});

document.addEventListener("keypress", (event) => {
    if(event.key == "s"|| event.key == "S") {
		Claphit.src = "sounds/clap.wav"};
});

document.addEventListener("keypress", (event) => {
    if(event.key == "d"|| event.key == "D") {
		Hihathit.src = "sounds/hihat.wav"};
});

document.addEventListener("keypress", (event) => {
    if(event.key == "f"|| event.key == "F") {
		Kickhit.src = "sounds/kick.wav"};
});

document.addEventListener("keypress", (event) => {
    if(event.key == "g"|| event.key == "G") {
		Openhathit.src = "sounds/openhat.wav"};
});

document.addEventListener("keypress", (event) => {
    if(event.key == "h"|| event.key == "H") {
		Ridehit.src = "sounds/ride.wav"};
});

document.addEventListener("keypress", (event) => {
    if(event.key == "j"|| event.key == "J") {
		Snarehit.src = "sounds/snare.wav"};
});

document.addEventListener("keypress", (event) => {
    if(event.key == "k"|| event.key == "K") {
		Tinkhit.src = "sounds/tink.wav"};
});

document.addEventListener("keypress", (event) => {
    if(event.key == "l"|| event.key == "L") {
		Tomhit.src = "sounds/tom.wav"};
});


