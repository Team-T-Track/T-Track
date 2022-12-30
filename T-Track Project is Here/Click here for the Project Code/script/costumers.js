import navbar from "../components/navbar.js";
import { bottom } from "../bottom/bottom.js";
let nav = document.getElementById("navbar");
nav.innerHTML = navbar();
let bot = document.querySelector(".bottom")
bot.innerHTML = bottom()