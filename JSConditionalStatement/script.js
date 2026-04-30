// question no.2
let age = 20;
if (age > 0 && age <= 20) {
  console.log("You can vote");
} else {
  console.log("you cannot vote");
}

// question no.6
let A = 76;
if (A > 90) {
  console.log("A");
} else if (A > 75 && A < 90) {
  console.log("B");
} else if (A > 50 && A < 75) {
  console.log("C");
} else {
  console.log("Fail");
}

let data;
let name = "Satyanshu";

// if(name){
//     data=name;
// }else{
//     data="N/A";
// }

data = name || "N/A";
console.log(data);


// Switch case
let choice = 1;
switch(choice){
    case 1:{
        console.log("Tea");
        break;
    }
    case 2:{
        console.log("Coffie");
        break;
    }
    case 3:{
        console.log("Lassi");
        break;
    }
    default:{
        console.log("Paani");
    }
}