"use strict";document.addEventListener("DOMContentLoaded",function(e){var t=document.querySelectorAll(".toggle"),c=document.querySelector(".nav-mobile");if(t&&c){var n=!1;t.forEach(function(e){e.addEventListener("click",function(){n=n?(c.classList.remove("active"),!1):(c.classList.add("active"),!0)})})}});