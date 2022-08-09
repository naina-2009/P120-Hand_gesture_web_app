prediction_1 = "";
prediction_2 = "";

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    image_quality: 90
});

camera = document.getElementById("camera");
Webcam.attach(camera);

function take_snapshot()
{
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML = "<img id='captured_image' src='"+data_uri+"' />"
    });
}

console.log('ml5.version', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/5mxzZHkpx/model.json',modelLoaded);

function modelLoaded()
{
    console.log("Model Loaded Successfully!");
}

function speak()
{
    var synth = window.speakSynthesis;
    speak_data = "The first prediction of our trained model is " + prediction_1;
    speak_data_2 = "The second prediction of our trained model is " + prediction_2;
    var utter = new speakSynthesisUtterance(speak_data + speak_data_2);
    synth.speak(utter);
}