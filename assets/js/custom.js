var rootElement = document.documentElement;
var scrollToTopBtn = document.querySelector(".scrollToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.classList.add("showBtn")
    } else {
        scrollToTopBtn.classList.remove("showBtn")
    }
}

function scrollToTop() {
    rootElement.scroll({
        top: 0,
        behavior: "smooth"
    })
}
scrollToTopBtn.addEventListener("click", scrollToTop);