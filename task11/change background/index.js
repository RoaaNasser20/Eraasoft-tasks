let first=document.querySelector('.firstContainer');
let second=document.querySelector('.secondContainer');
let firstclk=document.querySelector('.mainImg .mainphoto')
let secondclk=document.querySelector('.mainImg .secondphoto')
first.addEventListener('click',()=>
{
  firstclk.style.opacity='1';
}
)
second.addEventListener('click',()=>
{
   secondclk.style.opacity='1';
   firstclk.style.opacity='0';
}
)