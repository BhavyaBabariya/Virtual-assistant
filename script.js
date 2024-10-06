let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice");

function speak(text) {
    let speech = new SpeechSynthesisUtterance(text);
    speech.rate = 1;
    speech.pitch = 1;
    speech.volume = 1;
    speech.lang = "gu-IN";
    window.speechSynthesis.speak(speech);
}

function wishMe() {
    let day = new Date();
    let hours = day.getHours();
    if (hours >= 0 && hours < 12) {
        speak("Namaste Good Morning Sir");
    } else if (hours >= 12 && hours < 16) {
        speak("Namaste Good Afternoon Sir");
    } else {
        speak("Namaste Good Evening Sir");
    }
}

window.addEventListener('load',()=>{
     wishMe();
})

let speechRecognation = window.SpeechRecognition || window.webkitSpeechRecognition
let recognation = new speechRecognation()
recognation.onresult = (e) => {
    let current = e.resultIndex;
    let transcript = e.results[current][0].transcript
    content.innerText = transcript
    takeCommand(transcript.toLowerCase())
}
btn.addEventListener("click",()=>{
    recognation.start()
    btn.style.display = "none"
    voice.style.display = "block"
})

function takeCommand(message){
    btn.style.display = "flex"
    voice.style.display = "none"
       if(message.includes("hello") || message.includes("hey")){
        speak("hello sir, what can i help you?");
       } 
       else if(message.includes("who are you") || message.includes("hu r u")){
        speak("I am virtual assistant, created by Bhavya Sir")
       }
       else if(message.includes("how are you") || message.includes("how r u")){
        speak("I am good, What can i help you Sir")
       }
       else if(message.includes("open youtube")){
        speak("opening youtube....");
        window.open("https://www.youtube.com/")
       }
       else if(message.includes("open google")){
        speak("opening google....");
        window.open("https://www.google.com/")
       }
       else if(message.includes("open instagram")){
        speak("opening instagram....");
        window.open("https://www.instagram.com/")
       }
       else if(message.includes("open facebook")){
        speak("opening facebook");
        window.open("https://www.facebook.com/")
       }
       else if(message.includes("open calculator")){
        speak("opening calculator");
        window.open("calculator://")
       }
       else if(message.includes("time")){
        speak(new Date().toLocaleTimeString())
       }
       else if(message.includes("date")){
        speak(new Date().toLocaleDateString())
       }
       else{
        let final_text = "this is what i found on internet regarding" + message.replace("bhavya","")
        speak(final_text)
        window.open(`https://www.google.com/search?q=${message.replace("bhavya","")}`,"_blank")
       }
}
