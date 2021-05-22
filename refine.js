//======== Refine Animation ========//

let icon = document.getElementById('filter-icon');
let animate = document.getElementById('form');

icon.addEventListener('click', function(){
   if(animate.style.display === "none"){
       animate.style.display = "block"
   } else {
       animate.style.display = "none"
   }
    
})

//animate.style.opacity = 100;


//======== Refine Sort ========//