let sections = document.querySelectorAll('#modulo');

window.onscroll = () => {
    sections.forEach(sec => { 
        let top = window.scrollY;
        let offset = sec.offsetTop - 200;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height ){
            sec.classList.add ('show-animate');
        }
        else {
            sec.classList.remove ('show-animate');
        }
     } )
}