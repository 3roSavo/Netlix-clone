let items1 = document.querySelectorAll('.carousel-one .carousel-item')
let items2 = document.querySelectorAll('.carousel-two .carousel-item')
let items3 = document.querySelectorAll('.carousel-three .carousel-item')
//---------------------------------------------------- primo carosello
items1.forEach((el) => {
    let minPerSlide = 6
    // per i vari breakpoint semplicemente nascondo gli elementi superflui con display property in CSS
    // anzichè gestire minPerSlide ad ogni breakpoint
    let next = el.nextElementSibling
    for (var i = 1; i < minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
            next = items1[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})
//----------------------------------------------------- secondo carosello
items2.forEach((el) => {
    let minPerSlide = 6
    // per i vari breakpoint semplicemente nascondo gli elementi superflui con display property in CSS
    // anzichè gestire minPerSlide ad ogni breakpoint
    let next = el.nextElementSibling
    for (var i = 1; i < minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
            next = items2[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})
//------------------------------------------------------ terzo carosello
items3.forEach((el) => {
    let minPerSlide = 6
    // per i vari breakpoint semplicemente nascondo gli elementi superflui con display property in CSS
    // anzichè gestire minPerSlide ad ogni breakpoint
    let next = el.nextElementSibling
    for (var i = 1; i < minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
            next = items3[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})
// generiamo l'anno dinamicamente
const year = document.getElementById("year")
let date = new Date().getFullYear()
year.innerText = date