// if statement 
// if .. else if ..else 

function orderMyLogic1(val)
 {
    if(val<10){
        return"Less than 10";
    }
    else if(val<5)
    {
        return "Less than 5";
    }
    else
    {
        return "Greater than or euqal 10";
    }
}

console.log(orderMyLogic1(3)) // print less than 10 => this is in a wrong order 

// right order

function orderMyLogic2(val)
 {
    if(val<5){
        return"Less than 5";
    }
    else if(val<10)
    {
        return "Less than 10";
    }
    else
    {
        return "Greater than or euqal 10";
    }
}

console.log(orderMyLogic2(3)) // print less than 5 