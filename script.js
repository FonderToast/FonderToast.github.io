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
    'Img/Gates.png', 'Img/Starlight.png', 'Img/Retro Tapes.png',
    'Img/Nightmares vs gigablox.png', 'Img/Pirots 2.png', 'Img/Mental.png',
    'Img/Big bass Amazon XTREME.png', 'Img/Curse of the werewolf.png', 'Img/Athena.png',
    'Img/Sky Bounty.png', 'Img/Dog House.png', 'Img/Mochimon.png',
    'Img/Dog House Multi Hold.png', 'Img/Firebird Spirit.png', 'Img/Dinopolis.png',
    'Img/Oxygen.png', 'Img/Happy Hooves.png', 'Img/Big bass secrets of the golden lake.png',
    'Img/Gates 1000.png', 'Img/Starlight 1000.png', 'Img/Sugar Supreme.png',
    'Img/Sweet Bonanza.png', 'Img/Sugar Rush.png', 'Img/Sugar Rush 1000.png',
    'Img/Frog Blox.png', 'Img/Brick Snake 2000.png', 'Img/Gems Bonanza.png',
    'Img/Release the bison.png', 'Img/Curse of Ra.png', 'Img/Stackem.png',
    'Img/Le Bandit.png', 'Img/Zeus vs Hades.png', 'Img/Loki.png',
    'Img/5 wild buffalo.png', 'Img/Wildies.png', 'Img/Pirots 3.png',
    'Img/Temple of paw.png', 'Img/Buffalo King Megaways.png'
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
