const text = "Frontend Developer";

let index = 0;
let deleting = false;

function typeEffect(){

const element = document.querySelector(".typing");

if(!deleting){

element.textContent = text.substring(0,index+1);
index++;

if(index === text.length){

deleting = true;

setTimeout(typeEffect,1500);

return;

}

}

else{

element.textContent = text.substring(0,index-1);
index--;

if(index === 0){

deleting = false;

}

}

setTimeout(typeEffect,120);

}

typeEffect();



const toggle = document.getElementById("modeToggle");

toggle.onclick = () => {

document.body.classList.toggle("light-mode");

};



const sliders = document.querySelectorAll(".slider");

sliders.forEach(slider=>{

let images = slider.querySelectorAll("img");

let index = 0;

images[index].style.display="block";

setInterval(()=>{

images[index].style.display="none";

index++;

if(index === images.length){

index = 0;

}

images[index].style.display="block";

},2500);

});