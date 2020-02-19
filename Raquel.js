var data = {
    qnum:0,//state of the interface
    questions:[
        {
            title:"What Comes After A?",
            answer:"B",
            bgcolor:"yellow",
            img:"http://placekitten.com/100/100"
        },
        {
            title:"Is 5 bigger than 4?",
            answer:"Yes",
            bgcolor:"#ABC",
            img:"http://placekitten.com/200/200"
        },
        {
            title:"What is the color of a banana?",
            answer:"yellow",
            bgcolor:"rgb(2,150,232)",
            img:"http://placekitten.com/300/300"
        },
        {
            title:"What is your favorite class?",
            answer:"henry's",
            bgcolor:"#cdb",
            img:"http://placekitten.com/200/300"
        }
    ]
}
//var answer = "B";
console.log(data, window);
var qnum = 0;

var questions = [
    "what Comes After A?",
    "Is 5 bigger than 4?",
    "what is the color of a banana?"
];

var answers = [
    "B",
    "Yes",
    "Yellow"
];
var bgcolor = [
    "yellow",
    "#ABC",
    "rgb(2,150,232)"
]

var imgs = [
    "http://placekitten.com/200/300",
    "http://placekitten.com/300/300",
    'http://placekitten.com/100/100'

]

function Start(){
    document.querySelector("#h_q").innerText = data.questions[data.qnum].title;
    document.body.style.backgroundColor = data.questions[data.qnum].bgcolor;
    document.querySelector("#h_r").innerHTML = "<img src='"+data.questions[data.qnum].img+"' />"
}

function CheckAnswer(){
    var myInp = document.querySelector("#answer").value;
    console.log(myInp)

    if(myInp === data.questions[data.qnum].answer){
        //alert("Correct!");
        document.querySelector("#h_r").innerHTML =  "<h1>Correct!</h1>";

        data.qnum++;
        document.querySelector("#h_q").innerText = data.questions[data.qnum].title;
        document.body.style.backgroundColor = data.questions[data.qnum].bgcolor;
        document.querySelector("#h_r").innerHTML = "<img src='"+data.questions[data.qnum].img+"' />";
    }
        // changing the question to the next question
       /* if(qnum === 1){
        qnum++;
        document.querySelector("#h_q").innerText = "Is 5 bigger than 4?";
        answer = "Yes";
    }else if(qnum === 2){
        qnum++;//qnum+1
        document.querySelector("#h_q").innerText = "What is the color of a banana?";
        answer = "Yellow";
    }
    
}*/ 
else{
        //alert("WRONG!");
        document.querySelector("#h_r").innerText =  "<h1>WRONG!</h1>";
    }
    //if(???)
    /*
    check if what they typed is equicalent tp a string of your answer...
    */

    }
    Start();