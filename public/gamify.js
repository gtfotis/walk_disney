// Creates a timer
const interval = setInterval(() => {
    popUp(interval)
}, 1000);

// Picks a number 1-10 to determine if the pop-up pops up. [1]
function popUp(interval) {
    const number = Math.floor(Math.random() * 10) + 1;
    if (number === 1) {
        managePopup()
        clearInterval(interval);
    }
}

// Pulls an image src from an object
function selectImagePath() {
    const imagePaths = {
        '1': '/images/pluto2.png',
        '2': '/images/mickey_mouse.png',
        '3': '/images/stitch.png',
        '4': '/images/sven.png'
    };
    // Total Number of Keys
    const totalImages = Object.keys(imagePaths).length;

    // Picks a random number from 1-totalImages 
    const number = `${Math.floor(Math.random() * totalImages) + 1}`;
    const selectImagePath = imagePaths[number];
    return selectImagePath;
}

function managePopup() {
    const body = document.querySelector("body");
    const img = document.createElement('img');
    const imagePath = selectImagePath();
    img.src = imagePath;

    const left = Math.floor(Math.random() * 700) + 1;
    const top = Math.floor(Math.random() * 700) + 1;
    img.style.cssText = `width: 100px; height: 100px; position: absolute; z-index: 100; left: ${left}px; top:${top}px`;
    body.append(img);
    img.addEventListener('click', function () {
        img.remove()
    })
}