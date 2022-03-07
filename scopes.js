//Global Scope

var myGlobal=10;
function fun1()
{
 
    oopsGlobal=5; // declaring a variable without a var keyword make it a global variable even it declare in fuction 
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

// Global var and local var are have the same name but don't affect on each other 

var outerWear="T-Shirt"

function myOutfit() 
{
    var outerWear="Sweater"
    return outerWear;    
}

console.log(myOutfit());
console.log(outerWear);

//=======================================================================================================================================================
