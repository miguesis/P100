var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var textBox = document.getElementById("textBox");
function start() {
    document.getElementById("textBox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function (event) {
    console.log(event);

    var content = event.results[0][0].transcript;
    document.getElementById("textBox").innerHTML = content;
if(content=="Tire minha selfie"){
    console.log("tirando selfie");
    speak();

}
    
}

function speak() {
    var synth = window.speechSynthesis;
    speakData = "tirando sua selfie em 5 segundos";
    var anterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(anterThis);
    Webcam.attach(camera);
    setTimeout(function(){
        takeSelfie();
        save();

    },5000);
}
camera = document.getElementById("camera");
Webcam.set({
    width: 360,
    height: 250,
    image_format: "png",
    png_quality: 90
});
function takeSelfie() {
    webcan.snap(function(data_uri){
        document.getElementById("result").innerHTML ='<img id="selfieImage" src="'+data_uri+'"/>'
    });
}
function save() {
    link=document.getElementById("link");
    image=document.getElementById("selfieImage").src;
    link.href=image;
    link.click();
}