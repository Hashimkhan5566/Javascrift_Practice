// used the condition that input value is divisible by 10 print good and rather than bad.
//1st program practice

let num = 600;

if(num/10){
    console.log("good");


}
else{
    console.log("bad");
}


//Take the users name and age as an input using prompt.
//return back to the users as an alerts(by substituting their name and age.)
//2nd program practice.

let firstName = prompt("enter your name");
let age = prompt("your age");
alert("your are" + firstName + age + "year_old!");

// write a switch statement to print the month in quarter.
// month in quarter 1: january, february, march.
// month in quarter 2: april , may, june.
// month in quarter 3: july, august, september.
// month in quarter 4: october, november, december.

//3rd program practice.
let month$ = prompt("enter your quarter number(1-4)");
//let quarter = Number(month);
switch(Number(month$)){
    case 1 :
        console.log("quarter 1:january, february, march");
        break;
    case 2:
        console.log("quarter 2:april, may, june")  ;
        break;
    case 3:
        console.log("quarter 3:july, august, september");
        break;
    case 4:
        console.log("quarter 4:october, november, december"); 
        break; 
    default:
        console.log("invalid number! again try!")     
        
}
console.log("this is the monthly quarter!")


//to user input type string and remove the space
//4th program practice.
let month = prompt("enter your quarter number(string like capitalized)");
//let quarter = Number(month);
switch(month.toLowerCase().trim()){
    case "quarter 1" :
        console.log("quarter 1:january, february, march");
        break;
    case "quarter 2":
        console.log("quarter 2:april, may, june")  ;
        break;
    case "quarter 3":
        console.log("quarter 3:july, august, september");
        break;
    case "quarter 4":
        console.log("quarter 4:october, november, december"); 
        break; 
    default:
        console.log("invalid number! again try!")     
        
}
console.log("this is the monthly quarter!")



// A string is a golden string if it starts with the character start "A" or "a" and has total length greater than 5.
// for a given string print if it is golden or not.
//5th program practice.
let golden_string = prompt("enter the string:");
let firstLetter = golden_string[0];
let length = golden_string.length;



if(firstLetter==="A"||firstLetter==="a" && length>5){
    console.log("this is the golden string.");


}
else{
    console.log("not valid sring!")
};

//write a program that find the largest of 3 number:

//6th program practice.
let number$1 = Number(prompt("enter the first number:"));
let number$2 = Number(prompt("enter the second number:"));
let number$3 = Number(prompt("enter the third number:"));

if(number$1>number$2&&number$3){
    console.log(number$1);
}
else if(number$2>number$1&&number$3){
    console.log(number$2);
}
else if(number$3>number$2&&number$1){
    console.log(number$3);
}
else {
    console.log("all greater number");
}

