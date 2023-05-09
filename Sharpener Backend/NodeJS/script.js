// Q. Write an arrow function which returns the product of two numbers
const product=(a,b)=>a*b;
console.log(product(4,8));

//create a student object
const student ={
    name :"Biplab",
    age :26,
    biodata:function(){
        console.log(`I am ${this.name} and my age is ${this.age}`);
    }
}
student.biodata()