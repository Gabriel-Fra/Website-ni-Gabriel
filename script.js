const frogImages = [
  "images/frog1.png",
  "images/frog2.png",
  "images/frog3.png",
  "images/frog4.png"
];


function createFrog(x, y) {
  const frog = document.createElement('img');
  frog.src = frogImages[Math.floor(Math.random() * frogImages.length)];
  frog.classList.add('frog');
  frog.style.left = `${x}px`;
  frog.style.top = `${y}px`;
  frog.style.animationDelay = `${Math.random() * 2}s`;
  document.getElementById('frog-container').appendChild(frog);
}

function spawnFrogs(count) {
  const container = document.getElementById('frog-container');
  const width = window.innerWidth;
  const height = window.innerHeight;
  for (let i = 0; i < count; i++) {
    const x = Math.random() * (width - 100);
    const y = Math.random() * (height - 100);
    createFrog(x, y);
  }
}

setTimeout(() => {
  document.getElementById('loading-screen').style.display = 'none';
  const container = document.getElementById('frog-container');
  container.style.display = 'block';
  spawnFrogs(10);
}, 5000);
