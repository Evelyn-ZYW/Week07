function checkAnswer(){
    var inp = document.querySelector("#answer").value;
    console.log(inp)
    if (inp === "B" ){
    alert("Correct!")
    } else {
        alert("Wrong!")
    }
}