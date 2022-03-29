
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
//=======================================================================================================================================================

var myStorage={
    "Car":{
        "inside":{
            "glove box":"maps",
            "passenger seat" : "crumbs"
        },
        "outside":{
            "trunk":"jack"
        }
    }
}

var gloveBoxContents=myStorage.Car.inside["glove box"]
console.log(gloveBoxContents)

//=======================================================================================================================================================

var myPlants=[
    {
        type:"flowers",
        list:[
            "rose","tulip","dandelion"
        ],
    },
    {
        type:"trees",
        list:[
            "fir","pine","birch"
        ]
    }
]

var secondTree=myPlants[1].list[0]
console.log(secondTree)

//=======================================================================================================================================================

function freezeObj() {
    "use strict";
    const MATH_CONSTANT={
        PI:3.14
    };
    Object.freeze(MATH_CONSTANT)//this to never change the value of MATH_CONSTANT 
    try{
        MATH_CONSTANT.PI=99;
    }
    catch(ex)
    {
        console.log(ex);
    }
    return MATH_CONSTANT.PI;
}
const PI=freezeObj()
console.log(PI)