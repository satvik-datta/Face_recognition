function startclassification() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier('', modelLoaded);
}

function modelReady() {
    classifier.classify(gotResults);
}