const slider=document.querySelector(".slider");
const sliderValue=document.querySelector(".slider-value")

slider.addEventListener("change",()=>{
    sliderValue.innerText=slider.value;
})