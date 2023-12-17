const username=[]
const user = { }
const price=999

if( username){
    console.log("yes it is exist");
}
else{
    console.log("Sorry not exist");
}

if(username.length === 0){
    console.log("Sandeep");
}

if(Object.keys(user).length === 0){
    console.log("Yadav");
}

if(price<=500){
    console.log("Price is less than 500");
}
else if(price>500){
   console.log("price is greater than 500");
}
// falsy value         

// false             
// 0                 
// -0                 
// BigInt(0n)         
// ""              
// null             
// undefined                
// Nan              

// ----------truthy----------- 
 
// "0"
// 'false'
// 1
// {}
// []
// function h() {}


// nullish coalescing  operstion(??) : null undefined

// let num1= 5 ?? 10
// let num1 = null ?? 15
// let num1= undefined ?? 12
let num1 = null ?? 15 ?? 10

console.log(num1);


// +++++++++++ Terinary operator +++++++++++    condition ? stat1 (True) : stat2(False) 

const num12=31

num12>=31?console.log("yes,greater"):console.log("not greater");


