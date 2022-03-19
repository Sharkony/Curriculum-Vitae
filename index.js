const burgerBtn = document.querySelector('.menu');
const navigation = document.querySelector('.primary-navigation');
const navigationLink = document.querySelectorAll('.navigation_item');

const theme = document.querySelector('.theme-btn');
const bodyAtrbt = document.querySelector('body');

import i18Obj from './assets/modules/translate.js';
const enLang = document.querySelector('#en');
const ruLang = document.querySelector('#ru');
const textTranslate = document.querySelectorAll('[data-i18]');


burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle("open");
    navigation.classList.toggle("open");
});

navigationLink.forEach((navigation_item) => {
    navigation_item.addEventListener('click', ()=>{
        burgerBtn.classList.remove("open");
        navigation.classList.remove("open"); 
    })
});

theme.addEventListener('click', ()=> {
    const themeColor = theme.getAttribute('data-themeColor')
    if (themeColor === 'dark') {
        theme.setAttribute('data-themeColor', 'light')
        bodyAtrbt.setAttribute('data-themeColor', 'light')
    } else {
        theme.setAttribute('data-themeColor', 'dark')
        bodyAtrbt.setAttribute('data-themeColor', 'dark')
    }
});

ruLang.addEventListener('click', () => {
    textTranslate.forEach(element => {
    const key = element.getAttribute('data-i18');
    element.innerHTML = i18Obj.ru[key];
})
})
enLang.addEventListener('click', () => {
    textTranslate.forEach(element => {
    const key = element.getAttribute('data-i18');
    element.innerHTML = i18Obj.en[key];
})
})




/* theme.addEventListener('click', ()=> {
    if (theme.classList.contains('dark-theme')) {
        theme.classList.remove('dark-theme');
        theme.classList.add('light-theme');
        document.documentElement.style.setProperty('--color-text', '#000000');
        document.documentElement.style.setProperty('--color-background', '#ffffff');
        document.documentElement.style.setProperty('--color-gold', '#bb57b3');
    } else {
        theme.classList.add('dark-theme');
        theme.classList.remove('light-theme');
        document.documentElement.style.setProperty('--color-text', '#ffffff');
        document.documentElement.style.setProperty('--color-background', '#000000');
        document.documentElement.style.setProperty('--color-gold', '#bdae82');
    }
}) */

