const btnOpen = document.querySelector('.currentTime__searchPlaces');
const btnClose = document.querySelector('.searchPlaces>i');
const searchPlaces = document.querySelector('.searchPlaces');

btnOpen.addEventListener('click', () => {
    searchPlaces.classList.add('searchPlaces-active');
})

btnClose.addEventListener('click', () => {
    searchPlaces.classList.remove('searchPlaces-active');
})

