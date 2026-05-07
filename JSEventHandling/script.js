function Bulb1ON(){
    document.getElementById("bulb1").style.backgroundColor = "yellow";
}

function Bulb1OFF(){
    document.getElementById("bulb1").style.backgroundColor = "white";
}

function Bulb1RED(){
    document.getElementById("bulb1").style.backgroundColor = "red";
}

function Bulb1GREEN(){
    document.getElementById("bulb1").style.backgroundColor = "green";
}

function Bulb1BLUE(){
    document.getElementById("bulb1").style.backgroundColor = "blue";
}

document.getElementById("bulb1Color").addEventListener("change" , changeBulbColor);


function changeBulbColor(){
   const color = document.getElementById("bulb1Color").value;
    document.getElementById("bulb1").style.background = color;
}

function reset(){
    window.location.reload();
}