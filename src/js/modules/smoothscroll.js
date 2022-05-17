// const navbar = document.querySelector('.header__nav')
export function smooth() {
    // const links = document.querySelectorAll('.header__button')
    links.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault()
            const section = document.querySelector(link.getAttribute('href'))
            if (section) {
                section.scrollIntoView({
                    block: 'start',
                    behavior: 'smooth'
                })
                seamless.scrollIntoView(section, {
                    behavior: "smooth",
                    block: "start",
                    inline: "center",
                });
            }
        })
    })
} 