document.body.style.backgroundColor = 'rgb(233, 233, 233)';
const spawn = (father, child) => document.querySelector(father).appendChild(child);

const hero = document.createElement('img');
const hr = hero.style;
hero.src = '/home/mvsyd/Documents/Holistic95.github.io/holistic.jpeg';
hr.backgroundPosition = 'center';
hr.backgroundSize = 'cover';
hr.position = 'relative';
hr.backgroundRepeat = 'no-repeat';
hr.width = '100%';
hr.height = 'auto';
spawn('body', hero);

const header = document.createElement('header');
const hd = header.style;
hd.textAlign = 'center';
hd.position = 'absolute';
hd.top = '80%';
hd.left = '50%';
hd.transform = 'translate (-50%, -50%)'
hd.color = 'black';
header.innerText = 'Holistic';

// spawn('body', header);
