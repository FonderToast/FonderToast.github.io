let slotStats = {};
let slotImages = [
    'Gates.png', 'Starlight.png', 'Retro Tapes.png',
    'Nightmares%20vs%20gigablox.png', 'Pirots%202.png', 'Mental.png',
    'Big%20bass%20Amazon%20XTREME.png', 'Curse%20of%20the%20werewolf.png', 'Athena.png',
    'Sky%20Bounty.png', 'Dog%20House.png', 'Mochimon.png',
    'Dog%20House%20Multi%20Hold.png', 'Firebird%20Spirit.png', 'Dinopolis.png',
    'Oxygen.png', 'Happy%20Hooves.png', 'Big%20bass%20secrets%20of%20the%20golden%20lake.png',
    'Gates%201000.png', 'Starlight%201000.png', 'Sugar%20Supreme.png',
    'Sweet%20Bonanza.png', 'Sugar%20Rush.png', 'Sugar%20Rush%201000.png',
    'Frog%20Blox.png', 'Brick%20Snake%202000.png', 'Gems%20Bonanza.png',
    'Release%20the%20bison.png', 'Curse%20of%20Ra.png', 'Stackem.png',
    'Le%20Bandit.png', 'Zeus%20vs%20Hades.png', 'Loki.png',
    '5%20wild%20buffalo.png', 'Wildies.png', 'Pirots%203.png',
    'Temple%20of%20paw.png', 'Buffalo%20King%20Megaways.png'
];

let animationCounter = 0;
const animationDuration = 6000;  // 6 seconds

function startAnimation() {
    const main = document.getElementById('main-window');
    main.style.display = 'block';

    const slotImage = document.getElementById('slot-image');
    const slotName = document.getElementById('slot-name');
    const slotsSpun = document.getElementById('slots-spun');
    const randomizeButton = document.getElementById('randomize-button');
    randomizeButton.disabled = true;

    // Reset animation counter
    animationCounter = 0;

    function pickSlot() {
        const choice = slotImages[Math.floor(Math.random() * slotImages.length)];
        slotImage.src = 'Slot%20Pickers/' + choice;
        slotImage.onerror = function() {
            console.error('Image not found: ' + slotImage.src);
        };
        slotName.textContent = choice.split('.')[0].replace(/%20/g, ' ');
        slotStats[choice] = (slotStats[choice] || 0) + 1;
        slotsSpun.textContent = 'Slots Spun: ' + slotStats[choice];
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
        statLabel.textContent = `${slot.split('.')[0].replace(/%20/g, ' ')}: ${slotStats[slot]}`;
        statsContainer.appendChild(statLabel);
    }
}

window.onload = function() {
    console.log('Window loaded');
    const main = document.getElementById('main-window');
    main.style.display = 'block';  // Display the main window immediately

    const statsWindow = document.getElementById('stats-window');
    statsWindow.style.display = 'none';
};
