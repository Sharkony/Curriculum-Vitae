const burgerBtn = document.querySelector('.menu');
const navigation = document.querySelector('.primary-navigation');
const navigationLink = document.querySelectorAll('.navigation_item');
const theme = document.querySelector('.dark-theme');

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle("open");
    navigation.classList.toggle("open");
});

navigationLink.forEach((navigation_item) => {
    navigation_item.addEventListener('click', ()=>{
        burgerBtn.classList.remove("open");
        navigation.classList.remove("open"); 
    })
})

theme.addEventListener('click', ()=> {
    if (theme.classList.contains('dark-theme')) {
        theme.classList.remove('dark-theme');
        theme.classList.add('light-theme');
        document.documentElement.style.setProperty('--color-text', '#000000');
        document.documentElement.style.setProperty('--color-background', '#ffffff');
        document.documentElement.style.setProperty('--color-gold', '#000080');
    } else {
        theme.classList.add('dark-theme');
        theme.classList.remove('light-theme');
        document.documentElement.style.setProperty('--color-text', '#ffffff');
        document.documentElement.style.setProperty('--color-background', '#000000');
        document.documentElement.style.setProperty('--color-gold', '#bdae82');
    }
})
