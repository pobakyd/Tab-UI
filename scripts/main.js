const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
var defaultActive = $('.header__tab--active')
var header__line = $('.header__tab-line')
console.log([defaultActive])
header__line.style.left = `${defaultActive.offsetLeft}px`
header__line.style.width = `${defaultActive.offsetWidth}px`

var header__tabs = $$('.header__tab')
var content__tabs = $$('.content__tab')
header__tabs.forEach((element,idx) => {
    element.onclick = () => {
        $('.header__tab--active').classList.remove('header__tab--active')
        element.classList.add('header__tab--active')
        $('.content__tab--active').classList.remove('content__tab--active')
        content__tabs[idx].classList.add('content__tab--active')
        header__line.style.left = `${element.offsetLeft}px`
        header__line.style.width = `${element.offsetWidth}px`
    }
});
