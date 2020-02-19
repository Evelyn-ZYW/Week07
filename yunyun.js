var answer ="purple";

var data ={
    qnum: 0,
    questions:[
        {
            title: "Red+Blue=?",
            answer: "purple",
            bgcolor: "purple",
            img: "http://placekitten.com/200/300"
        },
        {
            title: "Yellow+Red=?",
            answer: "orange",
            bgcolor: "orange",
            img: "http://placekitten.com/100/300"
        },
        {
            title: "Yellow+Blue=?",
            answer: "green",
            bgcolor: "green",
            img: "http://placekitten.com/300/300"
        }
    ]
}
var qnum = 0;

var questions = [
    "Red+Blue=?",
    "Yellow+Red=?",
    "Yellow+Blue=?"
];
var answers = [
    "purple",
    "orange",
    "green"
];
var bgcolor = [
    "purple",
    "orange",
    "green"
];
var img = [
    "http://placekitten.com/200/300",
    "http://placekitten.com/100/300",
    "http://placekitten.com/300/300"
];

function Start(){
    document.querySelector("#question").innerText = data.questions[data.qnum].title;
        document.body.style.backgroundColor = data.questions[data.qnum].bgcolor;
        document.querySelector("#popup").innerHTML = "<img src= '"+data.questions[data.qnum].img+ "' />"
}

function checkAnswer(){
    var input = document.querySelector("#answer").value;
    console.log(input);
    
    if(input === data.questions[data.qnum].answer){
        document.querySelector("#popup").innerHTML = "<h1>correct!</h1>";

        data.qnum++;
        document.querySelector("#question").innerText = data.questions[data.qnum].title;
        document.body.style.backgroundColor = data.questions[data.qnum].bgcolor;
        document.querySelector("#popup").innerHTML = "<img src= '"+data.questions[data.qnum].img+ "' />"
    }
// function checkAnswer(){
//     var input = document.querySelector("#answer").value;
//     console.log(input);

//     if (input === answers[qnum]){
//         document.querySelector("#popup").innerHTML = "<h1>correct!</h1>";
//         qnum++;
//         document.querySelector("#question").innerHTML = questions[qnum];
//     }

    // if(input === answer){
    //     //alert("correct!");
    //     document.querySelector("#popup").innerHTML = "<h1>correct!</h1>";

    //     if(qnum === 1){
    //         qnum++;
    //         document.querySelector("#question").innerText = "Yellow+Red=?";
    //         answer= "orange";
    //     } else if(qnum === 2){
    //         qnum++;
    //         document.querySelector("#question").innerText = "Yellow+Blue=?";
    //         answer= "green";
    //     }

    else {         
        // alert("wrong");
        document.querySelector("#popup").innerHTML = "<h1>incorrect!</h1>";

    }

}

Start();