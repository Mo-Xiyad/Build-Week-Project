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



function applyTheme(theme) {
    document.body.classList.remove("theme-light", "theme-dark");
    document.body.classList.add(`theme-${theme}`);
    console.log(theme)
    let hiddenBox = document.querySelector('div.hidden-box')
    let allTextelements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, a, p, li, small, span')
    let sideNavBar = document.querySelector('div.main-nav-bar div.side-nav')
    let songsMenuList = document.querySelector('div.side-menu-songs-list')
    let sideNavHomeButton = document.querySelector('div.main-nav-bar div.side-nav ul li a.active')
    let logoSvg = document.querySelector('.logo-svg-top > #top-svg')
    let allTheCards = document.querySelectorAll('.card')


    if (theme === 'light') {
        hiddenBox.classList.add('hidden-box-theme-light');

        for (let i = 0; i < allTextelements.length; i++) {
            elements = allTextelements[i]
            elements.classList.add('allTextelements-theme-light')
        }

        for (let i = 0; i < allTheCards.length; i++) {
            cards = allTheCards[i]
            cards.classList.add('allCards-light')
        }


        sideNavBar.classList.add('light-theme-side-nav')
        songsMenuList.classList.add('songsMenu-ligh-theme')
        sideNavHomeButton.classList.add('sideNavHomeButton-light')
        logoSvg.setAttribute('fill', 'black')

    }
    else {
        for (let i = 0; i < allTextelements.length; i++) {
            elements = allTextelements[i]
            elements.classList.remove('allTextelements-theme-light')
        }
        for (let i = 0; i < allTheCards.length; i++) {
            cards = allTheCards[i]
            cards.classList.remove('allCards-light')
        }

        hiddenBox.classList.remove('hidden-box-theme-light')
        sideNavBar.classList.remove('light-theme-side-nav')
        sideNavHomeButton.classList.remove('sideNavHomeButton-light')
        logoSvg.setAttribute('fill', 'white')
    }

}

document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme") || "auto";

    applyTheme(savedTheme);

    for (const optionElement of document.querySelectorAll("#selTheme option")) {
        optionElement.selected = savedTheme === optionElement.value;
    }

    for (const optionElement of document.querySelectorAll("#selTheme option")) {
        optionElement.selected = savedTheme === optionElement.value;

    }

    document.querySelector("#selTheme").addEventListener("change", function () {
        localStorage.setItem("theme", this.value);
        applyTheme(this.value);
    });
});



window.onload = function () {
    colorChanger()
    lightMode()
}