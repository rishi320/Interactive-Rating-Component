const startState = document.querySelector(".state-start");
const endState = document.querySelector(".state-end");
const ratingBtn = document.querySelector(".submit");
const ratingPs = document.querySelectorAll(".number"); 
const ratingDivP = document.querySelector(".selected-rating > p");

let rating = "";


ratingPs.forEach((p,i)=>{
   p.addEventListener("click", function(){
       rating = p.innerHTML;
       ratingDivP.innerHTML = `You selected ${rating} out of 5`;
       p.style.backgroundColor = "hsl(217, 12%, 63%)";
   });

   p.addEventListener("mouseover", function(){
       p.style.backgroundColor = "hsl(25, 97%, 53%)";
       p.style.cursor = "pointer";
   })

   p.addEventListener("mouseout", function(){
    p.style.backgroundColor = "#465362";
   })
});




ratingBtn.onclick = function(){
    
    if(rating === ""){
        alert("Please give a rating")
    } else{
        if(endState.style.display === ""){
            
            endState.style.display = "block";
            startState.style.display ="none"; 
        }
    }
}

ratingBtn.addEventListener("mouseover", function(){
    ratingBtn.style.backgroundColor = "hsl(0, 0%, 100%)";
    ratingBtn.style.color = "hsl(25, 97%, 53%)";
    ratingBtn.style.cursor = "pointer";
})

ratingBtn.addEventListener("mouseout", function(){
    ratingBtn.style.backgroundColor = "hsl(25, 97%, 53%)";
    ratingBtn.style.color = "hsl(0, 0%, 100%)";
})


