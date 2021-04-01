document.body.style.backgroundColor = 'rgb(233, 233, 233)';
const spawn = (father, child) => document.querySelector(father).appendChild(child);

const hero = document.createElement('img');
const hr = hero.style;
hero.src = 'https://user-images.githubusercontent.com/78622030/113242055-66a08180-9286-11eb-9589-f534dbad9bfe.jpeg';
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
hd.top = '77%';
hd.left = '50%';
hd.color = 'black';
hd.fontFamily = ''
header.innerText = 'Holistic';

spawn('body', header);
