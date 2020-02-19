function checkAnswer(){
    var inp = document.querySelector("#answer").value;
    console.log(inp)
    if (inp === "B" || inp === "b"){
    alert("Correct!")
    } else {
        alert("Wrong!")
    }
}