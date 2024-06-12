let slotStats = {};
let slotImages = [
    'Gates.png', 'Starlight.png', 'Retro Tapes.png',
    // Add more slot images here...
];

let animationCounter = 0;
const animationDuration = 6000;  // 6 seconds

function startAnimation() {
    const main = document.getElementById('main-window');
    const splash = document.getElementById('splash-screen');
    splash.style.display = 'none';
    main.style.display = 'block';

    const slotImage = document.getElementById('slot-image');
    const slotName = document.getElementById('slot-name');
    const slotsSpun = document.getElementById('slots-spun');
    const randomizeButton = document.getElementById('randomize-button');
    randomizeButton.disabled = true;

    function pickSlot() {
        const choice = slotImages[Math.floor(Math.random() * slotImages.length)];
        slotImage.src = 'Slot Pickers/' + choice;
        slotName.textContent = choice.split('.')[0];
        slotsSpun.textContent = 'Slots Spun: ' + (++slotStats[choice] || 1);
    }

    function animate() {
        if (animationCounter < animationDuration) {
            const delay = 100 + Math.floor(animationCounter / 15);
            pickSlot();
            animationCounter += delay;
            setTimeout(animate, delay);
        } else {
            randomizeButton.disabled = false;
        }
    }

    animate();
}

function toggleStats() {
    const statsWindow = document.getElementById('stats-window');
    statsWindow.style.display = statsWindow.style.display === 'block' ? 'none' : 'block';
}

function closeApp() {
    window.close();
}

function resetStats() {
    slotStats = {};
    updateStatsWindow();
}

function hideStats() {
    const statsWindow = document.getElementById('stats-window');
    statsWindow.style.display = 'none';
}

function updateStatsWindow() {
    const statsContainer = document.getElementById('stats-container');
    statsContainer.innerHTML = '';

    for (const slot in slotStats) {
        const statLabel = document.createElement('p');
        statLabel.className = 'stats-label';
        statLabel.textContent = `${slot}: ${slotStats[slot]}`;
        statsContainer.appendChild(statLabel);
    }
}

window.onload = function() {
    const main = document.getElementById('main-window');
    main.style.display = 'none';

    const statsWindow = document.getElementById('stats-window');
    statsWindow.style.display = 'none';
};
