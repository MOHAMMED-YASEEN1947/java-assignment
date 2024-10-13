
// function (-)
function subtract(a, b) {
    return a - b;
}

var result = subtract(7, 4);
console.log("subtract",result);

// function (+)
function add(a,b){
    return a+b;
}

var sum=add(14,4);
console.log("sum",sum);

// function (*) and set time out
var mul=function(a,b){
    return a*b;
}
var multi= mul(2,100);
console.log("multiplication",multi);

// set timeout
setTimeout(function(){
    console.log("hello myself yaseen");
},4500);

// arrays
//number           0            1             2           3              4
{var laptops=['DELL G15','LENOVO LEGION','ASUS TUF','MSI BRAVO','APPLE MAC BOOKK'];

// print all elements present in the currency and it's length
console.log("length of array",laptops.length);
console.log("laptops = ",laptops);

// accessing array elements using index value
console.log(laptops[0]);
console.log(laptops[4]);
console.log(laptops[2]);
console.log(laptops[1]);
}
{
var country=['india','america','russia','iran'];
// adding element in array
country.push('iraq')
console.log(country);

// removing element from array
country.pop()

// shift and unshift
country.unshift('saudi')
console.log("country",country);

country.shift()
console.log("country",country);
}
var month = parseInt(prompt("Enter a number from 1-12:"));

switch (month) {
    case 1:
        console.log("jan");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("Mar");
        break;
    case 4:
        console.log("Apr");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("Jun");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("Aug");
        break;
    case 9:
        console.log("Sep");
        break;
    case 10:
        console.log("Oct");
        break;
    case 11:
        console.log("Nov");
        break;
    case 12:
        console.log("Dec");
        break;
    default:
        console.log("Invalid input! Please enter a number between 1 and 12.");
}