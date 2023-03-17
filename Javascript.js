const priveChange = document.querySelector('.checkbox')
const basic= document.querySelector('.basic')
const professional = document.querySelector('.professional-tit')
const master = document.querySelector('.master')


priveChange.addEventListener("change", (p)=>{
    if(basic.textContent=="$ 19.99"){
        basic.textContent="$ 199.99"
        professional.textContent="$ 249.99"
        master.textContent="$ 399.99"
    }
    else{
        basic.textContent="$ 19.99"
        professional.textContent="$ 24.99"
        master.textContent="$ 39.99"
    }

})
document.querySelector(".darkctrl").addEventListener("change", function(){
    document.body.classList.toggle("darkmode")
    document.body.classList.toggle("bg-img")
})