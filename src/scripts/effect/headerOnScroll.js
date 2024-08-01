export default function headerOnScroll() {
    document.addEventListener('scroll', ()=> {
        const header = document.querySelector('header');
        if(window.scrollY > 0) {
            header.classList.add('onscroll');
        } else {
            header.classList.remove('onscroll');
        }
    })
}