// Creo variables para interactuar con el menú

const hamburgerLink = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav__header');
const iconHamburger = document.querySelector('.icon__hamburger');
const logo = document.querySelector('.logo__img');
const titleDestinos = document.querySelector('.header__title');
const main = document.querySelector('.main');

console.log(iconHamburger);


// Creo evento para abrir y cerrar el menu mobile

hamburgerLink.addEventListener('click', (e) => {
    e.preventDefault();
    navMenu.classList.toggle('nav__header--active');

    if (navMenu.classList.contains('nav__header--active')) {
        iconHamburger.setAttribute('src', './images/icon-close-menu.svg');
        filtersAdd();
    } else {
        iconHamburger.setAttribute('src', './images/icon-hamburger.svg');
        filtersRemove();
    }
});

//Función para añadir filtros
function filtersAdd() {
    logo.classList.add('filters');
    main.classList.add('filters');
}

//Función para remover filtros
function filtersRemove() {
    logo.classList.remove('filters');
    main.classList.remove('filters');

}


// Evento para remover el nav cuando se cambie el tamaño de la pantalla del
window.addEventListener('resize', () => {

    const isMenuActive = document.querySelector('.nav__header--active');

    if (isMenuActive) {
        navMenu.classList.remove('nav__header--active');
        iconHamburger.setAttribute('src', './images/icon-hamburger.svg');
        filtersRemove();
    }
});



// Evento para dropdown
const serviciosContainer = document.querySelector('.nav__item');
const serviciosLink = document.querySelector('.link__servicios');
const serviciosDrop = document.querySelector('.link__servicios--drop');
const arrow = document.querySelector('.icon__arrow');
const links = document.querySelector('.nav__link');

let isDropdownOpen = false;


// Funcin para mostrar el dropdown con tiempo
function showDropdown() {
    // Agregar clase activa al link y mostrar dropdow
    serviciosContainer.classList.add("show");
    serviciosDrop.classList.add('show');
    arrow.classList.add('rotate');
    serviciosLink.style.color = 'hsl(40, 100%, 64%)';
    isDropdownOpen = true;
};

// Funcion para remover el dropdown 
function hideDropdown() {
    // Quitar clase activa al link, ocultar dropdown y rotar flecha
    serviciosContainer.classList.remove("show");
    serviciosDrop.classList.remove('show');
    arrow.classList.remove('rotate');
    isDropdownOpen = false;
    serviciosLink.style.color = 'white';
};

function toggleDropdown() {
    if (isDropdownOpen) {
        hideDropdown();
    } else {
        showDropdown();
    }
}


// Evento para visualizar el dropdown
serviciosContainer.addEventListener('mouseenter', () => {
    showDropdown();
});

// Evento para ocultar el dropdown 
serviciosContainer.addEventListener('mouseleave', () => {
    setTimeout(() => {
        if (!serviciosDrop.matches(':hover')) {
            hideDropdown();
        }
    }, 200);
});


serviciosLink.addEventListener('click', (event) => {
    event.preventDefault();
    if (!isMobile) {
        toggleDropdown();
    }
});

serviciosLink.addEventListener('touchstart', (event) => {
    event.preventDefault();
    if (isMobile) {
        toggleDropdown();
    }
    
});

document.addEventListener('click', (event) => {
    const target = event.target;
    if (!target.closest('.link__servicios') && !target.closest('.link__servicios--drop') && isDropdownOpen) {
        hideDropdown();
    }
});



// Detectar dispositivo móvil
const isMobile = /Mobi|Android/i.test(navigator.userAgent);


// MODAL

const modal = document.querySelector('.modal__reserva');
const modalHonesta = document.getElementById('modal-honesta');
const closeModal = document.getElementById('close-modal');
const closeModalHonesta = document.getElementById('close__modal--honesta');
const reservar = document.getElementById('reserva');
const lineaHonesta = document.getElementById('linea-honesta');
console.log(modalHonesta);




reservar.addEventListener('click', () => {
    modal.classList.add('modal__reserva--show');
});

closeModal.addEventListener('click', () => {
    modal.classList.remove('modal__reserva--show');
});

lineaHonesta.addEventListener('click', () => {
    modalHonesta.classList.add('modal__reserva--show');
});

closeModalHonesta.addEventListener('click', () => {
    modalHonesta.classList.remove('modal__reserva--show');
});

reservar.addEventListener('touchstart', () => {
    modal.classList.add('modal__reserva--show');
});

closeModal.addEventListener('touchstart', () => {
    modal.classList.remove('modal__reserva--show');
});

lineaHonesta.addEventListener('touchstart', () => {
    modalHonesta.classList.add('modal__reserva--show');
});

closeModalHonesta.addEventListener('touchstart', () => {
    modalHonesta.classList.remove('modal__reserva--show');
});
