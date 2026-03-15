'use strict';

const funFactButton = document.getElementById('funFactBtn');
const funFactText = document.getElementById('funFact');

if (funFactButton && funFactText) {
    funFactButton.addEventListener('click', function() {
        const shouldShow = funFactText.hidden;

        funFactText.hidden = !shouldShow;
        funFactButton.textContent = shouldShow ? 'Hide fun fact' : 'Click to show fun fact';
        funFactButton.setAttribute('aria-expanded', String(shouldShow));
    });
}