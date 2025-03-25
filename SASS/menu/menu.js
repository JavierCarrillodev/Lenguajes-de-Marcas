const menu = document.querySelector('.menu');
const menuDesplegrable = document.querySelector('.menu_desplegable')

menu.addEventListener('click',()=>{
    menu.classList.toggle("active");
    menuDesplegrable.classList.toggle("click");
})