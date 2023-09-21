//   **Buggy code(part 5)**

/*var size=prompt("Enter size of the array");
var arr=[];
function printArray(size)
{
for(var i=1;i<=size;i++)
{
    arr.push(i);
}
console.log(arr);
}
printArray(size);*/


//----------------------------------------------------------------------------------


//   **Buggy code(part 7)**

/*var a=Number(prompt("Enter first number to swap"));
var b=Number(prompt("Enter second number to swap"));
function swaps(a,b)
{
var c=a;
a=b;
b=c;
console.log(`First number is now ${a}`);
console.log(`Second number is now ${b}`);
}
swaps(a,b);*/

//---------------------------------------------------------------------------------


 //   **The farm problem**

/*var chickens=Number(prompt("Enter number of chickens"));
var cows=Number(prompt("Enter number of cows"));
var pigs=Number(prompt("Enter Number of Pigs"));
function totalLegs(chickens,cows,pigs)
{
    var result=(chickens*2)+(cows*4)+(pigs*4);
    return result;
}
console.log(totalLegs(chickens,cows,pigs));*/


//------------------------------------------------------------------------------------


//    **using the && operator**

/*var result1=prompt("Enter true or false");
var result2=prompt("Enter true or false");
function bool(result1,result2)
{
if(result1=="true" && result2=="true")
{
    return true;
}
else
{
    return false;
}
}
console.log(bool(result1,result2));*/


//------------------------------------------------------------------------------------

//    **Are the numbers equal**

/*var num1=Number(prompt("Enter first number"));
var num2=Number(prompt("Enter second number"));
function isEqual(num1,num2)
{
if(num1===num2)
{
    return true;
}
else
{
    return false;
}
}
console.log(isEqual(num1,num2));*/


//-------------------------------------------------------------------------------------

//   **Football points**

/*var wins=Number(prompt("Enter number of wins"));
var draws=Number(prompt("Enter number of draws"));
var loses=Number(prompt("Enter number of loses"));
function calculate(wins,draws,loses)
{
    var result=(wins*3)+(draws*1)+(loses*0);
    return result;
}
console.log(calculate(wins,draws,loses));*/


//-------------------------------------------------------------------------------------

//   **convert hours and minutes to seconds**

/*var hours=Number(prompt("Enter hours"));
var minutes=Number(prompt("Enter minutes"));
function convertToSeconds(hours,minutes)
{
    var result=(hours*60*60)+(minutes*60);
    return result;
}
console.log(convertToSeconds(hours,minutes));*/


//----------------------------------------------------------------------------------------

//   **Fix the expression**

/*var number=Number(prompt("Enter a number"));
function isSeven(number)
{
    if(number==7)
    {
        return true;
    }
    else
    {
        return false;
    }
}
console.log(isSeven(number));*/


//-------------------------------------------------------------------------------------------

//     **Equality check**

/*var first=prompt("Enter first side of comparison");
var second=prompt("Enter second side of comparison");
function equality(first,second)
{
    if(first===second)
    {
        return true;
    }
    else
    {
        return false;
    }
}
console.log(equality(first,second));*/


//---------------------------------------------------------------------------------------------

//      **profitable gamble**

/*var prop=Number(prompt("enter number of prop"));
var prize=Number(prompt("Enter the number of prize"));
var pay=Number(prompt("Enter number of pay"));
function checking(prop,prize,pay)
{
    if((prop*prize)>pay)
    {
        return true;
    }
    else
    {
        return false;
    }
}
console.log(checking(prop,prize,pay));*/


//--------------------------------------------------------------------------------------------------

//   **Boolean to string conversion**

/*var flag=Boolean(prompt("Enter true or false"));
console.log(typeof(flag))   //proving that input is of type boolean
var result;
function booleanToString(flag)
{
    result=flag.toString();
    console.log(`"${result}"`);
    console.log(typeof(result))  //proving that it is string
}
booleanToString(flag)*/


//--------------------------------------------------------------------------------------------------


//    **Using arrow functions**

/*var x=prompt("Enter something to print it again");
var print=(x)=> x;
console.log(print(x));*/


//--------------------------------------------------------------------------------------------------

//     **Frames per second**

/*var minutes=Number(prompt("Enter minutes"));
var fbs=Number(prompt("Enter fbs"));
function frames(minutes,fbs)
{
    var result=minutes*fbs*60;
    return result;
}
console.log(frames(minutes,fbs));*/


//------------------------------------------------------------------------------------------------


//   **Miserable parody of calculator**
/*var number=prompt("Enter a mathematical expression");
function evaluate(number)
{
console.log(eval(number));                                 //a builtin function used to calculate arithmetic expression in javascript
}
evaluate(number);*/


//--------------------------------------------------------------------------------------------------


//    **Buggy code(part 4)**

/*var name=prompt("Enter your name");
function greetings(name)
{
    if(name=="mubashir")
    {
        console.log(`"hello,my love!"`);
    }
    else
    {
    console.log(`"hello,${name}!"`)
    }
}
greetings(name);*/



//--------------------------------------------------------------------------------------------------