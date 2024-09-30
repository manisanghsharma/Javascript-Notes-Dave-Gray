//While loop
let myNum = 0;
while(myNum<10){
    console.log(myNum);
    myNum++;
}

console.log("\n");

//dowhile loop
let myNum2 = 1;
do{
    console.log(myNum2*7);
    myNum2++;
}while(myNum2<11);

console.log("\n");

//for loop
let myNum3=9;
for(let i = 1; i<=10; i++){
    console.log(myNum3*i);
}

console.log("\n");

//print each letter of my name
let myName = "Manisangh";
for(let i = 0; i<myName.length; i++ ){
    console.log(myName.charAt(i));
}

console.log("\n");

//Using break to stop the loop at a certain location
let myLetter;
let counter=0;
while(counter<myName.length){
    myLetter = myName[counter];
    if(myLetter === 's')
        break;
    console.log(myLetter);
    counter++;
}