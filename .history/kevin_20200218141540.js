function checkAnswer{
    var inp = document.querySelector("#answer").nodeValue;
    if (inp == "B" || inp == "b"){
    alert("Correct!")
    } else {
        alert("Wrong!")
    }
}