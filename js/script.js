// carousel

const slides = document.querySelectorAll('.offer__slide')
const offer__slider_prev = document.querySelector('.offer__slider-prev')
const offer__slider_next = document.querySelector('.offer__slider-next')
const current = document.querySelector('#current')

let slideIndex = 0

showSlides(slideIndex)

function showSlides(n) {

    if (slideIndex > slides.length - 1) {
        slideIndex = 0
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1
    }

    current.innerHTML = slideIndex + 1

    slides.forEach(el => el.style.display = "none")

    slides[slideIndex].style.display = "block"
    slides[slideIndex].classList.add('fade')
}


offer__slider_next.onclick = () => {
    slideIndex++

    showSlides(slideIndex)
}
offer__slider_prev.onclick = () => {
    slideIndex--

    showSlides(slideIndex)
}
