//Question 2:
//a- Create a function named solve that can accept any number of parameters and display them on console 
//Example:solve(1,2,3,4);

function solve(...args){
    console.log(args)
}
solve(1,2,3,4,5);

//b-Rewrite the code below to use array destructuring instead of assignment each value to a variable
// let item=["Eggs",0.25,12];
// let name=item[0];
// let price=item[1];
// let quantity=item[2];
// console.log(`item:${name},Quantity:${quantity},Price:${price}`);

const item=[{
    name:"Eggs",
    Price:0.25,
    quantity:12,
},
]
console.log(item);





//Question 3

const characters=[
    {
    name:"Luke Skywalker",
    height:172,
    mass:77,
    eye_color:"blue",
    gender:"male",
    },
    {
    name:"Darth Vader",
    height:202,
    mass:136,
    eye_color:"yellow",
    gender:"male",
    },
    {
    name:"Leria Organa",
    height:150,
    mass:49,
    eye_color:"brown",
    gender:"female",
    },
    {
    name:"Anakin Skywalker",
    height:188,
    mass:84,
    eye_color:"blue",
    gender:"male",
    },
    
    ];
    console.log("=========================part a============================")
    const Find_Male=characters.filter((characters)=>{
        if(characters.gender=="male"){
            return characters
        }
    
    });
    console.log(Find_Male);


    //b
    console.log("=========================part b============================");
    const Modified_Heights=Find_Male.map((Find_Male)=>({name:Find_Male.name,height:Number((Find_Male.height)*2),mass:Find_Male.mass,eye_color:Find_Male.eye_color,gender:Find_Male.gender}));
    console.log(Modified_Heights);

    //c
    console.log("=========================part c============================");
    const Sum=Modified_Heights.reduce((prev,curr)=>{
        return prev+curr.height
    },0)
console.log("The Sum of Heights:",Sum);
