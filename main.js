Webcam.set({
    width:400,
    height:300,
    image_format:"png",
    png_quality:100
});

Webcam.attach("#webcam_div");

function take_snapshot(){
 Webcam.snap(function (Image_uri) {
     document.getElementById("output_div").innerHTML='<img id="selfie" src="'+Image_uri+'">';
 });
}

console.log(ml5.version);

 var myModel=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/MhoUV3fdY/model.json",modelLoaded);

function modelLoaded(){
     console.log("Your model is loaded");
 }





 function check() {
    var snap= document.getElementById("selfie");
    myModel.classify(snap, giveResult)


 function giveResult(errorArray, resultsArray){
    if (errorArray) {
        console.error(errorArray);
    }
    else{
     console.log(resultsArray);
     document.getElementById("objectName").innerHTML=resultsArray[0].label;
     document.getElementById("objectAccuracy").innerHTML=resultsArray[0].confidence*100;
    }
}    }