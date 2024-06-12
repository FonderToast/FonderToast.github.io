let slotStats = {};
let slotImages = [
    'Gates.png', 'Starlight.png', 'Retro Tapes.png',
    'Nightmares vs gigablox.png', 'Pirots 2.png', 'Mental.png',
    'Big bass Amazon XTREME.png', 'Curse of the werewolf.png', 'Athena.png',
    'Sky Bounty.png', 'Dog House.png', 'Mochimon.png',
    'Dog House Multi Hold.png', 'Firebird Spirit.png', 'Dinopolis.png',
    'Oxygen.png', 'Happy Hooves.png', 'Big bass secrets of the golden lake.png',
    'Gates 1000.png', 'Starlight 1000.png', 'Sugar Supreme.png',
    'Sweet Bonanza.png', 'Sugar Rush.png', 'Sugar Rush 1000.png',
    'Frog Blox.png', 'Brick Snake 2000.png', 'Gems Bonanza.png',
    'Release the bison.png', 'Curse of Ra.png', 'Stackem.png',
    'Le Bandit.png', 'Zeus vs Hades.png', 'Loki.png',
    '5 wild buffalo.png', 'Wildies.png', 'Pirots 3.png',
    'Temple of paw.png', 'Buffalo King Megaways.png'
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
        console.log('Animating...');
        if (animationCounter < animationDuration) {
            const delay = 100 + Math.floor(animationCounter / 15);
            pickSlot();
            animationCounter += delay;
            setTimeout(animate, delay);
        } else {
            console.log('Animation completed.');
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
    main.style.display = 'block';  // Display the main window immediately

    const statsWindow = document.getElementById('stats-window');
    statsWindow.style.display = 'none';
};