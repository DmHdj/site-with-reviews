'use strict';

window.addEventListener('DOMContentLoaded', () => {
    // Modal

    const btnModalOpen = document.querySelector('[data-modal]'),
          modal = document.querySelector('.modal'),
          btnModalClose = modal.querySelector('[data-close]'),
          modalTimerId = setTimeout(openModal, 5000);

    function openModal () {
        modal.classList.toggle('show');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
    }

    function closeModal () {
        modal.classList.toggle('show');
        document.body.style.overflow = '';  
    }

    function showModalByScroll () {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
        openModal();
        window.removeEventListener('scroll', showModalByScroll);
        }
    }

    btnModalOpen.addEventListener('click', openModal);

    btnModalClose.addEventListener('click', closeModal);

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
        closeModal();       
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
        closeModal();
        }
    });

    window.addEventListener('scroll', showModalByScroll);

    // hamburger

    const menu = document.querySelector('.menu_list'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        });
    });

});
