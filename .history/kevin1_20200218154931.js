var data = {
    qnum:0,
    questions:[
        {
            title:"What comes after A?",
            answer:"b",
            bgcolor:"yellow",
            img:"https://placekitten.com/100/100"

        },
        {
            title:"Is 5 bigger than 4",
            answer:"yes",
            bgcolor:"#ABC",
            img:"https://placekitten.com/200/200"
        },
        {
            title:"What is the color of a banana?",
            answer:"yellow",
            bgcolor:"rgb(2,150,222)",
            img:"https://placekitten.com/300/300"
        },
        {
            title:"What is the meaning of life?",
            answer:"hehexD",
            bgcolor:"rgb(42,88,111)",
            img:"https://placekitten.com/400/400"
        }
    ]
}

function start(){
    document.querySelector("#question").innerText = data.questions[data.qnum].title;
    document.body.style.backgroundColor = data.questions[data.qnum].bgcolor;
    document.querySelector("#result").innerHTML = "<img src='" + data.questions[data.qnum].img+"' />";
}

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

    if (inp === data.questions[data.qnum].answer){
    document.querySelector("#result").innerHTML = "<h1> Correct! </h!>";

    data.qnum++;
    document.querySelector("#question").innerText = data.questions[data.qnum].title;
    document.body.style.backgroundColor = data.questions[data.qnum].bgcolor;
    document.querySelector("#result").innerHTML = "<img src='" + data.questions[data.qnum].img+"' />";

    } else {
        // alert("Wrong!")
        document.querySelector("#result").innerHTML = "<h1> Wrong! </h!>"
    }
}


start();