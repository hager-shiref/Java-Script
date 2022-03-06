console.log("Hello Java Script !");

var divide = 4.2/2.0;
console.log(divide);
var reminder = 4.2%2.0;
console.log(reminder);
const myStr = "I am , \"double  quoted\" string inside \"double quotes\"" // double quotes 
console.log(myStr)
const myStr2='Iam , "double  quoted" String inside "Single quotes"' //single quotes
console.log(myStr2)

const student="hager"
 console.log(student[student.length-2])

 student[0]="s" // String is immutable
 console.log(student)

 var myArray=[[1,2,3],[4,5,6],[7,8,9],[[10,11,12],13,14]]
 var myData=myArray[2][0][1]
 var myData2=myArray[3][0][1]
 console.log(myData)
 console.log(myData2)

 var ourArray=["Stimpson","J","Cat"]
 ourArray.push(["happy","joy"]) // push add element to the end of the array 
 console.log(ourArray)

 var array=[1,2,3]
 console.log(array.pop()) // print 3 (the last index) and remove it from the array
 console.log(array)
 console.log(array.shift()) // shift like pop but shift removes from the first , it will remove 1 from the array
 console.log(array)

console.log(array.unshift("Happy")) // unshift like push but unshift adds from the beginning 
console.log(array)

