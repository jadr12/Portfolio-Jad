let all = document.getElementById("btn1")
let langage = document.getElementById("btn2")
let design = document.getElementById("btn3")


//Bouton All

all.addEventListener("click",function(){
    var tous = document.querySelectorAll(".skills")
    
    for ( var i =0; i <tous.length; i++){
        document.querySelectorAll(".skills")[i].style.display = "initial";
        all.classList.add('btn-clique');
        langage.classList.remove('btn-clique');
        design.classList.remove('btn-clique');
       
    }
})


// Bouton Langage

langage.addEventListener("click", function () {
   
   let skillslangage = document.querySelectorAll(".skills");

   for (var i = 0; i < skillslangage.length ; i++) {
      
      if (skillslangage[i].classList.contains("langage")) {
         document.querySelectorAll(".skills")[i].style.display="block";
         all.classList.remove('btn-clique');
         langage.classList.add('btn-clique');
         design.classList.remove('btn-clique');
      } 
      else {
         document.querySelectorAll(".skills")[i].style.display="none"; }
   }
})






// Bouton Design

design.addEventListener("click", function () {
   
   let skillsDESIGN = document.querySelectorAll(".skills");

   for (var i = 0; i < skillsDESIGN.length ; i++) {
      
      if (skillsDESIGN[i].classList.contains("design")) {
         document.querySelectorAll(".skills")[i].style.display="block";
         all.classList.remove('btn-clique');
         langage.classList.remove('btn-clique');
         design.classList.add('btn-clique');
      } 
      else {
         document.querySelectorAll(".skills")[i].style.display="none"; }
   }
})



