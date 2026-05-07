document.getElementById("fristin").addEventListener("change" , fristin1);


function fristin1(){
   const color = document.getElementById("fristin").value;
    document.getElementById("leftdiv").style.background = color;
}


document.getElementById("headingColor").addEventListener("change" , heading1);


function heading1(){
   const color = document.getElementById("headingColor").value;
    document.getElementById("heading").style.color = color;
}

document.getElementById("para").addEventListener("change" , heading2);


function heading2(){
   const color = document.getElementById("para").value;
    document.getElementById("Paragraph").style.color = color;
}

function reset(){
    window.location.reload();
}