// Change text content dynamically
const changeableText = document.getElementById('changeable-text');
const textChangerBtn = document.getElementById('text-changer');

textChangerBtn.addEventListener('click', () => {
    if (changeableText.textContent.includes('change')) {
        changeableText.textContent = 'The text has been changed successfully!';
    } else {
        changeableText.textContent = 'This text will change when you click the button below.';
    }
});

// Modify CSS styles via JavaScript
const styleDemo = document.getElementById('style-demo');
const colorToggleBtn = document.getElementById('color-toggle');

styleDemo.addEventListener('mouseover', () => {
    styleDemo.style.fontWeight = 'bold';
    styleDemo.style.textDecoration = 'underline';
});

styleDemo.addEventListener('mouseout', () => {
    styleDemo.style.fontWeight = 'normal';
    styleDemo.style.textDecoration = 'none';
});

colorToggleBtn.addEventListener('click', () => {
    if (styleDemo.style.backgroundColor === 'lightblue') {
        styleDemo.style.backgroundColor = 'lightcoral';
    } else {
        styleDemo.style.backgroundColor = 'lightblue';
    }
});

// Add or remove an element when a button is clicked
const toggleElementBtn = document.getElementById('toggle-element');
const specialMessage = document.getElementById('special-message');

toggleElementBtn.addEventListener('click', () => {
    specialMessage.classList.toggle('hidden');
});

// Bonus: Change heading color periodically
const mainHeading = document.getElementById('main-heading');
const colors = ['#4285f4', '#ea4335', '#fbbc05', '#34a853', '#673ab7'];
let colorIndex = 0;

setInterval(() => {
    mainHeading.style.color = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
}, 1000);