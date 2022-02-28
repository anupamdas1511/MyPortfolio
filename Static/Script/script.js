const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");

const checkpiont = 300;
//creating a onscroll event listener
window.addEventListener("scroll", ()=>{
    const currentScroll = window.pageYOffset;
    if(currentScroll <= checkpiont){
        opacity = 1 - currentScroll/checkpiont;
        size = (70 - currentScroll/15);
    }else{
        opacity = 0;
    }
    //Changing the css of the text on scroll
    text1.style.opacity = opacity;
    text2.style.opacity = opacity;
    text1.style.fontSize = size+"px";
    text2.style.fontSize = size+"px";
})