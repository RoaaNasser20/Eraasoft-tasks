
//***********************************sheet2 loops*****************************

//*****problem1 ***

/*let num1=Number(prompt("Enter first number"));
let num2=Number(prompt("Enter second number"));
function check(num1,num2)
{
if((num1=="15" || num2=="15" || (num1+num2==15)))
{
    return true;
}
else
{
  return false;
}
}
console.log(check(num1,num2));*/

//______________________________________________________________________________________________

//****problem2 ***

/*let num=Number(prompt("Enter a number to check if it is a perfect square or not"));
let product=Math.sqrt(num);
function perfect_Square(num)
{
  if((product)*(product)==num)
  {
    return true;
  }
  else
  {
    return false;
  }
}
console.log(perfect_Square(num));*/

//_________________________________________________________________________________________________


//***problem3 ***

/*let arr=[1,2,3,4,5];
for(var j=0;j<arr.length;j++)
{
  arr[j]=Number(prompt("Enter elements"));
}
function checkZero(arr)
{
  for(var i=0;i<arr.length;i++)
  {
    if(arr[i]==0)
    {
      return (i+1);
    }
  }
}
console.log(checkZero(arr));*/

//________________________________________________________________________________________________


//****problem4 ***

/*let letter=prompt("Enter a letter");
function convert(letter)
{
  if(letter==letter.toUpperCase())
  {
    console.log(letter.toLowerCase());
  }
  if(letter==letter.toLowerCase())
  {
    console.log(letter.toUpperCase());
  }
}
convert(letter);*/

//___________________________________________________________________________________________________


//****problem5 ***

/*let num1= Number(prompt("Enter first number"));
let num2=Number(prompt("Enter second number"));
let sum=0;
function summution(num1,num2)
{
  for(var i=num1;i<=num2;i++)
  {
    if(i%2!=0)
    {
      sum+=i;
    }
  }
  console.log(sum);
}
summution(num1,num2);*/

//________________________________________________________________________________________________________


// ****problem6 ***


/*let size=Number(prompt("Enter the limited size"));
let arr=[];

function check(size)
{
  for(var i=1;i<=size;i++)
  {
    arr[i]=Number(prompt("Enter the elements"));
  }
  
  for(var i=0;i<arr.length;i++)
  {
    if(arr[i]==4 || arr[i]==7)
    {
      return "its your lucky day";
    }
  }
  for(var i=0;i<arr.length;i++)
  {
    if(arr[i]!=4 || arr[i]!=7)
    {
    return "its not your lucky day";
    }
  }
}
console.log(check(size));*/


//__________________________________________________________________________________________________________

//****problem7 ***

/*let num=Number(prompt("Enter a number"));
let arr=[];
function divisors(num)
{
  for(var j=1;j<=num;j++)
  {
    if(num%j==0)
      console.log(j);
    }
}
divisors(num);*/

//____________________________________________________________________________________________________________


// ****problem8 ***

/*var prime=Number(prompt("enter number"));
function isprime(prime)
{
  for(let i=2;i<=prime;i++)
  {
    let count=0;
    for(let j=1;j<=i;j++)
    {
      if(i%j==0)
      {
        count++;
      }
   }
  if(count==2)
  {
    console.log(i);
   }
 }
}
isprime(prime);*/

//_____________________________________________________________________________________________________________


// ***problem 9

/*let num=Number(prompt("Enter the size"));
let sumEven=0;
let sumOdd=0;
let evenCounter=0;
let oddCounter=0;
let arr=[];
function oddOrEven(num)
{
for(var i=0;i<num;i++)
{
  arr[i]=Number(prompt("Enter the elements of array to check number of even and odd"));
}
for(var i=0;i<arr.length;i++)
{
  if(arr[i]%2==0)
  {
    sumEven+=arr[i];
    evenCounter++;
  }
  else
  {
    sumOdd+=arr[i];
    oddCounter++;
  }
}
console.log(`sum of even number is ${sumEven}`);
console.log(`even count is ${evenCounter}`);
console.log(`Sum of odd numbers is ${sumOdd}`);
console.log(`odd count is ${oddCounter}`);
}
oddOrEven(num);*/


//__________________________________________________________________________________________________________


//***problem10*******

/*let number=Number(prompt("Enter number"));
function pum(number)
{
   let counter=0;
   for(let i=1;i<=number;i++)
   {
    for(let j=counter;j<counter+number;j++)
    {
      console.log(j+1);
    }
    console.log("pum");
    counter+=number+1;
   }
}
pum(number);*/


//________________________________________________________________________________________________________

//***problem11********

/*let num1=Number(prompt("Enter first number"));
let num2=Number(prompt("Enter second number"));
function determine(num1,num2)
{
  if((num1*num2)>0)
  {
    console.log("their product is positive");
  }
  else if((num1*num2)<0)
  {
    console.log("their product is negative");
  }
  else
  {
    console.log("Their product is zero");
  }
}
determine(num1,num2);*/

//_________________________________________________________________________________________________________

//****problem 12******

/*let grade=Number(prompt("Enter your grade"));
let projects=Number(prompt("Enter projects number"));
if((grade>0 && grade<=100) && (projects>0))
{
function finalGrade(grade,projects)
{
    if(grade>90 && projects>10)
    {
        console.log("100");
    }
    else if(grade>75 && projects>=5)
    {
        console.log("90");
    }
    else if(grade>50 && projects>=2)
    {
        console.log("75");
    }
    else
    {
        console.log("0");
    }
}
finalGrade(grade,projects);
}
else
{
    console.log("number is out of range either grade or projects");
}*/





//********************************Sheet2(Arrays)******************************




// ***problem1***

/*let num=prompt("Enter number")
function left(num)
{
    return num[0];
}
console.log(left(num));*/

 
//______________________________________________________________________________

// ***problem2 ***

/*let arr=[];
let positiveNo=0;
let negativeNo=0;
let evenNo=0;
let oddNo=0;
let size=Number(prompt("Enter the size of the array"));
function check(size)
{
for(var i=0;i<size;i++)
{
  arr[i]=Number(prompt("Enter the elements of the array"));
}
for(var i=0;i<arr.length;i++)
{
  if(arr[i]>0)
  {
    positiveNo++;
  }
  if(arr[i]<0)
  {
    negativeNo++;
  }
  if(arr[i]%2==0)
  {
    evenNo++;
  }
  if(arr[i]%2!=0)
  {
    oddNo++;
  }
}
console.log(`positive: ${positiveNo}`);
console.log(`Negative: ${negativeNo}`);
console.log(`even: ${evenNo}`);
console.log(`odd: ${oddNo}`);
}
check(size);*/

//_______________________________________________________________________________

// ***problem3***

/*let arr=[];
let size=Number(prompt("Enter the size of the array"));
function filtering(size)
{
for(var i=0;i<size;i++)
{
   arr[i]=Number(prompt("Enter the elements of the array"));
}
for(var i=0;i<arr.length;i++)
{
  arr=arr.filter(Number);
}
console.log(arr);
}
filtering(size);*/

//__________________________________________________________________________________________________

// ***problem4***

/*let arr=[];
let start=0;
let end=0;
let size=Number(prompt("Enter the size of the array"));
for(var i=0;i<size;i++)
{
   arr[i]=Number(prompt("Enter the elements of the array"));
}
start=Number(prompt("Enter the index of start"));
end=Number(prompt("Enter the index of end"));
function slicing(arr)
{
  console.log(arr.slice(start,end));
}
slicing(arr);*/

//____________________________________________________________________________________________________


// ***problem5***

/*let arr=[];
let arr1=[];
let arr2=[];
let arr3=[];
let size1=0;
let size2=0;
let size3=0;
let maxfirst=0
size1=Number(prompt("Enter the size of the first array"));
for(let i=0;i<size1;i++)
{
  arr1[i]=Number(prompt("Enter the elements of the first array"));
  maxfirst=Math.max(arr1[i]);

}
size2=Number(prompt("Enter the size of the second array"));
for(let i=0;i<size2;i++)
{
  arr2[i]=Number(prompt("Enter the elements of the second array"));
  maxsecond=Math.max(arr2[i])
}
size3=Number(prompt("Enter the size of the third array"));
for(let i=0;i<size3;i++)
{
  arr3[i]=Number(prompt("Enter the elements of the third array"));
  maxthird=Math.max(arr3[i]);
}
arr=[arr1,arr2,arr3];
for(let i=0;i<arr.length;i++)
{
  console.log(arr[i]);
}
arr=[maxfirst,maxsecond,maxthird];
console.log(arr);*/



//_____________________________________________________________________________________________________


// ***problem6***

/*let word=prompt("Enter any word");
let countletters=0;
if(word.length>10)
{
  for(var i=1;i<word.length-1;i++)
  {
    countletters++;
  }
  console.log(`${word[0]}${countletters}${word[i]}`);
}
else
{
  console.log(word);
}*/


//_____________________________________________________________________________________________________


// ***problem7***

/*let str=prompt("Enter a string");
var count=0;
function duplicates(str)
{
for(var i=0;i<str.length-1;i++)
  for(var j=i+1;j<str.length;j++)
 {
    if(str[i]==str[j+1] || str[i]==str[j] || str[i]==str[j+2])
    {
      count++;
    }
    if(count==2)
    {
      return true;
    }
    break;
 }
 return false;
}
console.log(duplicates(str));*/

//_____________________________________________________________________________________________________


// ***problem9 ***

/*let str=prompt("Enter a string");
let indexs=0;
let letter=prompt("Enter a certain letter to bring first and last index");
function findIndex(str)
{
for(let i=0;i<str.length;i++)
{
  indexs=str.indexOf(letter);
}
console.log(indexs);
}
findIndex(str);*/

//__________________________________________________________________________________________________________

