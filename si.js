Webcam.set({
    width:400,height:300,image_format:"png",png_quality:90
})
var si= document.getElementById("si")
Webcam.attach(si);   
function si1(){
    Webcam.snap(function(data_uri) { document.getElementById("no").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>'; });
}
console.log("ml5");
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/J8gwQKNkI/model.json", engrapadora)
function engrapadora(){
    console.log(cargado);
}
function no2(){
    var hamsters=document.getElementById("captured_image");
    classifier.classify(hamsters, famosa_funcion_para_mostrar_el_resultado);
}
function famosa_funcion_para_mostrar_el_resultado(error,results){
if (error) {
    console.log(error);
} else {
    console.log(results);
    document.getElementById("si1").innerHTML=results[0].label;
    document.getElementById("no2").innerHTML=results[0].confidence;
}
}