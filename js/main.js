$('.slider').slick({
dots: true,
arrows: false,
});

function tab(triger = '',selector = ''){
    const tabBtn = document.querySelectorAll(triger);
       const tabContent = document.querySelectorAll(selector);
        tabContent.forEach((block, number) =>{
            block.style.display = 'none';
            block.classList.add('animate__animated','animate__backInLeft')
            if(number == 1) {
                block.style.display = 'block';
            }
        });
        tabBtn.forEach((btn, i) => {
            btn.addEventListener('click', function(){
                tabContent.forEach((block, number) =>{
                    block.style.display = 'none';
                    if(number == i){
                        block.style.display = 'block'; 
                    }
                })
            })
        });     
}
tab(".product-menu__item", ".product-list__wrapper-active");

$(".menu__mobile-btn").on("click",function(){
    $(".list__mobile").slideToggle();
    $(".list__mobile").addClass('animate__animated','animate__backInLeft');
    $(".header__wrapper").slideToggle();
    $(".header__wrapper").addClass('animate__animated',"animate__backInUp");
});




