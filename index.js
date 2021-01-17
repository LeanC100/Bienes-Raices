// hover y no hover
function nosotros_hover(i, s, t) {
    var item = i, svg = s, texto = t;
    var nosotros_div_item = document.getElementById(item);
    var nosotros_svg = document.getElementById(svg);
    var nosotros_div_texto = document.getElementById(texto);

    nosotros_div_item.style.backgroundColor = "#e08709";
    nosotros_svg.style.color = "#fff";
    nosotros_div_texto.style.color = "#fff";
}
function nosotros_no_hover(i, s, t) {
    var item = i, svg = s, texto = t;
    var nosotros_div_item = document.getElementById(item);
    var nosotros_svg = document.getElementById(svg);
    var nosotros_div_texto = document.getElementById(texto);

    nosotros_div_item.style.backgroundColor = "#fff";
    nosotros_svg.style.color = "#e08709";
    nosotros_div_texto.style.color = "#000";
}


/* ------------------------
   scrollreveal
------------------------ */

ScrollReveal().reveal('.nosotros', {
    duration: 30000,
    origin: 'left',
    distance: '-100px'
});
console.log("Esto es un error"); 
