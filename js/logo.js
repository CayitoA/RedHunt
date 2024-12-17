function animacion() {
    let textoAnimacion = [
        ["M", "a", "r", "k", "e", "t", "i", "n","g"],
        ["C", "r", "e", "a", "t", "i", "v", "e"],
        ["L", "e", "g", "a", "l"],
        ["C", "o", "m", "m", "u", "n", "i", "t", "y"]
    ];

    let letraContador = -1;
    let posicionArray = 0;

    const contenedorAnimacion = document.querySelector(".contenedor__texto__animacion");

    function pintarTexto() {
        letraContador++;
        contenedorAnimacion.innerHTML += textoAnimacion[posicionArray][letraContador];

        if (letraContador === textoAnimacion[posicionArray].length - 1) {
            clearInterval(intervalo);

            setTimeout(() => {

                intervalo = setInterval(() => {
                    contenedorAnimacion.innerHTML = "";
                    letraContador--;
                    textoAnimacion[posicionArray].pop();
                    textoAnimacion[posicionArray].forEach((elemento) => {
                        contenedorAnimacion.innerHTML += elemento;
                    });

                    if(letraContador < 0){
                        clearInterval(intervalo);
                        posicionArray++;
                        intervalo = setInterval(pintarTexto, 150);

                        if(posicionArray > textoAnimacion.length - 1){
                            clearInterval(intervalo);
                            posicionArray = 0;
                            animacion();
                        }
                    }
                }, 150);

            }, 1000);
        }
    }
    let intervalo = setInterval(pintarTexto, 150);
}
window.addEventListener("load", animacion);