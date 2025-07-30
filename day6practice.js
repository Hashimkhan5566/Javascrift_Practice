let Maths =Number( prompt("enter the maths number:"));
let English = Number(prompt("enter the English number:"));
let Science = Number(prompt("enter the Science number:"));
let totalmarks = (Maths + English + Science);
let attendence = Number(prompt("enter your attendence number:"))

//console.log(totalmarks);

let obtainedMarks = (totalmarks/300)*100;
let percentage = (attendence/120)*100;

console.log(totalmarks);
console.log(percentage+"%")

let grade = "";    



if(obtainedMarks>80){
    grade = "GradeA";
    console.log("Grade_A");

}
else if(obtainedMarks>=70){
    grade = "GradeB";
    console.log("Grade_B");

}
else if(obtainedMarks>=65){
    grade = "GradeC";
   console.log("Grade_C");
}

else if(obtainedMarks<=60){
    grade = "GradeD";

  console.log("GradeD");
}
else {
    grade = "GradeE";
 console.log("sorry!!!! you are fail*");
}
//  Step 5: Use Logical Operators
// If the student got Grade A AND all subject marks > 85, then show:
// ➤ "Eligible for Scholarship"

// If Grade B OR Grade C AND attendance > 90%, show:
// ➤ "Eligible for Merit List"
if(grade === "GradeA" && totalmarks>80){
    console.log("you are eligible for scholarship.")
}
if(grade==="GradeB"|| "GradeC" && attendence> 80){
    console.log("eligible for merit list")
}

switch(grade){
    case "GradeA":
     console.log("Congradulation__ you are achieve Laptop.")
     break;

     case "GradeB":
     console.log("Congradulation__ you are achieve Tablets.")
     break;

      case "GradeC":
     console.log("Congradulation__ you are achieve books.")
     break;


      case "GradeD":
     console.log("OOPs!OOPs!OOPs!__  No rewards.")
     break;
     default:
        console.log("you are fail and try again!!")

 
}
