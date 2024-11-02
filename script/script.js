const mobileBtn = document.querySelector('.mobile-btn')

mobileBtn.addEventListener('click', () => {
    const mobileMenu = document.querySelector('.mobile-menu')
    if(mobileMenu.classList.contains('active')){
        mobileMenu.classList.remove('active')
        cross.classList.add('hidden')
        burgerMenu.classList.remove('hidden')
    } else {
        mobileMenu.classList.add('active')
        cross.classList.remove('hidden')
        burgerMenu.classList.add('hidden')
    }
})