function calculateResult(){

let n = document.getElementById("subjects").value;

let total = 0;

for(let i = 1; i <= n; i++){

let marks = parseFloat(prompt("Enter marks for Subject " + i));

total = total + marks;

}

let percentage = total / n;

let grade = "";

if(percentage >= 90){
grade = "A";
}
else if(percentage >= 75){
grade = "B";
}
else if(percentage >= 50){
grade = "C";
}
else{
grade = "Fail";
}

document.getElementById("result").innerHTML =
"Total Marks: " + total +
"<br>Percentage: " + percentage.toFixed(2) + "%" +
"<br>Grade: " + grade;

}
