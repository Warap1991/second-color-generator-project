const baseColorInput = document.getElementById('base-color');
const predefinedColorsSelect = document.getElementById('predefined-colors');
const saturationInput = document.getElementById('saturation');
const brightnessInput = document.getElementById('brightness');
const contrastInput = document.getElementById('contrast');
const generatedColor = document.getElementById('generated-color');
const generateButton = document.getElementById('generate-button');

function updateColor() {
    const baseColor = baseColorInput.value;
    const saturation = saturationInput.value;
    const brightness = brightnessInput.value;
    const contrast = contrastInput.value;
    
    generatedColor.style.backgroundColor = baseColor;
    generatedColor.style.filter = `saturate(${saturation}%) brightness(${brightness}%) contrast(${contrast}%)`;
}

function generateRandomColor() {
    const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    baseColorInput.value = randomColor;
    updateColor();
}

generateButton.addEventListener('click', generateRandomColor);
baseColorInput.addEventListener('input', updateColor);
saturationInput.addEventListener('input', updateColor);
brightnessInput.addEventListener('input', updateColor);
contrastInput.addEventListener('input', updateColor);

predefinedColorsSelect.addEventListener('change', () => {
    baseColorInput.value = predefinedColorsSelect.value;
    updateColor();
});

// Initial update
updateColor();
