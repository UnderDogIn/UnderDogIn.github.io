////DROPDOWN//////
let dropWord = document.querySelector('#dropWord')
let dropList = document.querySelector('.dropdowns')
dropTriger = false
dropWord.addEventListener('click', function(){
dropTriger = !dropTriger
let winCroll =  window.addEventListener('scroll', function(){
    if (winCroll = true){
        dropList.style.display =  'none';
        dropTriger = false
    }
})
if (dropTriger) {
    dropList.style.display =  'flex';
}
else{
    dropList.style.display =  'none';
}
})

//////SCROLL/////////
document.querySelector('.scroll-down').addEventListener('click', function(){
    const el = document.getElementById('myScroll')
    el.scrollIntoView({block:"center", inline:'center', behavior:"smooth"})
})

////////MODALWINDOW////////
let modal = document.querySelector('.modal-account')
let modalWindow = modal.querySelector('.modal-account__window')
let accountBtn = document.querySelector('.menu__btn_login')

accountBtn.onclick = function(){
    modal.style.display = "flex"
}

modal.onclick = function(event){
    if (event.target == modal){
        modal.style.display = "none"
    }
}


////////////SLIDER///////////
let slider = document.querySelector('.price').offsetWidth;
let testBtn = document.querySelector('.testBtn');
let sliderPage = document.querySelectorAll(".price-block")

