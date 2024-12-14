// theme toggle
const toggleBtn = document.querySelectorAll('#toggle-btn')

const theme = localStorage.getItem('theme')

theme && document.body.classList.add(theme)

const themeToggle = () => {

    toggleBtn.forEach((btn) => {
        btn.addEventListener('click', () => {
            document.body.classList.toggle('light-mode')
            if (document.body.classList.contains('light-mode')) {
                localStorage.setItem('theme', 'light-mode')
            } else {
                localStorage.removeItem('theme')
                document.body.removeAttribute('class')
            }
        })
    })
}

export default themeToggle