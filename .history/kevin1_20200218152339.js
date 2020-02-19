var answer = "b";
var qnum = 0;
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

var bgcolor = [
    "yellow",
    "#ABC",
    "rgb(2,150,222)"
]

var imgs = [
    "httml://placekitten.com/100/100",
    "httml://placekitten.com/100/200",
    "httml://placekitten.com/100/300"
]



function checkAnswer(){
    var inp = document.querySelector("#answer").value;
    console.log(inp)

    if (inp === answers[qnum]){
    document.querySelector("#result").innerHTML = "<h1> Correct! </h!>";

    qnum++;
    document.querySelector("#question").innerText = questions[qnum];


    } else {
        // alert("Wrong!")
        document.querySelector("#result").innerHTML = "<h1> Wrong! </h!>"
    }
}


