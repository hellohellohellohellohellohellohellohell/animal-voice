function startClassification9
{
    nacigator.mediaDeveces.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/nhBAnJBwu/model.json', modelReady)
}

function modelReady(){
    classifier.classify(gotResults);
}