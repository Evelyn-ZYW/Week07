function checkAnswer(){
    var inp = document.querySelector("#answer").value;
    console.log(inp)
    if (inp === "B" || inp === "b"){
    // alert("Correct!")
    document.querySelector("#result").innerHTML = "<h1> Correct! </h!>"
    } else {
        // alert("Wrong!")
        document.querySelector("#result").innerText = "Wrong!"

    }
}