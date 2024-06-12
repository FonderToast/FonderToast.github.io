let slotStats = {};
let slotNames = [
    'Gates', 'Starlight', 'Retro Tapes', 'Nightmares vs gigablox', 'Pirots 2',
    'Mental', 'Big bass Amazon XTREME', 'Curse of the werewolf', 'Athena',
    'Sky Bounty', 'Dog House', 'Mochimon', 'Dog House Multi Hold', 'Firebird Spirit',
    'Dinopolis', 'Oxygen', 'Happy Hooves', 'Big bass secrets of the golden lake',
    'Gates 1000', 'Starlight 1000', 'Sugar Supreme', 'Sweet Bonanza', 'Sugar Rush',
    'Sugar Rush 1000', 'Frog Blox', 'Brick Snake 2000', 'Gems Bonanza', 'Release the bison',
    'Curse of Ra', 'Stackem', 'Le Bandit', 'Zeus vs Hades', 'Loki', '5 wild buffalo', 'Wildies',
    'Pirots 3', 'Temple of paw', 'Buffalo King Megaways'
];

let slotImages = [
    'FonderToast.github.io/Gates.png', 'FonderToast.github.io/Starlight.png', 'FonderToast.github.io/Retro Tapes.png',
    'FonderToast.github.io/Nightmares vs gigablox.png', 'FonderToast.github.io/Pirots 2.png', 'FonderToast.github.io/Mental.png',
    'FonderToast.github.io/Big bass Amazon XTREME.png', 'FonderToast.github.io/Curse of the werewolf.png', 'FonderToast.github.io/Athena.png',
    'FonderToast.github.io/Sky Bounty.png', 'FonderToast.github.io/Dog House.png', 'FonderToast.github.io/Mochimon.png',
    'FonderToast.github.io/Dog House Multi Hold.png', 'FonderToast.github.io/Firebird Spirit.png', 'FonderToast.github.io/Dinopolis.png',
    'FonderToast.github.io/Oxygen.png', 'FonderToast.github.io/Happy Hooves.png', 'FonderToast.github.io/Big bass secrets of the golden lake.png',
    'FonderToast.github.io/Gates 1000.png', 'FonderToast.github.io/Starlight 1000.png', 'FonderToast.github.io/Sugar Supreme.png',
    'FonderToast.github.io/Sweet Bonanza.png', 'FonderToast.github.io/Sugar Rush.png', 'FonderToast.github.io/Sugar Rush 1000.png',
    'FonderToast.github.io/Frog Blox.png', 'FonderToast.github.io/Brick Snake 2000.png', 'FonderToast.github.io/Gems Bonanza.png',
    'FonderToast.github.io/Release the bison.png', 'FonderToast.github.io/Curse of Ra.png', 'FonderToast.github.io/Stackem.png',
    'FonderToast.github.io/Le Bandit.png', 'FonderToast.github.io/Zeus vs Hades.png', 'FonderToast.github.io/Loki.png',
    'FonderToast.github.io/5 wild buffalo.png', 'FonderToast.github.io/Wildies.png', 'FonderToast.github.io/Pirots 3.png',
    'FonderToast.github.io/Temple of paw.png', 'FonderToast.github.io/Buffalo King Megaways.png'
];

let animationCounter = 0;
const animationDuration = 6000;  // 6 seconds

function startAnimation() {
    const slotImage = document.getElementById('slot-image');
    const slotName = document.getElementById('slot-name');
    const slotsSpun = document.getElementById('slots-spun');
    const randomizeButton = document.getElementById('randomize-button');
    randomizeButton.disabled = true;

    // Reset animation counter
    animationCounter = 0;

    function pickSlot() {
        const choice = slotImages[Math.floor(Math.random() * slotImages.length)];
        slotImage.src = choice;
        slotImage.onerror = function() {
            console.error('Image not found: ' + slotImage.src);
        };
        const name = choice.split('/').pop().split('.')[0].replace(/%20/g, ' ');
        slotName.textContent = name;
        slotStats[name] = (slotStats[name] || 0) + 1;
        slotsSpun.textContent = 'Slots Spun: ' + Object.values(slotStats).reduce((a, b) => a + b, 0);
    }

    function animate() {
        if (animationCounter < animationDuration) {
            const delay = 100 + Math.floor(animationCounter / 15);
            pickSlot();
            animationCounter += delay;
            setTimeout(animate, delay);
        } else {
            randomizeButton.disabled = false;
            updateStatsWindow();  // Update stats window after animation completes
        }
    }
    
    animate();
}

function toggleStats() {
    const statsWindow = document.getElementById('stats-window');
    statsWindow.style.display = statsWindow.style.display === 'block' ? 'none' : 'block';
    if (statsWindow.style.display === 'block') {
        updateStatsWindow();
    }
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
    main.style.display = 'block';  // Display the main window on load
};
