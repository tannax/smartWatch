const colorPicker = document.getElementById('colorPicker');
const innerCircle = document.querySelector('.innercirclearea');
const outerCircle = document.querySelector('.outercirclearea');

colorPicker.addEventListener('input', () => {
    const color = colorPicker.value;

    innerCircle.style.setProperty('--boxShadowColor', color);
    outerCircle.style.setProperty('--boxShadowColor', color);
});