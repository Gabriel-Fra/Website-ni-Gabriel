const frogImages = [
  "images/frog1.png",
  "images/frog2.png",
  "images/frog3.png",
  "images/frog4.png"
];

function createFrog(x, y, size) {
  const frog = document.createElement('img');
  frog.src = frogImages[Math.floor(Math.random() * frogImages.length)];
  frog.classList.add('frog');
  frog.style.left = `${x}px`;
  frog.style.top = `${y}px`;
  frog.style.width = `${size}px`;
  frog.style.animationDelay = `${Math.random() * 2}s`;
  document.getElementById('frog-container').appendChild(frog);
}

function spawnFrogs(count) {
  const container = document.getElementById('frog-container');
  const width = window.innerWidth;
  const height = window.innerHeight;
  const frogSize = Math.min(300, width * 0.25); // Responsive sizing

  for (let i = 0; i < count; i++) {
    const x = Math.random() * (width - frogSize);
    const y = Math.random() * (height - frogSize);
    createFrog(x, y, frogSize);
  }
}

setTimeout(() => {
  document.getElementById('loading-screen').style.display = 'none';
  const container = document.getElementById('frog-container');
  container.style.display = 'block';
  spawnFrogs(10);
}, 5000);
