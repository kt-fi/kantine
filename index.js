
var result = document.getElementById("resultBar");
result= 0;



document.getElementById("one").addEventListener("click", function(){
    document.getElementById("resultBar").innerHTML = result + 1;
    result = result + 1;
});

document.getElementById("two").addEventListener("click", function(){
    document.getElementById("resultBar").innerHTML = result + 2;
    result = result + 2;
});

document.getElementById("three").addEventListener("click", function(){
    document.getElementById("resultBar").innerHTML = result + 3;
    result = result + 3;
});

document.getElementById("four").addEventListener("click", function(){
    document.getElementById("resultBar").innerHTML = result + 4;
    result = result + 4;
});

document.getElementById("five").addEventListener("click", function(){
    document.getElementById("resultBar").innerHTML = result + 5;
    result = result + 5;
});

document.getElementById("six").addEventListener("click", function(){
    document.getElementById("resultBar").innerHTML = result + 6;
    result = result + 6;
});

document.getElementById("seven").addEventListener("click", function(){
    document.getElementById("resultBar").innerHTML = result + 7;
    result = result + 7;
});

document.getElementById("eight").addEventListener("click", function(){
    document.getElementById("resultBar").innerHTML = result + 8;
    result = result + 8;
});

document.getElementById("nine").addEventListener("click", function(){
    document.getElementById("resultBar").innerHTML = result + 9;
    result = result + 9;
});

document.getElementById("clear").addEventListener("click", function(){
    document.getElementById("resultBar").innerHTML = 0;
    result = 0;
});