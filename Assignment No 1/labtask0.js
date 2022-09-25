// function Student(name,reg){
//     this.name=name;
//     this.reg=reg;
//     display=function(){
//         console.log(this.name,this.reg);
//     }
// }
// let std1=new Student("Ali",01);
// let std2=new Student("Asim",10);
// console.log(std1.name)

// // Task 01
// function Student(s_name,gpa,classs){
// this.s_name=s_name;
// this.classs=classs;
// this.gpa=gpa;
// }
// let Std1=new Student("Kashif",2.92,"BCS-4");
// let Std2=new Student("Shahid",2.8,"BCS-4");
// let Std3=new Student("Ali",3.0,"BCS-4");
// let Std4=new Student("khan",3,4,"BCS-4");
// let Std5=new Student("Barkat",3.8,"BCS-4");
// a=Std1.gpa

// let arr12=[]
// let array1=Studentsname();
// function Studentsname(){
//         let array1=["khan","ali","amjad"];
//         return array1;
//     }
// console.log(array1);

// function student_creator(){
//     return [std1,std2,std3]
// }
// let students=student_creator();
// let filtered_stuedents=students_filtered();




//extra work

// Conventional Arrow Function
// const hello=function(){
//     console.log("Hello world");
// }

// const hellog=()=>{
//     console.log("Hellog world");
// }
// hellog();
//1. create an arrow function that accept your name and display on console
let name_func=(name)=>name;
console.log(name_func("Kashif"));

//create an arrow function that accept any number of args
let arg_func=(...args)=>{
    const array1=[]
    const array2=[]
    for(let i=0;i<args.length;i++){
        if(args[i]%2==0){
           array1.push(args[i])
        }
        else{
            array2.push(args[i])
        }
       

    }
    let find_func={
        odd:array2,
        even:array1
    }
//    return console.log("EVEN ARRAY IS ",array1,"\n ODD ARRAY IS: ",array2)
return console.log(find_func);
        
        
    }
    

arg_func(9,4,3,6,2,3)
