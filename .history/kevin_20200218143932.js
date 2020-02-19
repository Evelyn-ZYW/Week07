var answer = "b";
var qnum = 1;

function checkAnswer(){
    var inp = document.querySelector("#answer").value;
    console.log(inp)
    if (inp === answer){
    // alert("Correct!")
    document.querySelector("#result").innerHTML = "<h1> Correct! </h!>";

    // changing from Q1 to Q2 
    document.querySelector("#question").innerText = "Is 5 bigger than 4?";
    answer = "yes";
    } else {
        // alert("Wrong!")
        document.querySelector("#result").innerHTML = "<h1> Wrong! </h!>"
    }
}
