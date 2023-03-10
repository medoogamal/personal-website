// let clik = document.getElementById("other");
// let appear = document.querySelector(".mega-menue")


// let styles = {
//     "opacity": "1",
//     "zIndex": "100",
//     "top": "100%",
// };
// let styles2 = {
//     "opacity": "0",
//     "zIndex": "-1",
//     "top": "100%",
//     "transition": ".4s"
// };



// let iff = clik.classList.contains("active")
// clik.onclick = function () {
//     if (iff === true) {
//         Object.assign(appear.style, styles)
//         // return iff = false;
//         return iff = false
//     } else {
//         Object.assign(appear.style, styles2)
//         return iff = true;
//     }
// }


// الحمد لله كل حاجه بتيجي بالممارسه 

let clik = document.getElementById("other");
let appear = document.querySelector(".mega-menue")

clik.onclick = function () {
    appear.classList.toggle("apper")
}


window.addEventListener("scroll", () => {
    if (appear.classList.contains("apper")) {
        appear.classList.remove("apper")
    }
})