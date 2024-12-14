// mobile menu
const headerBar = document.querySelector('.header_bar')
const mobileNav = document.querySelector('.mobile-nav')
const mobileNav_link = document.querySelectorAll('.mobile-nav_link')

let ismobileNav = false

const MobileNav = () => {

    headerBar.addEventListener('click', () => {
        if (!ismobileNav) {
            mobileNav.style.display = 'flex'
            document.body.style.overflowY = 'hidden'
            ismobileNav = !ismobileNav
        } else {
            mobileNav.style.display = 'none'
            document.body.style.overflowY = 'auto'
            ismobileNav = !ismobileNav
        }
    })

    mobileNav_link.forEach((link) => {
        link.addEventListener('click', () => {
            mobileNav.style.display = 'none'
            document.body.style.overflow = 'auto'
            ismobileNav = !ismobileNav
        })
    })
} 

export default mobileNav