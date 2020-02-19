function checkAnswer(){
    var inp = document.querySelector("#answer").nodeValue;
    console.log(inp)
    if (inp === "B" ){
    alert("Correct!")
    } else {
        alert("Wrong!")
    }
}