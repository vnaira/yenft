window.onload = function () {
    let elem = document.getElementById("preloader");
    elem.parentNode.removeChild(elem);

    document.body.classList.remove("overflow-hidden-y");
}