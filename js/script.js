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
    current.innerHTML = slideIndex + 1 < 10 ? '0' + (slideIndex + 1) : slideIndex + 1
    total_slide.innerHTML = slides.length < 10 ? '0' + slides.length : slides.length

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

// calc

const genderBtns = document.querySelectorAll('#gender .calculating__choose-item')
const inputs = document.querySelectorAll('.calculating__choose_medium .calculating__choose-item')
const all_act_btns = document.querySelectorAll('.calculating__choose_big .calculating__choose-item')
const calc_result = document.querySelector('.calculating__result span')
let BMR = 0
const user_data = {
    gender: 'woman'
}

genderBtns.forEach(btn => (
    btn.onclick = () => {
        let gender = btn.getAttribute("data-gender")
        user_data.gender = gender

        setTimeout(() => {
            genderBtns.forEach(btn => btn.classList.remove('calculating__choose-item_active'))
        }, 50);

        setTimeout(() => {
            btn.classList.add('calculating__choose-item_active')
        }, 200);
    }
))

inputs.forEach(input => [
    input.oninput = () => {
        user_data[input.id] = input.value
    }
])

all_act_btns.forEach(btn => {
    btn.onclick = () => {
        let act = btn.getAttribute('id')
        user_data.activity = act
        setTimeout(() => {
            all_act_btns.forEach(btn => btn.classList.remove('calculating__choose-item_active'))
        }, 50);

        setTimeout(() => {
            btn.classList.add('calculating__choose-item_active')
        }, 200);


        inputs.forEach(input => {
            user_data.gender === 'man' ? BMR = 88.36 + (13.4 * user_data.weight) + (4.8 * user_data.height) - (5.7 * user_data.age) : BMR = 447.6 + (9.2 * user_data.weight) + (3.1 * user_data.height) - (4.3 * user_data.age)

            switch (act) {
                case 'low':
                    BMR *= 1.2
                    break;

                case 'small':
                    BMR *= 1.375
                    break;

                case 'medium':
                    BMR *= 1.55
                    break;

                case 'high':
                    BMR *= 1.725
                    break;

                default:
                    break;
            }
            if (input.value.length === 0) {
                input.style.backgroundColor = "red"
                calc_result.innerHTML = '0'
            }
            else{
                input.style.backgroundColor = "#FFF"
                calc_result.innerHTML = BMR.toFixed()
            }
        })
    }
})