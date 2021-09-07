const menu = document.querySelector('.navTop');

function toggleMenu(x){
    x.classList.toggle('change');
    menu.classList.toggle('change');
}

// start testimonial slideshow 
var slideIndex = 1;
showSlides(slideIndex);

//next previous controls
function plusSlides(n){
    showSlides(slideIndex += n);
}

//dot controls
function currentSlide(n){
    showSlides( slideIndex = n);
}

//show slides main function
function showSlides(n){
    var i;
    var slides = document.getElementsByClassName('mySlides');

    if(n > slides.length){
        slideIndex = 1;
    }
    if(n < 1){
        slideIndex = slides.length;
    }

    for(i = 0; i < slides.length ; i++){
        slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display= "block";
}
//end testimonials slideshow

//start faq accordion
var acc = document.getElementsByClassName('accordion');
console.log(acc);
for(let i = 0; i < acc.length; i++){
    acc[i].addEventListener('click',function(){
        this.classList.toggle('active');
        var panel = this.nextElementSibling;
        console.log(panel.scrollHeight);
        console.log(Boolean(0));
        if(panel.style.maxHeight){
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight+'px'
        }
    })
}
//end faq accordion

