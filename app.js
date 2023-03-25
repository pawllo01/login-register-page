const loginBtn = document.querySelector("#login-btn");
const closeBtn = document.querySelector("#close-btn");

const wrapper = document.querySelector(".form-wrapper");
const registerLink = document.querySelector("#register-link");
const loginLink = document.querySelector("#login-link");

const header = document.querySelector("header");
const menuBtn = document.querySelector("#menu-btn");

loginBtn.addEventListener("click", () => wrapper.classList.add("active-popup"));

closeBtn.addEventListener("click", () => wrapper.classList.remove("active-popup"));

registerLink.addEventListener("click", () => wrapper.classList.add("active-register"));

loginLink.addEventListener("click", () => wrapper.classList.remove("active-register"));

menuBtn.addEventListener("click", () => header.classList.toggle("active-menu"));
