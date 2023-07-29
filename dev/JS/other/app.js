const captchaDiv = document.querySelector('.captcha');

// Fonction pour générer un caractère aléatoire
function getRandomChar() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  return chars.charAt(Math.floor(Math.random() * chars.length));
}

// Fonction pour générer une position aléatoire
function getRandomPosition() {
  const positions = ['top', 'middle', 'bottom'];
  return positions[Math.floor(Math.random() * positions.length)];
}

// Fonction pour générer une déformation aléatoire
function getRandomTransform() {
  const transforms = ['skew(10deg)', 'skew(-10deg)', 'rotate(5deg)', 'rotate(-5deg)', 'translateY(-50%)'];
  return transforms[Math.floor(Math.random() * transforms.length)];
}

// Fonction pour générer une opacité aléatoire
function getRandomOpacity() {
  return Math.random() * (1 - 0.5) + 0.5;
}

// Fonction pour générer une couleur de contour aléatoire
function getRandomBorderColor() {
  const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff', '#ff00ff'];
  return colors[Math.floor(Math.random() * colors.length)];
}

// Génération des caractères aléatoires déformés
for (let i = 0; i < 6; i++) {
  const char = getRandomChar();
  const charDiv = document.createElement('div');
  charDiv.innerText = char;
  charDiv.style.position = 'absolute';
  charDiv.style.top = getRandomPosition();
  charDiv.style.left = `${i * (100 / 6)}%`;
  charDiv.style.transform = getRandomTransform();
  charDiv.style.opacity = getRandomOpacity();
  charDiv.style.borderRadius = '5px';
  charDiv.style.padding = '5px';
  captchaDiv.appendChild(charDiv);
}
