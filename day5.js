//if and else-if condition

let num1 = 1+2+3;

let num2 = 3+3+1;
if(num1= 9){
    console.log(`total income ${num1} rupees.`);

}

else if(num2<= 10){
  console.log(`welcome to ${num2} the cs department`);
}

//if and else condition

let age1 = 17;

let age2 = 19;

if(age1>=18){
    console.log(`you over ${age2} you can vote`)

}


else{
    console.log(`you are under ${age1} you can not vote`)
}

//nested if-else condition

let marks = 100;

if(marks>=60){
    console.log(`your grade A+`);
    if(marks==70){
        console.log(`you are pass`)


    }
    else{
        console.log(`your pass congrades`)
    }
}
else{
    console.log(`better luck for next term`);
}

//logical operator

let marks$ = 46;

if(marks$<= 50 && marks==40 || !false){
    console.log(`you are pass and grade A!`);
}


//truthy ans falsy
if("  "){
   console.log(`it is a truth value ${"apna college"}`); 
}
else{
    console.log(`it is falsy value ${"apna-college"}`);
}



// switch statement!
let color =  "red";

switch(color){
    case "red":
        console.log("the red light is on.");
        break;
    case "green":
        console.log("the green light is on,");
        break;
    case "yellow":
    
    console.log("the yellow light is on.");
    break;    
    default:
        console.log("the light is break.");

}   

console.log("the light three is on.");



//alerts and prompts
let firstname = prompt("this is alerts msg")
console.log(firstname);

console.log("this is msg.")
console.error("this is an error msg.")
console.warn("this is warning.")
