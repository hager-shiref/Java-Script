
function abTest(a,b)
{
    if( a < 0 || b < 0)
    {
        return undefined;
    }
    return Math.round(Math.pow(Math.sqrt(a)+ Math.sqrt(b),2))
}

console.log(abTest(4,4));
console.log(Math.pow(5,2)) // 5 ^ 2 

function convertToInteger(str)
{
    return parseInt(str)
}

convertToInteger("60");

function convertToIntegerRedix(str)
{
    return parseInt(str,2)
}

console.log(convertToIntegerRedix("10011"))