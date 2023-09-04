let wall = document.getElementById("cover")
let texto = document.getElementById("texto")

window.addEventListener('scroll', function() {
    let value = window.scrollY

    wall.style.top = value * 0.6 + 'px';
    texto.style.bottom = value * 0.6 + 'px';    
});
