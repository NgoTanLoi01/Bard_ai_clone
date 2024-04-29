var bTextToSpeechSupported = false;
var bSpeechInProgress = false;
var oSpeechRecognizer = null
var oSpeechSynthesisUtterance = null;
var oVoices = null;

function OnLoad() {
//Load Data from Chat Charater JSON to Select
         //Load Voice 
             if ("webkitSpeechRecognition" in window) {
    } else {
        //speech to text not supported
        lblSpeak.style.display = "none";
    }
    if ('speechSynthesis' in window) {
        bTextToSpeechSupported = true;
        speechSynthesis.onvoiceschanged = function () {
            oVoices = window.speechSynthesis.getVoices();
            for (var i = 0; i < oVoices.length; i++) {
                selVoices[selVoices.length] = new Option(oVoices[i].name, i);
            }
        };
    }
}
function TextToSpeech(s) {
    if (bTextToSpeechSupported == false) return;
    oSpeechSynthesisUtterance = new SpeechSynthesisUtterance();
    if (oVoices) {
        var sVoice = selVoices.value;
        if (sVoice != "") {
            oSpeechSynthesisUtterance.voice = oVoices[parseInt(sVoice)];
        }
    }
    oSpeechSynthesisUtterance.onend = function () {
        //finished talking - can now listen
        if (oSpeechRecognizer && chkSpeak.checked) {
            oSpeechRecognizer.start();
        }
    }
    if (oSpeechRecognizer && chkSpeak.checked) {
        //do not listen to yourself when talking
        oSpeechRecognizer.stop();
    }
    oSpeechSynthesisUtterance.lang = "en-US";
    oSpeechSynthesisUtterance.text = s;
    //Uncaught (in promise) Error: A listener indicated an 
    //asynchronous response by returning true, but the message channel closed 
    window.speechSynthesis.speak(oSpeechSynthesisUtterance);
}
//function ply(button){
//	 $div = button.parent("p");
//    text = $div.find("span").text();
//    console.log('xx');
//          }
$(document).ready(function(){
$(document).on("click", ".play", function(e){
 $div = $(this).parent("p");
 id = $(this).attr("vall");
    text = $div.find("span").text();
    console.log(id);
    TextToSpeech(id);
});
});
