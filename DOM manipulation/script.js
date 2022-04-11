const container= document.querySelector('#container');
const content= document.createElement('div');
const paragraph= document.createElement('p');
const paragraph2= document.createElement('p');
const header3= document.createElement('h3');
const div2= document.createElement('div');
const head1= document.createElement('h1');



content.classList.add('content');
content.textContent = "This is text content";
content.style["color"] = "green";
container.appendChild(content);

paragraph.classList.add('paragraph');
paragraph.textContent = "Hey I'm red!";
paragraph.style['color'] = 'red';
container.appendChild(paragraph);

header3.classList.add('header3');
header3.textContent = "I'm blue h3";
header3.style['color'] = "blue";
container.appendChild(header3);

div2.classList.add('content2');
div2.style["background-color"] = "pink";
div2.style["border"] = "1px solid black";

head1.classList.add('head12');
head1.textContent = "I'm in a div";
div2.appendChild(head1);
paragraph2.textContent = "ME TOO!";
div2.appendChild(paragraph2);
container.appendChild(div2);