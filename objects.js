
//objects in java script
var ourDog=
{
    "name":"Camper",
    "legs":4,
    "tails":1,
    "friends":["everything !"]
}

// access ourDog data
var dogName=ourDog.name;

var dogTails=ourDog.tails;

console.log(dogName);

// or 

var dogLegs=ourDog["legs"]

console.log(dogLegs)
ourDog.name="DoDo"
console.log(ourDog.name)
console.log(ourDog)
//=======================================================================================================================================================

var testObj=
{
    12:"Namath",
    16:"Mohamed",
    19:"Ali"
}
var playerNumber=16;
var player=testObj[playerNumber]
console.log(player)

// add new properties

ourDog['bark'] = "Woof!"
console.log(ourDog)

// delete properties from object

delete ourDog.friends;
console.log(ourDog)

// using objects for lookup

function phoneticLookup(val)
{
    var result="";
    var lookup={
        "alpha":"Adams",
        "bravo":"Boston",
        "charlie":"Chicago",
        "delta":"Denver",
        "echo":"Easy",
        "foxtrot":"frank"
    };
    result=lookup[val]  
    return result;
}

console.log(phoneticLookup("alpha"));

//=======================================================================================================================================================

var myObj={
    gift:"pony",
    pet:"kitten",
    bed:"sleigh"
};

function checkObj(checkProp) 
{
    if(myObj.hasOwnProperty(checkProp))
    {
        return myObj[checkProp];
    }    
    else{
        return "Not Found";
    }
}

console.log(checkObj("gift"))