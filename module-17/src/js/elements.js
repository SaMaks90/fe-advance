const   html = document.querySelector('#keyboard__template').textContent.trim(),
        container = document.querySelector('.keyboard'),
        buttons = Array.from(document.querySelectorAll('.keyboard__btn')),
        langSelect = document.querySelectorAll('input[name="language"]'),
        htmlExercies = document.querySelector('#keyboard__exercies').textContent.trim(),
        containerExercies = document.querySelector('.keyboard__exercies'),
        timerOutput = document.querySelector(".timer"),
        error = document.querySelector('.error'),
        errorLast = document.querySelector('.error__last'),
        result = document.querySelector('.result')
;

let lastObj = {
        lastPressKey: null
}

export {html, container, buttons, lastObj, langSelect, htmlExercies, containerExercies, timerOutput, error, errorLast, result};