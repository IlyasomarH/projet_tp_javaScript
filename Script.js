
// Exercice 1
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


// Exercice 2

// changer le couleur

    bodyclass=document.querySelector('body').className
    
    if(bodyclass=='service'){
       

        var btn = document.querySelector('button');

        function random(number) {
          return Math.floor(Math.random()*(number+1));
        }
        
        btn.addEventListener('click', function(){
            var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
          document.body.style.backgroundColor = rndCol;
          document.querySelector('button+span').innerHTML=rndCol
        })

   }










// Exercice 3

if(bodyclass=='contact')
{
var form = document.querySelector('form');
var fname = document.getElementById('fname');
var lname = document.getElementById('lname');
var submit = document.getElementById('submit');
var para = document.querySelector('form + p');

form.onsubmit = function(e) {
  if (fname.value === '' || lname.value === '') {
    e.preventDefault();

    fname.id="ereur"
    lname.id="ereur"
    document.querySelector("span#messageErreur").style.display="block"

  }
}







}


  //  Exercice 4


  let suivant=document.querySelector('.suivant')
  let precendent=document.querySelector('.precedent')
  let imgsilde= document.querySelectorAll('section.slider img')

  let etape=0


  function enleveActiveImg(){
    for(let i=0; i<imgsilde.length; i++){

      imgsilde[i].classList.remove('active')

    }
  }



suivant.addEventListener('click', function(){
  enleveActiveImg()
  etape++
  if(etape>=imgsilde.length)
  {
    etape=0
    
  }
  imgsilde[etape].classList.add('active')
})


precendent.addEventListener('click', function(){
  enleveActiveImg()
  etape--
  if(etape<0)
  {
    etape=imgsilde.length-1
    
  }
  imgsilde[etape].classList.add('active')
})







// Exercice 5


setInterval(()=>{
 
    enleveActiveImg()
    etape++
    if(etape>=imgsilde.length)
    {
      etape=0
      
    }
    imgsilde[etape].classList.add('active')
    if(etape<0)
    {
      etape=imgsilde.length-1
      
    }
  

},3000)

