const menuBtn=document.querySelector(".drawar-menu-btn");
const drawar=document.querySelector(".drawar-container");
const closeBtn=document.querySelector(".drawar-close");

menuBtn.addEventListener('click',()=>{
    drawar.classList.add("drawer-trans-on");
    drawar.classList.remove("drawer-trans-off");
});

closeBtn.addEventListener('click',()=>{
    drawar.classList.add("drawer-trans-off");
    drawar.classList.remove("drawer-trans-on");
})