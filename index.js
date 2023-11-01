const menu=document.querySelector(".menu_bar");
const mobile=document.querySelector(".mobile-nav");
menu.addEventListener("click",function(){
    menu.classList.toggle("is-active");
    mobile.classList.toggle("is-active");
});
mobile.addEventListener('click', (e) => {
    if (e.target.closest('a'))
menuButter.classList.remove('active');
 mobileNav.classList.remove('is-active');
})