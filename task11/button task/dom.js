let btn=document.querySelector('#successBtn');
let container=document.querySelector('.container')
let okBtn=document.querySelector('#okBtn')
function openMsg()
{
   container.classList.add('show');
}
function closeMsg()
{
    container.classList.remove('show');
}
btn.addEventListener('click',()=>
{
    openMsg();
})
okBtn.addEventListener('click',()=> 
{
  closeMsg();
}) 