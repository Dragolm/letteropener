debug = document.getElementById("debug");

flap = document.getElementById("flap");
letter = document.getElementById("letter");
envelope = document.getElementById("envelope");
envelope_container = document.getElementById("envelope-container")
envelope_back = document.getElementById("envelope-back")

document.getElementById("debug").onclick = async function(){
    // window.alert("pressed");
    flap.classList.add("flap-open");
    letter.classList.add("letter-lift");
    envelope.classList.add("env-act")
    
    // Source - https://stackoverflow.com/a
    // Posted by Dan Dascalescu, modified by community. See post 'Timeline' for change history
    // Retrieved 2026-01-08, License - CC BY-SA 4.0
    await new Promise(r => setTimeout(r, 1000));

    envelope.classList.add("falling");
    flap.classList.add("falling");
    // envelope_container.classList.add("falling");
    envelope_back.classList.add("falling");
    
    await new Promise(r => setTimeout(r, 1000));
    letter.classList.add("enlarge");
}