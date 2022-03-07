
function textStrict(a,b)
{
    if(a==b)
    {
        return "Equal";
    }    
    return "Not Equal";
}
// 3 == 3 => true
// 3 == '3' => true
console.log(textStrict(3,'3')) // double equal assign ( == ) do the type conversion it means it will convert 3 to '3')

//=======================================================================================================================================================

// 3 === 3  => true
// 3 === '3' => false 
// strick equality operator ( === ) don't do the type conversion 

function compareEquality(a,b)
{
    if(a===b)
    {
        return "Equal";
    }    
    return "Not Equal";
}

console.log(compareEquality(10,'10'))
