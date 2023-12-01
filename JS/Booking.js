// scripts.js
const openButton = document.getElementById('openButton');
const closeButton = document.getElementById('closeButton');
const popupForm = document.getElementById('popupForm');

openButton.addEventListener('click', () => {
    popupForm.style.display = 'block';
});

closeButton.addEventListener('click', () => {
    popupForm.style.display = 'none';
});