import "./styles.css";
import "./pages/home.css"
import "./pages/menu.css"
import "./pages/contact-us.css"

import {createHomePage} from "./pages/home.js";
import {createMenuPage} from  "./pages/menu.js";
import {createContactUsPage} from  "./pages/contact-us.js"

const content = document.getElementById("content");
const home = document.getElementById("home");
const menu = document.getElementById("menu");
const contactUs = document.getElementById("contact-us");

createHomePage();

home.addEventListener("click", () => {
  content.innerHTML = "";
  createHomePage();
})

menu.addEventListener("click", () => {
  content.innerHTML = "";
  createMenuPage();
})

contactUs.addEventListener("click", () => {
  content.innerHTML = "";
  createContactUsPage();
})