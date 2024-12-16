// Wait for the DOM to load
window.addEventListener("DOMContentLoaded", () => {
    const bgcolorPicker = document.getElementById("bgcolorPicker");

    // Function to convert hex color to RGB format
    function hexToRgb(hex) {
        const bigint = parseInt(hex.slice(1), 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        return `${r}, ${g}, ${b}`;
    }

    // Update the --bgColor CSS variable when the color picker value changes
    bgcolorPicker.addEventListener("input", (event) => {
        const selectedColor = event.target.value;
        // Update the root CSS variable with transparency
        document.documentElement.style.setProperty("--bgColor", `rgba(${hexToRgb(selectedColor)}, 0.8)`);
    });

    // Initialize the color picker to match the current --bgColor value
    const initialBgColor = getComputedStyle(document.documentElement).getPropertyValue("--bgColor").trim();
    if (initialBgColor) {
        // Extract the RGB part if already set as rgba
        const rgbMatch = initialBgColor.match(/rgba\((\d+, \d+, \d+)/);
        if (rgbMatch) {
            const [r, g, b] = rgbMatch[1].split(", ");
            const hexColor = `#${((1 << 24) + (parseInt(r) << 16) + (parseInt(g) << 8) + parseInt(b)).toString(16).slice(1)}`;
            bgcolorPicker.value = hexColor;
        }
    }
});
