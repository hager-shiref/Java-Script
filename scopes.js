//Global Scope

var myGlobal=10;
function fun1()
{
 
    oopsGlobal=5; // declaring a variable without a var keyword make it a global variable even it declare in fuction which is local
}

function fun2()
{
    var output="";
    if (typeof myGlobal !="undefined")
    {
        output+="myGlobal: " +myGlobal + "\n";
    }
    if(typeof oopsGlobal !="undefined")
    {
        output+="oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

fun1();
fun2();

//=======================================================================================================================================================

//Local Scope

function myLocalScope() 
{
    var myVar=5;
    console.log(myVar)
}

myLocalScope()

//=======================================================================================================================================================

// Global var and local var  have the same name but don't affect on each other 

var outerWear="T-Shirt"

function myOutfit() 
{
    var outerWear="Sweater"
    return outerWear;    
}

console.log(myOutfit());
console.log(outerWear);

//=======================================================================================================================================================
//using var you can declare the variable twice but let doesn't , it make you declare the variable once 
//the scope of let is limited to the block statement or expression that it was declared in  
function checkScope()
{
    "use strict" //this enables strict mode which catches common coding mistakes and unsafe actions 
    let i= " Function Scope "
    if(true){
        let i="Block Scope" // if we change let to var it will print block scope in both consoles 
        console.log("Block Scope is : " +i)
    }
    console.log("Function Scope is : "+i)
    return i;
}

checkScope()

//=======================================================================================================================================================

const SENTENCE="JavaScript is cool !"

const s=[5,7,8]
//you can change the value of array despite it's a const 
function editInPlace() {
    "use strict "
    s[0]=2;
    s[1]=5;
    s[2]=7;
}

editInPlace()
console.log(s)