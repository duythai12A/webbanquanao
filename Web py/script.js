/*Làm chuyển độn bằng javascript*/
const slide = document.querySelectorAll(".slider-content-item")
const neXt = document.querySelector(".fa-chevron-right")
const prev = document.querySelector(".fa-chevron-left")
let index = 0;

neXt.addEventListener("click",function(){
    slide[index].classList.remove('active')
    index=(index+1)%slide.length
    slide[index].classList.add('active')
})
prev.addEventListener("click",function(){
    slide[index].classList.remove('active')
    index=(index-1+slide.length)%slide.length
    slide[index].classList.add('active')
})
/*Làm chuyển độn bằng javascript*/
