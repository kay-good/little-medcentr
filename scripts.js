const buttonNext = document.querySelector(".quiz-next")
const buttonBack = document.querySelector(".quiz-back")

let step = 1

buttonNext.addEventListener('click', () => countStep(1))
buttonBack.addEventListener('click', () => countStep(-1))

function countStep(num) {
    step = step + num
    createStep(step)
}

function createStep(number) {
    const steps = document.querySelectorAll('.step')
    const quizImage = document.querySelector(".quiz-image")
    const quizQuestionNumber = document.querySelector(".quiz-question-number")
    const quizQuestionText = document.querySelector(".quiz-question-text")
    const quizAnswer = document.querySelector(".quiz-answer")

    steps.forEach(it => {
        it.classList.remove('current-step')
    })

    if (number === 1) {
        steps[0].classList.add('current-step')
        quizImage.setAttribute("src", "./img/step1-img.jpg")
        quizQuestionNumber.innerText = 1
        quizQuestionText.innerHTML = 'Чем занимается ваша организация?'
        quizAnswer.innerHTML = `<textarea placeholder="Введите ответ" cols="30" rows="5"></textarea>`

        buttonBack.classList.add('hidden')
    }
    if (number === 2) {
        steps[1].classList.add('current-step')
        quizImage.setAttribute("src", "./img/step2-img.jpg")
        quizQuestionNumber.innerText = 2
        quizQuestionText.innerHTML = 'Укажите вид необходимой услуги<br>(Можно выбрать несколько вариантов)'
        quizAnswer.innerHTML = `<div class="answer-col">
        <div class="check-container">
            <input type="checkbox" name="" id="">
            <div class="checkbox-text">Предварительный/периодический медицинский осмотр</div>
        </div>
        <div class="check-container">
            <input type="checkbox" name="" id="">
            <div class="checkbox-text">Выездной медицинский осмотр (профосмотр)</div>
        </div>
        <div class="check-container">
            <input type="checkbox" name="" id="">
            <div class="checkbox-text">Личные медицинские книжки (ЛМК)</div>
        </div>
        <div class="check-container">
            <input type="checkbox" name="" id="">
            <div class="checkbox-text">Психиатрическое освидетельствование</div>
        </div>
        <div class="check-container">
            <input type="checkbox" name="" id="">
            <div class="checkbox-text">Предрейсовые/послерейсовые профосмотры</div>
        </div>
        <div class="check-container">
            <input type="checkbox" name="" id="">
            <div class="checkbox-text">Предсменные/послесменные профосмотры</div>
        </div>
    </div>
    <div class="answer-col">
        <div class="check-container">
            <input type="checkbox" name="" id="">
            <div class="checkbox-text">Организация здравпункта на предприятии</div>
        </div>
        <div class="check-container">
            <input type="checkbox" name="" id="">
            <div class="checkbox-text">Диспансеризация</div>
        </div>
        <div class="check-container">
            <input type="checkbox" name="" id="">
            <div class="checkbox-text">Вакцинация</div>
        </div>
        <div class="check-container">
            <input type="checkbox" name="" id="">
            <div class="checkbox-text">Помощь в организации аттестации рабочих мест (СОУТ)</div>
        </div>
        <div class="check-container">
            <input type="checkbox" name="" id="">
            <div class="checkbox-text">Тендерный отдел</div>
        </div>
        <div class="check-container">
            <input type="checkbox" name="" id="">
            <div class="checkbox-text">Я не знаю, нужна помощь в подборе</div>
        </div>
    </div>`

        buttonBack.classList.remove('hidden')
    }
    if (number === 3) {
        steps[2].classList.add('current-step')
        quizImage.setAttribute("src", "./img/step3-img.jpg")
        quizQuestionNumber.innerText = 3
        quizQuestionText.innerHTML = `Укажите количество сотрудников, которым нужно<br> 
        провести профосмотр.`
        quizAnswer.innerHTML = `<textarea placeholder="Введите число" cols="30" rows="5"></textarea>`

    }
    if (number === 4) {
        steps[3].classList.add('current-step')
        quizImage.setAttribute("src", "./img/step4-img.jpg")
        quizQuestionNumber.innerText = 4
        quizQuestionText.innerHTML = `Вы планируете пройти профосмотр в одном из наших медцентров
        или<br> требуется выездная бригада?`
        quizAnswer.innerHTML = `<div class="quiz-radio">
            <input type="radio" id="" name="radio1" tabindex="1">
            <span>В медцентре</span>
            <input type="radio" id="" name="radio1" tabindex="2">
            <span>Требуется выездная бригада</span>
        </div>`

    }
    if (number === 5) {
        const quizContainer = document.querySelector('.quiz-container')
        quizContainer.innerHTML = `<div class="last-step">
        <div class="last-step-header">Введите номер телефона, и мы вышлем вам расчет стоимости профосмотра и коммерческое предложение</div>
        <div class="offer-text1 offer-text-mobile">Оставьте заявку, и мы предоставим полный план профосмотра <br>с расчетом
                        итоговой стоимости, подходящий именно вашей организации</div>
        <div class="offer-input-phone open">
            <input class="offer-input step-text" type="tel" name="offer-phone" id="offer-phone" placeholder=" "
                required />
            <label for="offer-phone">Ваш номер телефона</label>
        </div>
        <button class="offer-button step-text">Получить коммерческое предложение</button>
        <div class="offer-text2 step-text open">Передавая информацию сайту, вы принимаете условия</div>
        <div class="offer-text3 step-text open"><a href="#">Политики защиты персональной информации</a></div>
        
    </div>`
    }
}


const mobileMenu = document.querySelector('.mobile-menu')
mobileMenu.addEventListener('click', () => openMenu())

function openMenu() {
    const menuImage = document.getElementById('mobile-menu-image')
    const nav = document.querySelector('.nav-wrapper');
    if (nav.classList.contains('nav-wrapper-open')) {
        nav.classList.remove('nav-wrapper-open')
        menuImage.setAttribute("src", "./img/mobile-menu.svg")
    } else {
        nav.classList.add('nav-wrapper-open')
        menuImage.setAttribute("src", "./img/mobile-close-button.svg")
    }
}

const mobileMenuDropdown = document.querySelector('.menu-dropdown-mobile')
mobileMenuDropdown.addEventListener('click', () => openMenuDropdown())

function openMenuDropdown() {
    const dropdown = document.querySelector('.dropdown-mobile')
    if (dropdown.classList.contains('open')) {
        dropdown.classList.remove('open')
    } else {
        dropdown.classList.add('open')
    }
}


const closeQuizButton = document.querySelector('.quiz-close-button')
closeQuizButton.addEventListener('click', () => {
    const quizElement = document.querySelector('.quiz')
    quizElement.style.display = "none"
})

const openQuizButton = document.querySelector('.mobile-quiz-activation')
openQuizButton.addEventListener('click', () => {
    const quizElement = document.querySelector('.quiz')
    quizElement.style.display = "block"
})


