

let menu=document.querySelector('#menu')
let close=document.querySelector('#close')

menu.addEventListener('click', function(){
    document.querySelector('ul').style.display='block'
    menu.style.display="none"
    document.querySelector('#close').style.display='block'
})


close.addEventListener('click', function(){
    document.querySelector('ul').style.display='none'
    menu.style.display="block"
    document.querySelector('#close').style.display='none'

})