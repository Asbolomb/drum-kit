const Boomhit = document.getElementById("boom");
const Claphit = document.getElementById("clap");
const Hihathit = document.getElementById("hihat");
const Kickhit = document.getElementById("kick");
const Openhathit = document.getElementById("openhat");
const Ridehit = document.getElementById("ride");
const Snarehit = document.getElementById("snare");
const Tinkhit = document.getElementById("tink");
const Tomhit = document.getElementById("tom");

document.addEventListener("keypress", (event) => {
    if(event.key == "g"|| event.key == "G") {
		Boomhit.src = "sounds/boom.wav"};
}) 

