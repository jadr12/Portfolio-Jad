//Bouton All
let all1 = document.getElementById('btn4')
let design1 = document.getElementById('btn5')
let site = document.getElementById('btn6')

all1.addEventListener("click",function(){
    var tout = document.querySelectorAll(".manu")
    
    for ( var i =0; i <tout.length; i++){
        document.querySelectorAll(".manu")[i].style.display = "initial";
        all1.classList.add('btn-clique1');
        design1.classList.remove('btn-clique1');
        site.classList.remove('btn-clique1');
       
    }
})


// Bouton Design

design1.addEventListener("click", function () {
   
    let des = document.querySelectorAll(".manu");
 
    for (var i = 0; i < des.length ; i++) {
       
       if (des[i].classList.contains("design1")) {
          document.querySelectorAll(".manu")[i].style.display="block";
          all1.classList.remove('btn-clique1');
          design1.classList.add('btn-clique1');
          site.classList.remove('btn-clique1');
       } 
       else {
          document.querySelectorAll(".manu")[i].style.display="none"; }
    }
 })
 

// Bouton Site

site.addEventListener("click", function () {
   
    let web = document.querySelectorAll(".manu");
 
    for (var i = 0; i < web.length ; i++) {
       
       if (web[i].classList.contains("site")) {
          document.querySelectorAll(".manu")[i].style.display="block";
          all1.classList.remove('btn-clique1');
          design1.classList.remove('btn-clique1');
          site.classList.add('btn-clique1');
       } 
       else {
          document.querySelectorAll(".manu")[i].style.display="none"; }
    }
 })
 