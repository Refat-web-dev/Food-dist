// carousel

const slides = document.querySelectorAll('.offer__slide')
const offer__slider_prev = document.querySelector('.offer__slider-prev')
const offer__slider_next = document.querySelector('.offer__slider-next')
const total_slide = document.querySelector('#total')
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

    if (slideIndex.toString().length < 2 && slideIndex.toString() < '9') {
        current.innerHTML = '0' + (slideIndex + 1)
    }
    else {
        current.innerHTML = slideIndex + 1
    }
    if (total_slide.innerHTML < '9' && total_slide.innerHTML.length === '1') {
        console.log(total_slide.innerHTML.length);
        
    } else {
        total_slide.innerHTML = (slides.length.toString().padStart(2, '0'))
        console.log(total_slide.innerHTML.length);
    }
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
// modal

const btns = document.querySelectorAll("button[data-modal]")
const modal = document.querySelector(".modal")
const modal_close = document.querySelector(".modal__close")

btns.forEach(btn => {

    btn.onclick = () => {
        modal.style.display = "block"

        setTimeout(() => {
            modal.style.opacity = "1"
        }, 200);
    }
    modal_close.onclick = () => {
        modal.style.opacity = "0"

        setTimeout(() => {
            modal.style.display = "none"
        }, 200);
    }

})

// tabs

const tabheader__items = document.querySelectorAll('.tabheader__item')
const tab__contents = document.querySelectorAll(".tabcontent")

let tabIndex = 0

showtabs()
function showtabs(n) {

    tab__contents.forEach(el => {
        el.style.display = "none"

        tab__contents[tabIndex].style.display = "block"
        tab__contents[tabIndex].classList.add('fade')
    })

}

tabheader__items.forEach((btn, i) => {

    btn.addEventListener('click', () => {

        document.querySelector('.tabheader__item_active')?.classList.remove('tabheader__item_active')
        btn.classList.add('tabheader__item_active')
        tabIndex = i
        showtabs()
    })


})