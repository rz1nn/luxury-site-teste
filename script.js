const header = document.getElementById("cabeçalho")

window.addEventListener("scroll", function() {
    if(window.scrollY > 800) {
        header.classList.add('scrolled')
    } else {
        header.classList.remove('scrolled')
    }
})