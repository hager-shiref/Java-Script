console.log("Hello Java Script !");
//=======================================================================================================================================================

var divide = 4.2/2.0;
console.log(divide);
var reminder = 4.2%2.0;
console.log(reminder);
//=======================================================================================================================================================

const myStr = "I am , \"double  quoted\" string inside \"double quotes\"" // double quotes 
console.log(myStr)
const myStr2='Iam , "double  quoted" String inside "Single quotes"' //single quotes
console.log(myStr2)
//=======================================================================================================================================================

const student="hager"
 console.log(student[student.length-2])

 student[0]="s" // String is immutable
 console.log(student)
//=======================================================================================================================================================

 var myArray=[[1,2,3],[4,5,6],[7,8,9],[[10,11,12],13,14]]
 var myData=myArray[2][0][1]
 var myData2=myArray[3][0][1]
 console.log(myData)
 console.log(myData2)
//=======================================================================================================================================================

 var ourArray=["Stimpson","J","Cat"]
 ourArray.push(["happy","joy"]) // push add element to the end of the array 
 console.log(ourArray)
//=======================================================================================================================================================

 var array=[1,2,3]
 console.log(array.pop()) // print 3 (the last index) and remove it from the array
 console.log(array)
 console.log(array.shift()) // shift like pop but shift removes from the first , it will remove 1 from the array
 console.log(array)
 console.log(array.unshift("Happy")) // unshift like push but unshift adds from the beginning 
 console.log(array)

//=======================================================================================================================================================

//function 
function reusableFunction(a,b)
{
    console.log(a-b)
}

reusableFunction(10,5)

//=======================================================================================================================================================

//Anonymous function (it doesn't have a name)

const magic=()=> new Date(); // there is no curly bracket because it's return only one thing 
console.log(magic)

const realNumberArray=[4,-5.5,42,6,0,-90,4.5]

const squareList=(arr)=>{
    const squaredInteger=arr.filter(num=>Number.isInteger(num) && num>0).map(x=>Math.pow(x,2))
    return squaredInteger;
}

const squaredInteger=squareList(realNumberArray);
console.log(squaredInteger);
//=======================================================================================================================================================

// ... called rest operator , this allows you to create a function that takes a variable number of arguments
//...args this will make an array called args and save the parameters in it , any number of parameter
const sum=(
    function(){
        return function sum(...args) {
            return args.reduce((a,b)=> a+b,0);
        };
    }
)();
console.log(sum(1,2,3,4))

//=======================================================================================================================================================

//spread operator make an array equal all the content of arr1 

const arr1=['Jan', 'Fab']
let arr2;
(function(){
arr2=[...arr1];
arr1[0]='potato' // arr2 won't be changed , arr1 will be changed
})();
console.log(arr2)
console.log(arr1)
