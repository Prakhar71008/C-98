var speechRecognition=window.webkitSpeechRecognition;

var recognition=new speechRecognition();
console.log(recognition);
function start()
{
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult = function (event){
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
}


