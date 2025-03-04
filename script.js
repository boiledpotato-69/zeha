function sayYes() {
    alert("Yay! Can't wait! 🥰💞");
}

function runAway() {
    let button = document.querySelector('.no');
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 50);
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}
