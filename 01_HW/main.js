const skins = [
    'skins/basic.css',
    'skins/modern.css',
    'skins/dark.css'
];

let currentSkinIndex = 0;

const themeLink = document.getElementById('theme-style');
const toggleButton = document.getElementById('skin-toggle');

toggleButton.addEventListener('click', function () {
    currentSkinIndex = (currentSkinIndex + 1) % skins.length;
    themeLink.href = skins[currentSkinIndex];
});