const goBack = function () {
    window.history.back();
}
const goForward = function () {
    window.history.forward();
}

const colorChanger = function () {
    let NodeMorningCard1 = document.querySelector(".card-morning-1")
    let NodeMorningCard2 = document.querySelector(".card-morning-2")
    let NodeMorningCard3 = document.querySelector(".card-morning-3")
    let NodeMorningCard4 = document.querySelector(".card-morning-4")
    let NodeMorningCard5 = document.querySelector(".card-morning-5")
    let NodeMorningCard6 = document.querySelector(".card-morning-6")
    let NodeMorningCard7 = document.querySelector(".card-morning-7")
    let NodeMorningCard8 = document.querySelector(".card-morning-8")
    // hidden backround div
    let backgroundDiv = document.querySelector('.hidden-box')
    // card1
    NodeMorningCard1.addEventListener("mouseover", function (e) {
        backgroundDiv.classList.add('hidden-box-color-1')
    })
    NodeMorningCard1.addEventListener("mouseout", function (e) {
        backgroundDiv.classList.remove('hidden-box-color-1')
    })
    // card2
    NodeMorningCard2.addEventListener("mouseover", function (e) {
        backgroundDiv.classList.add('hidden-box-color-2')
    })
    NodeMorningCard2.addEventListener("mouseout", function (e) {
        backgroundDiv.classList.remove('hidden-box-color-2')
    })
    // card-3
    NodeMorningCard3.addEventListener("mouseover", function (e) {
        backgroundDiv.classList.add('hidden-box-color-3')
    })
    NodeMorningCard3.addEventListener("mouseout", function (e) {
        backgroundDiv.classList.remove('hidden-box-color-3')
    })
    // card-4
    NodeMorningCard4.addEventListener("mouseover", function (e) {
        backgroundDiv.classList.add('hidden-box-color-4')
    })
    NodeMorningCard4.addEventListener("mouseout", function (e) {
        backgroundDiv.classList.remove('hidden-box-color-4')
    })
    // card-5
    NodeMorningCard5.addEventListener("mouseover", function (e) {
        backgroundDiv.classList.add('hidden-box-color-5')
    })
    NodeMorningCard5.addEventListener("mouseout", function (e) {
        backgroundDiv.classList.remove('hidden-box-color-5')
    })
    // card-6
    NodeMorningCard6.addEventListener("mouseover", function (e) {
        backgroundDiv.classList.add('hidden-box-color-6')
    })
    NodeMorningCard6.addEventListener("mouseout", function (e) {
        backgroundDiv.classList.remove('hidden-box-color-6')
    })
    // card-7
    NodeMorningCard7.addEventListener("mouseover", function (e) {
        backgroundDiv.classList.add('hidden-box-color-7')
    })
    NodeMorningCard7.addEventListener("mouseout", function (e) {
        backgroundDiv.classList.remove('hidden-box-color-7')
    })
    // card-8
    NodeMorningCard8.addEventListener("mouseover", function (e) {
        backgroundDiv.classList.add('hidden-box-color-8')
    })
    NodeMorningCard8.addEventListener("mouseout", function (e) {
        backgroundDiv.classList.remove('hidden-box-color-8')
    })

}

window.onload = function () {
    colorChanger()
}