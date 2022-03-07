//undefined value returned
var sum=0;
function addThree()
{
    sum+=3
        
}

console.log(addThree())

//=======================================================================================================================================================

// stand in line

function nextInLine(arr,item)
{
    arr.push(item);
    return arr.shift();    //this function will add 6(item) to the end of the array and print 1 (the first item) and remove it (shift)
}

var testArr=[1,2,3,4,5];

console.log("Before: "+JSON.stringify(testArr)); //print the testArr as a Object Notation String like [1,2,3,4,5] 
console.log(nextInLine(testArr,6));
console.log("After: " +JSON.stringify(testArr));
