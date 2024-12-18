function toggleMenu() {
    var links = document.getElementsByClassName("nav-link");
    for (var i = 0; i < links.length; i++) {
        if (links[i].classList.contains("show")) {
            links[i].classList.remove("show");
        } else {
            links[i].classList.add("show");
        }
    }
}
