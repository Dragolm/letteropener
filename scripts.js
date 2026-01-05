debug = document.getElementById("debug");

flap = document.getElementById("flap");
letter = document.getElementById("letter");
envelope = document.getElementById("envelope");

document.getElementById("debug").onclick = function(){
    // window.alert("pressed");
    flap.classList.add("flap-open");
    letter.classList.add("letter-lift");
    envelope.classList.add("env-act")
}