class Clock {
    constructor(elementId) {
        this.element = document.getElementById(elementId);
    }

    updateTime() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        this.element.textContent = `${hours}:${minutes}:${seconds}`;
    }

    start() {
        setInterval(() => {
            this.updateTime();
        }, 1000);
    }
}

// main.js
const clock = new Clock('clock');
clock.start();