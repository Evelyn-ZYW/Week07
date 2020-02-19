var answer = "b";
var qnum = 1;
var questions = [
    "what comes after A?",
    "Is 5 bigger than 4?",
    "What is the color of a banana?"
];

var answers = [
    "b",
    "yes",
    "yellow"
];





function checkAnswer(){
    var inp = document.querySelector("#answer").value;
    console.log(inp)
    if (inp === answer){
    // alert("Correct!")
    document.querySelector("#result").innerHTML = "<h1> Correct! </h!>";

    // changing from Q1 to Q2 
    if(qnum === 1){
        qnum ++;
        document.querySelector("#question").innerText = "Is 5 bigger than 4?";
        answer = "yes";
    } else if (qnum === 2){
        qnum++;
        document.querySelector("#question").innerText = "What is the color of a banana?";
        answer = "yellow";
    } else {
        // alert("Wrong!")
        document.querySelector("#result").innerHTML = "<h1> Wrong! </h!>"
    }
}
}

