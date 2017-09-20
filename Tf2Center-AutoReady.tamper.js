// ==UserScript==
// @name         Auto-Ready TF2Center
// @namespace    Paymh
// @version      0.1
// @description  Loops and auto-clicks pre-ready button in tf2center lobbies.
// @author       Lachlan "Paymh" Horsey
// @match        https://tf2center.com/lobbies/*
// @grant        none
// ==/UserScript==

var rupBtn;
(function() {
    'use strict';
    setInterval(loop,100);
})();

function loop() {
    rupBtn = document.getElementsByClassName("icons slot eggtimer")[0];
    if(rupBtn) {
        rupBtn.click();
    }
}