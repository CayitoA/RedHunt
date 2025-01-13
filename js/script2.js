let sections = document.querySelectorAll('#mensaje');

window.onscroll = () => {
    sections.forEach(sec => { 
        let top = window.scrollY;
        let offset = sec.offsetTop - 200;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height ){
            sec.classList.add ('show-animacion');
        }
        else {
            sec.classList.remove ('show-animacion');
        }
     } )
}