const totop=document.querySelector('.button')
console.log(totop)

// scroll top button
window.addEventListener("scroll",()=>{
    if(window.pageYOffset>100){
        totop.classList.add("activee");
    }else{
        totop.classList.remove("activee")
    }
})

let header=document.querySelector('.nav_head')
console.log(header)
window.addEventListener('scroll',()=>{
    if(window.scrollY>50){
        header.classList.add('header-scrolled')
    }else if(window.scrollY<=50){
        header.classList.remove('header-scrolled')

    }
})

$(".carousell").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    margin: 25,
    loop: true,
    center: true,
    dots: false,
    nav: true,
    navText : [
        '<i class="bi bi-chevron-left"></i>',
        '<i class="bi bi-chevron-right"></i>'
    ],
    responsive: {
        0:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        }
    }
});


