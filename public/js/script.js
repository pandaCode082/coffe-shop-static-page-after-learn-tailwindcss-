"use strict";

let localThem = localStorage.getItem("them");
// ---------------------> select html Nodes
const changeThemBtn = document.getElementById("them-toggel-btn"),
    mobileChangeThemBtn = document.getElementById("mobile-dark-mood-flage"),
    // (mobile) sub menu elements
    subListWrapper = document.getElementById("sub-list-wrapper"),
    openSubMenuBtn = document.getElementById("open-sub-menu__btn"),
    subMenu = document.getElementById("sub-menu"),
    headerMenu = document.getElementById("header-menu"),
    openHeaderMenu = document.getElementById("open-header-menu"),
    closeHeaderMenu = document.getElementById("close-header-menu"),
    // (mobile) cart
    headerCart = document.getElementById("header-cart"),
    openHeaderCart = document.getElementById("open-cart"),
    closeheaderCartBtn = document.getElementById("close-header-cart"),
    layerEffect = document.getElementById("layer"),
    // -----------------> handekers functions
    changeThemhandler = () => {
        localThem = localStorage.getItem("them");
        if (localThem === "dark" || (window.matchMedia("(prefers-color-scheme: dark)").matches == true && !localThem)) {

            document.documentElement.classList.add("dark")
            localStorage.setItem("them", "dark");
        } else {

            document.documentElement.classList.remove("dark");
            localStorage.setItem("them", "light");
        };
    },
    changeLocalThemHandler = () => {
        if (localThem == "dark") {
            localStorage.setItem("them", "light");
        } else {
            localStorage.setItem("them", "dark");
        };
        changeThemhandler();
    },
    closeHeaderModals = () => {
        headerMenu.classList.replace("right-0", "-right-full");
        headerCart.classList.replace("left-0", "-left-full");
        layerEffect.classList.replace("block", "hidden");
    };
// ------------------->  Event Listeners
changeThemBtn.addEventListener("click", changeLocalThemHandler);
mobileChangeThemBtn.addEventListener("click", changeLocalThemHandler);

window.addEventListener("load", () => {
    changeThemhandler();
});

openSubMenuBtn.addEventListener("click", event => {
    subListWrapper.classList.toggle("text-orange-300");
    if (subListWrapper.classList.contains("text-orange-300")) {
        openSubMenuBtn.querySelector("svg").classList.add("-rotate-90");
        subMenu.classList.replace("hidden", "flex");
    } else {
        openSubMenuBtn.querySelector("svg").classList.remove("-rotate-90");
        subMenu.classList.replace("flex", "hidden");
    };
});

openHeaderMenu.addEventListener("click", event => {
    headerMenu.classList.replace("-right-full", "right-0");
    layerEffect.classList.replace("hidden", "block");
});

closeHeaderMenu.addEventListener("click", event => {
    headerMenu.classList.replace("right-0", "-right-full");
    layerEffect.classList.replace("block", "hidden");
});
// mobile cart events
openHeaderCart.addEventListener("click", event => {
    headerCart.classList.replace("-left-full", "left-0");
    layerEffect.classList.replace("hidden", "block");
});

closeheaderCartBtn.addEventListener("click", event => {
    headerCart.classList.replace("left-0", "-left-full");
    layerEffect.classList.replace("block", "hidden");
});

layerEffect.addEventListener("click", () => {
    closeHeaderModals();
});