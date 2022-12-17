var SpeechRecognition = window.webkitSpeechRecognition;
var recognition=new SpeechRecognition;
function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var Content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=Content;
    if(Content=="take my selfie"){
        speak();        
    }
}

function speak(){
   var synth=window.speechSynthesis;
    voices=window.speechSynthesis.getVoices();
    console.log(voices);
   Webcam.attach(camera);
   setTimeout(function(){
    img_id="selfie1";
    take_snapshot();
    speak_data="ok , As your Wish Selfie coming in the next 5 seconds";
    utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
save();
   },5000);
   setTimeout(function(){
    img_id="selfie2";
    take_snapshot();
    speak_data="ok , As your Wish Selfie coming in the next 10 seconds";
    utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    save();
       },10000);
       setTimeout(function(){
        img_id="selfie3";
    take_snapshot();
    speak_data="ok , As your Wish Selfie coming in the next 15 seconds";
    utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
        save();
           },15000);
}
Webcam.set({
    width:350,
    height:250,
    image_format:'png',
    png_quality:90
})
var camera = document.getElementById("camera");
function take_snapshot(){
    Webcam.snap(function(data_url){
        if(img_id=="selfie1"){
            document.getElementById("result1").innerHTML="<img id='selfie1' src='"+data_url+"'>"   
        }
        if(img_id=="selfie2"){
            document.getElementById("result2").innerHTML="<img id='selfie2' src='"+data_url+"'>"
        }
        if(img_id=="selfie3"){
            document.getElementById("result3").innerHTML="<img id='selfie3' src='"+data_url+"'>"
        }
    });
}
function save(){
   var link=document.getElementById("link");
   var image=document.getElementById("selfie_image").src;
   link.href=image;
   link.click();
}