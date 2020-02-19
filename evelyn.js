//data architecture
var data = {
    qnum:0,
    questions:[
        {
            title:"What is a question?",
            answer:"B",
            bgcolor:"yellow",
            img: "http://placekitten.com/100/100"
        },
        {
            title:"Is 5 bigger than 4?",
            answer:"Yes",
            bgcolor:"#ABC",
            img: "http://placekitten.com/200/200"
        },
        {
            title:"What is the color of a banana?",
            answer:"Yellow",
            bgcolor:"rgb(2,150,232)",
            img: "http://placekitten.com/300/300"
        },
        {
            title: "Are you gonna pass this course?",
            answer:"No",
            bgcolor: "pink",
            img: "http://placekitten.com/400/400"
        }
    ]
}
function Start(){
    document.querySelector("#h_q").innerText = data.questions[data.qnum].title;
    document.body.style.backgroundColor = data.questions[data.qnum].bgcolor;
    document.querySelector("#h_r").innerHTML = "<img src='"+data.questions[data.qnum].img+"' />";
}

function CheckAnswer(){
    var myImp = document.querySelector("#answer").value;
    console.log(myImp);

    if(myImp === data.questions[data.qnum].answer){
        // alert("correct!");
        document.querySelector("#h_r").innerHTML = "<h1>Correct!</h1>";

        data.qnum++;
        document.querySelector("#h_q").innerText = data.questions[data.qnum].title;
        document.body.style.backgroundColor = data.questions[data.qnum].bgcolor;
        document.querySelector("#h_r").innerHTML = "<img src='"+data.questions[data.qnum].img+"' />";
    } 
    else {
        // alert("WRONG!");
        document.querySelector("#h_r").innerText = "<h1>WRONG!</h1>";
    }
}
Start();

//short version

// var qnum = 0;

// var questions = [
//     "What is a question?",
//     "Is 5 bigger than 4?",
//     "What is the color of a banana?"
// ];
// var answers = [
//     "B",
//     "Yes",
//     "Yellow"
// ];
// var bgcolor = [
//     "yellow",
//     "#ABC",
//     "rbg(2,150,232)"
// ]
// var imgs = [
//     "http://placekitten.com/100/100",
//     "http://placekitten.com/200/200",
//     "http://placekitten.com/300/300"
// ]

// function CheckAnswer(){
//     var myImp = document.querySelector("#answer").value;
//     console.log(myImp);

//     if(myImp === answers[qnum]){
//         // alert("correct!");
//         document.querySelector("#h_r").innerHTML = "<h1>Correct!</h1>";

//         qnum++;
//         document.querySelector("#h_q").innerText = questions[qnum];
//     } 
//     else {
//         // alert("WRONG!");
//         document.querySelector("#h_r").innerText = "<h1>WRONG!</h1>";
//     }
// }

// longer version

// var answer = "B";
// var qnum = 1;
// function CheckAnswer(){
//     var myImp = document.querySelector("#answer").value;
//     console.log(myImp);

//     if(myImp === answer){
//         // alert("correct!");
//         document.querySelector("#h_r").innerHTML = "<h1>Correct!</h1>";

//         //changing the question to the next question
//         if (qnum === 1){
//             qnum++;
//             document.querySelector("#h_q").innerText = "Is 5 bigger than 4?";
//             answer = "Yes";
//         } else if (qnum === 2){
//             qnum++;
//             document.querySelector("#h_q").innerText = "are you a girl or boy?";
//             answer = "girl";
//         } 
//     } 
//     else {
//         // alert("WRONG!");
//         document.querySelector("#h_r").innerText = "<h1>WRONG!</h1>";
//     }
//     //If(???)
//     /*
//     check if what thet typed is equivalent to a string of your answer...
//     */
// }
