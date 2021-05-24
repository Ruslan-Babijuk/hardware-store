window.onload = function(){
    
    
    
    
    
//СЛАЙДЕР
 
const swiperSale = new Swiper('.swiper-sale', {
    navigation: {
        nextEl: '.swiper-button-next-sale',
        prevEl: '.swiper-button-prev-sale',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        dragSize: 'auto',

      },

    slidesPerView: 'auto',
    watchOverflow: true,
});

const swiperNew = new Swiper('.swiper-new', {
    navigation: {
        nextEl: '.swiper-button-next-new',
        prevEl: '.swiper-button-prev-new',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        dragSize: 'auto',

      },

    slidesPerView: 'auto',
    watchOverflow: true,
});

const swiperViews = new Swiper('.swiper-views', {
    navigation: {
        nextEl: '.swiper-button-next-views',
        prevEl: '.swiper-button-prev-views',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        dragSize: 'auto',

      },

    slidesPerView: 'auto',
    watchOverflow: true,
});




const swiperGalery= new Swiper('.swiper-galery', {
    navigation: {
        nextEl: '.swiper-button-next-galery',
        prevEl: '.swiper-button-prev-galery',
    },
    pagination: {
        el: '.swiper-pagination-galery',
        type: 'bullets',
        clickable: true,
    },
    loop: true,
    slidesPerView: 1,
    watchOverflow: true,

});


//СЛАЙДЕР КОНЕЦ
    



// РАЗВОРАЧИВАНИЕ ЭЛЕМЕНТОВ НАЧАЛО 

const unfoldingButton = document.querySelectorAll('.unfolding');
    
    if(unfoldingButton.length > 0){
        for (let i = unfoldingButton.length - 1; i >= 0; i--) {
            unfoldingButton[i].addEventListener('click', function() {
                this.classList.toggle('active');
                let content = this.nextElementSibling;
                activeUnfolding(content);
            });
        } 
    }

const activeUnfolding = (body) => {
    if (body.style.maxHeight) {
        body.style.maxHeight = null;
    }else{
        body.style.maxHeight = body.scrollHeight + 'px';
    }

    body.addEventListener('click', function() {
        body.style.maxHeight = body.scrollHeight + 'px';

    });

    body.classList.toggle('active');
}
// РАЗВОРАЧИВАНИЕ ЭЛЕМЕНТОВ КОНЕЙ
    

// РАЗВОРАЧИВАНИЕ ТЕКСТА НАЧАЛО 
const scrolTextBtn = document.querySelectorAll('.scrol-text');

    if(scrolTextBtn.length > 0){

        for (let i = scrolTextBtn.length - 1; i >= 0; i--) {

            let scrolText = scrolTextBtn[i].previousElementSibling;
            let scrolTextShow = Number(getComputedStyle(scrolText).lineHeight.replace('px',''));
            scrolText.style.maxHeight = scrolTextShow * 3 + 'px';
            console.log(scrolTextShow); 

            scrolTextBtn[i].addEventListener('click', function() {
                
                this.classList.toggle('active');

                if(this.classList.contains('active')){
                    this.innerHTML = 'Cкрыть';
                    scrolText.classList.add('active');
                    scrolText.style.maxHeight = scrolText.scrollHeight  + 'px';

                }else{
                    this.innerHTML = 'Развернуть';
                    scrolText.classList.remove('active');
                    scrolText.style.maxHeight = scrolTextShow * 3 + 'px';

                }

            });
        } 
    }

// РАЗВОРАЧИВАНИЕ ТЕКСТА КОНЕЦ

// МЕНЮ БУРГЕР


const burgerMenu = document.getElementById('burger');
const burgerBody = document.getElementById('burger__body');

if (burgerMenu) {
    
    burgerMenu.addEventListener('click', () => {
         toggleBurger();
    })



    const toggleBurger = () =>{
        document.body.classList.toggle('lock');
        burgerMenu.classList.toggle('active');
        burgerBody.classList.toggle('active');
    }
}

//МЕНЮ БУРГЕР КОНЕЦ
    



//МЕНЮ ПРИ СКРОЛЕ 

let prevScrollpos = window.pageYOffset;
const header = document.getElementById('header');
const topNav = document.getElementById('top-nav');
const topNavHeight = topNav.scrollHeight;

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
      if (currentScrollPos > topNavHeight){
        header.classList.add('fixed');
        topNav.style.display = 'none';
        document.body.style.paddingTop = topNavHeight + header.scrollHeight + 'px';
    
      }else {
        header.classList.remove('fixed');
        topNav.style.display = 'block';
        document.body.style.paddingTop = '0px';
      }

      if(currentScrollPos > 175){
          if (prevScrollpos > currentScrollPos) {
            header.style.top = "0";

          } else {
            header.style.top = "-150px";
          }
      }
      prevScrollpos = currentScrollPos;
}

//МЕНЮ ПРИ СКРОЛЕ КОНЕЦ


// КОЛИЧЕСТВО ТОВАРОВ НАЧАЛО

const quantityInputs = document.querySelectorAll('.quantity__input > input');


if(quantityInputs.length > 0){
    for (let i = quantityInputs.length - 1; i >= 0; i--) {
        quantityInput = quantityInputs[i];
        parentInput = quantityInput.parentElement;
       
        let deleteInput = parentInput.previousElementSibling;
        let addInput = parentInput.nextElementSibling;
        let valueInput = quantityInput.value;

       
        deleteInput.addEventListener('click', () => {
            if (quantityInput.value > 0) {
                quantityInput.value--;
            }
        });
        
        addInput.addEventListener('click', () => {
            quantityInput.value++;
        });
       
    }
}

// КОЛИЧЕСТВО ТОВАРОВ КОНЕЦ


// ПОЯВЛЕНИЕ ШАГА ФОРМЫ НАЧАЛО 


// ПОЯВЛЕНИЕ ШАГА ФОРМЫ КОНЕЦ 


}