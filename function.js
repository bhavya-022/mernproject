/*function mul(a, b) {
    return a * b;
}

function print(n1, n2) {
    return mul(n1, n2);
}

function main() {
    console.log(print(10, 20));
}

main();*/
/*console.log(5+"5");//it concats the string
console.log(5-"3");//it doesnot concats it only concatinate in the addition other than it doesnot concatenate
console.log(5==='5')//if we use three equals then it is false
console.log(5=='5')//then it is true
//in the java script arrays are the different datatypes
//let arr=[1,'new','2','3']
//console.log(arr);
//array methods
let arr=[1,2,3,4,5,6]
const addone =(num)=>{return num+1}
let res =arr.map(addone)
let double=arr.map((num)=>num*2)
console.log(double)*/
/*let arr =[1,2,3,4,5]
const addone =(num)=>{return num+1}
let res =arr.map(addone)
let double =arr.map((num)=>num*5)
console.log(double)*/
/*let products=[
    {id:1,name:'bhavya',price:23000},
    {id:2,name:'sravya',price:45000},
    {id:3,name:'ramu',price:56788},
    
]
let productName=products.map((product)=>console.log(product.name))*/
/*let names=["bhavya","sravya","ramu"]
let uppercase = names.map(names=>names.toUpperCase());
console.log(uppercase);*/
//filter
/*let numbers =[1,2,3,4,5,6]  // getting only even numbers
let evennumbers=numbers.filter(numbers=>numbers%2===0);
console.log(evennumbers)*/
/*let names =["bhavya","sravya","ramu","lakshmi"]
let length=names.filter(names=>names.length <5);
console.log(length);*/
/*let students =[
    {name:"bhavya",age:22,dept:"CSE"},
    {name:"sravya",age:18,dept:"AI&DS"},
    {name:"ramu",age:45,dept:"AIML"}
]
let moreage =students.filter(students=>students.age>=45)
console.log(moreage)*/
//reduce
/*let numbers = [10, 20, 30];

let sum = numbers.reduce((acc, cur) => acc + cur, 0);

console.log(sum);*/
/*let marks =[20,34,43,37];
let totalmarks =marks.reduce((acc,cur)=> acc+cur,0) 
console.log(totalmarks);*/
/*let cart =[
    {item:"book1",price:200},
    {item:"book2",price:400},
    {item:"book3",price:6000}
]
let totalprice =cart.reduce((total,product)=>{return total+product.price},0)
console.log(totalprice);*/
//find -it returns the single element
//destructing
/*let car ={
    brand:"suzuki",
    manudate:"21/9/2009",
    branch:"CSE"
};
let {brand, manudate} = car;
console.log(brand,manudate);*/
/*let colors =["red","green","blue"];
let[c1,c2,c3]=colors;
console.log(c1,c2,c3);*/
/*let a=5;
let b=10;
[a,b]=[b,a];
console.log(a,b);*/
//spread operator otr restoperator
/*let numbers=[1,2,3,4,5];
let[first,second,...spread]=numbers;
console.log(first);
console.log(second);
console.log(spread);*/
/*let car={
    brand :"BMW",
    year:2024
}
let newCar={...car,year:2026}
console.log(newCar)*/
/*let fruits =["apple","banana","orange"];
let[fav, ,...others]=fruits;
console.log(fav);
console.log(others);*/
/*let student ={
    name:"bhavya",
    age:21,
    branch:"CSE"

};
let{name,...details}=student;
console.log(details);*/
//promises-
//has 3 states
//1.pending->waiting
//2.resolved->if it success
//3.rejected->if it failed
/*const promise = new promise((resolve,reject)=>{
    let success =false
    if(success){
        resolve("data received successfully")
    }else{
        reject("error fetching data")
    }
    }
)
promise.then((data)=>console.log(data)).catch((error)=>console.log(error))*/
/*async function fetchData(){
    try{
        const res =await fetch()
        const data =await res.json()
        console.log(data)
    }
    catch(Error){
        console.log(data)
    
    }
}
fetch.data()*/
// it will execute after 2 seconds it always execute from top to bottom
/*console.log("hello");
setTimeout(()=>{ // it send s to the call stack
    console.log("will log after 2 seconds")// this will execute agter some milli seconds it is the browserr function
},2000)
console.log("end")*/ 
