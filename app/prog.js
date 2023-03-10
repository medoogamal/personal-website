








let skill = document.querySelector(".our-skills");
let spans = document.querySelectorAll(".skill-progress span");






window.onscroll = function () {
    if (window.scrollY >= skill.offsetTop - 260) {
        spans.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    }
}



