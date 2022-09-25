//Muhammad Kashif Nabeel SP20-BCS-004

//problem no 1. Write a function called sandwich calculator. This should accept one value: bread
// function sandwich_calculator(value){
//     return value;
// }
// console.log(sandwich_calculator("bread"));

// 2. 
//  function sandwich_calculator(bread){
// if(bread<0){
//     return "We have't any sanwich available";
// }
//     else if(bread%2==0){
//         return "We have "+bread/2+" sanwich available";
//     }
//     else{
//         const result=bread-1
//         return "We have "+(result/2)+" sanwich and 1 Bread Available";
//     }
// }
// console.log(sandwich_calculator(10));

// 3.
// function sandwich_calculator(bread,chees){
//     return "Total breads "+(bread)+ "\nTotal Chees "+chees;
// }
// console.log(sandwich_calculator(3,3));

// 4.
// function sandwich_calculator(bread,chees){
//     let sum=0
//     while(chees==1){
//         return console.log("1");
//         break;
//     }
//     if(bread<=0 || chees<=0){
//         return "We have'nt any Sandwich available";
//     }
//     for (let index = 0; index < 100; index++) {
//         if(bread>1 && chees>=1){
//             sum=sum+1
//             bread=bread-2;
//             chees-=1;
//         }    
//     }
    
//     return "Number of sandwichs available "+sum;
//     }
// console.log(sandwich_calculator(5,0));

// Problem :2
// Write a JavaScript program to list the properties of a JavaScript object. Go to the editor
// var student = {
//     name : "David Rayy",
//     sclass : "VI",
//     rollno : 12
//  };
 

//  //Problem :3
//  var student = {
//     name : "David Rayy",
//     sclass : "VI",
//     rollno : 12 };
// console.log("\nObject before Deleted roll number Property:\n\n",student);

// delete student.rollno

// console.log("\nObject After Deleted roll number Property:\n\n",student);





// New Task Solutions 23-09-2022
// Problem 01:
// function reverseFunc(num){
//     var splitString=num.split("");
//     var reverseArray=splitString.reverse();
//     var joinArray=reverseArray.join("");
//     return joinArray;
// }

// var num="23617"
// var num2=reverseFunc(num)
// console.log(num2)
// const k2=4
// const k=k2-1; 
// for (let index = (num2.length)-1; index > 0; index--) {
//     if(index==k)
//     {console.log(num2[k]);}
    
// }

// Problem 2:


// function reducef(cur,prev) {
//     return prev+cur;
// }
// let st_name="23617";
// var array=st_name.split("");
// var numberarray=array.map(Number);
// var num_ar=numberarray.reduce(reducef);
// console.log(num_ar);


// Problem 3: 
// function mapfunction(num) {
//     var sum=0;
//     if(num%2==0){
//         sum=sum+num;
//     }
//     return sum;
// }
// let st_name="417826";
// var array=st_name.split("");
// var numberarray=array.map(Number);
// var o_b=numberarray.filter(mapfunction);
// function reduceSum(prev,cur){
//     return prev+cur
// }
// var sumOfeven=o_b.reduce(reduceSum);
// console.log(sumOfeven);

// Problem 4:
// let array=[0,1,2,3,4,5,6,7,8,9,10]
// function Squaremapfunction(num){
//     return num**2;
// }
// function Cubemapfunction(num){
//     return num**3;
// }
// var square=array.map(Squaremapfunction);
// var cube=array.map(Cubemapfunction);
// console.log("Square of 0 to 10 numbers:",square);
// console.log("Cube of given numbers:",cube);

// Problem 5:

// var st_name="kashif"
// let array=st_name.split("");
// for (let i = 0; i < array.length; i++) {
//     if(array[i]=="a"||array[i]=="A"|| array[i]=="e"|| array[i]=="E"|| array[i]=="I"|| array[i]=="i" || array[i]=="O" || array[i]=="o" || array[i]=="U" || array[i]=="u"){
//         console.log("Location of first vowel in given string:",i)
//         break;
//     }   
// }

// var num=34532
// var n=num.toString();
// var array=n.split("");
// console.log(array);
// for (let index = array.length-1; index >= 0; index--) {
//     console.log(array[index]);
    
// }


// Problem 6:
function generateRandomInteger(max) {
    return Math.floor(Math.random() * max) + 1;
}

let value = generateRandomInteger(10);
let number=prompt("Enter some number:");
console.log("Random value:"+value)
if(number==value){
    console.log("YOu Win");
}
else{
    console.log("Not Matched");
}

// problem 7:
// array=[1,2,4,10]
// if(array[0]==10){
//     console.log("10 is at first position");
// }
// else if(array[(array.length)-1]==10){
//     console.log("10 is at last position");
// }
// else{
//     console.log("10 is neither in first position nor at last position");
// }

//Problem 8:
// var st="comsats"
// var st_array=st.split("");
// st_array.sort();
// console.log(st_array.toString());









    
    



