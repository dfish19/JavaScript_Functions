console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count) {
    for (let i = 1; i <= count; i++) {
      if (i % 2 != 0) {
        console.log(i);
      }
    } 
    
}
printOdds(20);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(age) {
    let aboveSixteen = "You can drive!";
    let belowSixteen = "Sorry, but you need to wait until you're 16.";
    if (age >= 16) {
      console.log(aboveSixteen);
    } else {
      console.log(belowSixteen);
    }
}
checkAge(40);

 //Exercise 3
 console.log("EXERCISE 3:\n==========\n");
 function Quadrant(x,y){
    let quadrant1 = "Lower X axis";
    let quadrant2 = "Lower Y axis";
    let quadrant3 = "Upper X axis";
    let quadrant4 = "Upper Y axis";
    if(x > 0 && y > 0 ){
        console.log(quadrant1)
    }
    else if(x < 0 && y < 0){
        console.log(quadrant2);
    }
    else if(x > 0 && y == 0){
        console.log(quadrant3);
    }
    else if(x <= 0 && y >= 0){
        console.log(quadrant4);
    }
 }
 Quadrant(0,0);
 Quadrant(6,8);
 Quadrant(2,5);

 //Exercise 4
 console.log("EXERCISE 4:\n==========\n");
 function Triangle(a, b, c){
    if(a+b>c||a+c>b||b+c>a){
        console.log("Valid");
    }
    else{
        console.log("Invalid");
    }
 }
 Triangle(1,2,3)

 //Exercise 5
 console.log("EXERCISE 5:\n==========\n");

 function CellData(planLimit, day, usage){
    let cycle = 30;
    let amountUsed = usage/day;
    let averageUse = planLimit/cycle;
    let remaining = planLimit - usage;

    console.log(`${day} used , ${cycle - day} remaining. \n
    Average daily use is ${averageUse}. You are on track with \n 
    your usage.`)
 }
CellData(100, 10, 50);