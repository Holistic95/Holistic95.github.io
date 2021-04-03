const spawn = (father, child) => document.querySelector(father).appendChild(child);

const body = document.body.style;
body.backgroundColor = 'rgb(233, 233, 233)';

const hero = document.createElement('img');
const hr = hero.style;
hero.src = 'https://user-images.githubusercontent.com/78622030/113242055-66a08180-9286-11eb-9589-f534dbad9bfe.jpeg';
hr.backgroundSize = '50%';
hr.display = 'flex';
hr.flexDirection = 'column';
hr.justifyContent = 'center';
hr.alignItems = 'center';
hr.width = '100%'; 
hr.maxHeight = '50%';
spawn('body', hero);

const div = document.createElement('div');
spawn('body', div);

const header = document.createElement('header');
const hd = header.style;
hd.textAlign = 'center';
hd.position = 'absolute';
hd.top = '80%';
hd.left = '50%';
hd.color = 'black';
hd.transform = 'translate(-50%, -50%)';
hd.fontFamily = 'Arial';
hd.fontSize = '50px';
// header.innerText = 'Holistic';

document.querySelector('div').appendChild(header);
