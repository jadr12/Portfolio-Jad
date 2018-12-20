//Bouton All
let all1 = document.getElementById('btn4')
let design1 = document.getElementById('btn5')
let site = document.getElementById('btn6')

all1.addEventListener("click",function(){
    var tout = document.querySelectorAll(".manu")
    
    for ( var i =0; i <tout.length; i++){
        document.querySelectorAll(".manu")[i].style.display = "initial";
        all1.style.color="white";
        all1.style.backgroundColor="#979B9E"
        design1.style.color="white";
        design1.style.backgroundColor="#363C42"
        site.style.color="white";
        site.style.backgroundColor="#363C42"
       
    }
})


// Bouton Design

design1.addEventListener("click", function () {
   
    let des = document.querySelectorAll(".manu");
 
    for (var i = 0; i < des.length ; i++) {
       
       if (des[i].classList.contains("design1")) {
          document.querySelectorAll(".manu")[i].style.display="block";
          all1.style.color="white";
          all1.style.backgroundColor="#363C42"
          design1.style.color="white";
          design1.style.backgroundColor="#979B9E"
          site.style.color="white";
          site.style.backgroundColor="#363C42"
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
          all1.style.color="white";
          all1.style.backgroundColor="#363C42"
          design1.style.color="white";
          design1.style.backgroundColor="#363C42";
          site.style.color="white";
          site.style.backgroundColor="#979B9E"
       } 
       else {
          document.querySelectorAll(".manu")[i].style.display="none"; }
    }
 })
 

