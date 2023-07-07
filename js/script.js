// Creo variables para interactuar con el menú

const hamburgerLink = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav__header');
const iconHamburger = document.querySelector('.icon__hamburger');
const logo = document.querySelector('.logo__img');
const titleDestinos = document.querySelector('.header__title');
const main = document.querySelector('.main');
const navContainer = document.querySelector('.nav__container');


// Creo evento para abrir y cerrar el menu mobile

hamburgerLink.addEventListener('click', (e) => {
    e.preventDefault();
    navMenu.classList.toggle('nav__header--active');

    if (navMenu.classList.contains('nav__header--active')) {
        iconHamburger.setAttribute('src', './images/icon-close-menu.svg');
        filtersAdd();
        navContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.644)';
    } else {
        iconHamburger.setAttribute('src', './images/icon-hamburger.svg');
        filtersRemove();
        modal.classList.remove('modal__reserva--show');
        modalHonesta.classList.remove('modal__reserva--show');
        navContainer.style.backgroundColor = 'transparent';
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
    navMenu.classList.remove('filters');

}


// Evento para remover el nav cuando se cambie el tamaño de la pantalla del
window.addEventListener('resize', () => {

    const isMenuActive = document.querySelector('.nav__header--active');

    if (isMenuActive) {
        navMenu.classList.remove('nav__header--active');
        iconHamburger.setAttribute('src', './images/icon-hamburger.svg');
        navContainer.style.backgroundColor = 'transparent';
        filtersRemove();
    }
});



// Evento para dropdown
const serviciosContainer = document.querySelector('.nav__item');
const serviciosLink = document.querySelector('.link__servicios');
const serviciosDrop = document.querySelector('.link__servicios--drop');
const arrow = document.querySelector('.icon__arrow');
const links = document.querySelector('.nav__link');
const navList = document.querySelector('.nav__list');


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
    navList.classList.add('margin');
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
const modal = document.getElementById('modal-reserva');
const modalHonesta = document.getElementById('modal-honesta');
const closeModal = document.getElementById('close-modal');
const closeModalHonesta = document.getElementById('close__modal--honesta');
const reservar = document.getElementById('reserva');
const lineaHonesta = document.getElementById('linea-honesta');
const modalContent = document.querySelector('.modal__reserva--container');


// Funcion para abrir modal con click
function modalClicks() {
    reservar.addEventListener('click', () => {
        modal.classList.add('modal__reserva--show');
        navMenu.classList.add('filters');
    });

    closeModal.addEventListener('click', () => {
        modal.classList.remove('modal__reserva--show');
        navMenu.classList.remove('filters');
    });

    lineaHonesta.addEventListener('click', () => {
        modalHonesta.classList.add('modal__reserva--show');
    });

    closeModalHonesta.addEventListener('click', () => {
        modalHonesta.classList.remove('modal__reserva--show');
    });

}

// Funcion para abrir modal con touch
function modalTouch() {
    reservar.addEventListener('touchstart', () => {
        modal.classList.add('modal__reserva--show');
    });

    closeModal.addEventListener('touchstart', () => {
        modal.classList.remove('modal__reserva--show');
        navMenu.classList.remove('filters');

    });

    lineaHonesta.addEventListener('touchstart', () => {
        modalHonesta.classList.add('modal__reserva--show');
    });

    closeModalHonesta.addEventListener('touchstart', () => {
        modalHonesta.classList.remove('modal__reserva--show');
    });

    navContainer.addEventListener('touchstart', (event) => {
        event.stopPropagation();
    });

    modalContent.addEventListener('touchstart', (event) => {
        event.stopPropagation();
    });
}

modalClicks();
modalTouch();



// CARD BACK
const btnCotizar = document.getElementById('btn-cotizar');
const btnObservacion = document.getElementById('btn-observacion');
const backCard = document.querySelector('.card__back--container');
const backCardLinea = document.querySelector('.card__honesta');
const btnSalir = document.getElementById('btnConfirma');
const btnGracias = document.getElementById('btnGracias');


function resertForm(){
    const fromReserva = document.querySelectorAll('.form__reserva');
    
    fromReserva.forEach((form) => {
        form.reset();
    });
}   



btnCotizar.addEventListener('click', (e) => {
    // e.preventDefault();

    // VALIDAR FORMULARIOS
    const form = document.querySelector('.form__reserva');
    if (form.checkValidity()) {
        e.preventDefault(); // Previene el envío automático del formulario

        // Muestra la modal de confirmación o realiza otras acciones
        showModalConfirmationReserva();
    } else {
        // Si hay campos inválidos, se activarán las validaciones de HTML
        // y se mostrarán los mensajes de error correspondientes
    }
});


// Funcion de mostrar los filtros
// function stylesModalShow(){
//     navMenu.classList.add('filters');
//     iconHamburger.classList.add('filters');
// }

// Funcion para mostrar la  confirmacion de reserva
function showModalConfirmationReserva() {
    // Muestra la modal de confirmación
    modal.classList.remove('modal__reserva--show');
    backCard.classList.add('card__back--active');
    navMenu.classList.add('filters');
    iconHamburger.classList.add('filters');
    console.log('Entras a cotizar');
}

// Evento para salir de la confirmacion de reserva y quitar estilos
btnSalir.addEventListener('click', (e) => {
    e.preventDefault();
    backCard.classList.remove('card__back--active');
    navMenu.classList.remove('filters');
    iconHamburger.classList.remove('filters');
    resertForm();

});

btnGracias.addEventListener('click', (e) => {
    e.preventDefault();
    backCardLinea.classList.remove('card__honesta--active');
    navMenu.classList.remove('filters');
    iconHamburger.classList.remove('filters');
    resertForm();

});

// Funcion para mostrar el soporte de problemas
function showModalSupportLinea(){
    backCardLinea.classList.add('card__honesta--active');
    modalHonesta.classList.remove('modal__reserva--show');
    navMenu.classList.add('filters');
    iconHamburger.classList.add('filters');
    console.log('Entras a soporte');

    
}

// Evennto para la mostrar la card de soporte
btnObservacion.addEventListener('click', (e) => {
    // e.preventDefault();

     // VALIDAR FORMULARIOS
    const form = document.querySelector('.from__linea');
    if (form.checkValidity()) {
        e.preventDefault(); // Previene el envío automático del formulario

        // Muestra la modal de confirmación o realiza otras acciones
        showModalSupportLinea();
    } else {
        // Si hay campos inválidos, se activarán las validaciones de HTML
        // y se mostrarán los mensajes de error correspondientes
    }
});


// 
const inputs = document.querySelectorAll('.inputs');
console.log(inputs);

inputs.forEach((input) => {
    input.addEventListener("focus", () => {
        navContainer.removeEventListener('touchstart', stopPropagation);
    });

    input.addEventListener("blur", () => {
        navContainer.removeEventListener('touchstart', stopPropagation);
    });
});

function stopPropagation(e) {
    e.stopPropagation();
}


// Metodo para cambiar el color de los iconos
function changeColorIcons() {

    const iconClose = document.querySelectorAll('.close__modal--icon');

    iconClose.forEach((closeIcon) => {
        closeIcon.addEventListener('mouseover', () => {
            closeIcon.setAttribute('src', '../images/icon-close-red.svg');
            closeIcon.classList.add('icon-close-active');
        });
        closeIcon.addEventListener('mouseout', () => {
            closeIcon.setAttribute('src', './images/icon-close-modal.svg');
            closeIcon.classList.remove('icon-close-active');
        });
    });

}
changeColorIcons();








