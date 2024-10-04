// Header Section


const header = document.querySelector('.header')
 window.addEventListener('scroll', () => {
    if (window.scrollY >= 100) {
        header.classList.add('header-scroll')
        }
        else if (window.scrollY < 100)
        {
        header.classList.remove('header-scroll')
        }
        })




        const swiper = new Swiper('.slider-wrapper', {
            
            loop: true,
          
            // If we need pagination
            pagination: {
              el: '.swiper-pagination',
            },
          
            // Navigation arrows
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          
            
          });