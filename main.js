const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute(
        "class",
        isOpen ? "ri-close-line" : "ri-menu-3-line"
    );
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});


const modalController = ({modal, btnOpen, btnClose}) => {
    const buttonElems = document.querySelectorAll(btnOpen);
    const modalElem = document.querySelector(modal);


modalElem.style.cssText = `
    display: flex;
    visibility: hidden;
    opacity: 0;
    transition: opacity 300ms ease-in-out;
`;

const closeModal = event => {
    const target = event.target;

    if (target === modalElem || target.closest(btnClose)) {
        
        modalElem.style.opacity = 0;

        setTimeout(() => {
            modalElem.style.visibility = 'hidden';
        }, 300)
    }
};

const openModal = () => {
    modalElem.style.visibility = 'visible';
    modalElem.style.opacity = 1;
};

buttonElems.forEach(btn => {
    btn.addEventListener('click', openModal);
});


modalElem.addEventListener('click', closeModal);

};


modalController({
    modal: '.modal',
    btnOpen: '.btn__tutorials',
    btnClose: '.modal__close'
});

modalController({
    modal: '.modal1',
    btnOpen: '.btn1',
    btnClose: '.modal__close'
});



