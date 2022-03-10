// about getElementById() method:
const title = document.getElementById('title'); // classic
console.log(title); // returns element
console.log('');

// about getElementsByClassName() method:
const paragraphs = document.getElementsByClassName('paragraph'); // returns a HTML Collection, who looks like a array
console.log(paragraphs);
// paragraphs.forEach(element => {   -> HTML Collection is limited.
//     console.log(element);
// });
console.log(paragraphs[0]);
console.log(paragraphs[1]);
console.log('');

// about getElementsByTagName() method:
const allParagraphs = document.getElementsByTagName('p');
console.log(allParagraphs);

const body = document.getElementsByTagName('body'); // obligatory returns a HTML collection
console.log(body);
console.log('');

// about querySelector() method:
const paragraph1 = document.querySelector('.paragraph'); // returns the first one found
console.log(paragraph1);

const body2 = document.querySelector('body'); // returns element
console.log(body2);

const title2 = document.querySelector('#title');
console.log(title2);
console.log('');

// about querySelectorAll() method:
const paragraphs2 = document.querySelectorAll('.paragraph');
console.log(paragraphs2);
paragraphs2.forEach(element => {
    // NodeList isn't limited like HTML Collection.
    console.log(element);
});

const allParagraphs2 = document.querySelectorAll('p');
console.log(allParagraphs2);

const title3 = document.querySelectorAll('#title'); // obligatory returns a NodeList
console.log(title3);
console.log('');

// about getElementsByName() method:
const input = document.getElementsByName('input1'); // obligatory returns a NodeList
console.log(input);

const allParagraphs3 = document.getElementsByName('paragraph');
console.log(allParagraphs3);
console.log('');

// manipulating html elements e styles with DOM:
const main = document.getElementsByTagName('main');
main[0].style.textAlign = 'center';
body[0].style.backgroundColor = 'rgb(50, 50, 50)';
body2.style.color = 'gray';

title.innerText = 'Animes:';
title.style.color = 'lightGray';

input[0].value = 'Comedy';
input[0].style.margin = '0 10px 15px 0';
input[0].style.color = 'red';
input[0].disabled = true;

allParagraphs2[0].textContent = 'Blend S';
allParagraphs2[1].innerHTML = '<abbr title="that one is really good">Seitokai Yakuindomo</abbr>'; // accept html tags inside
allParagraphs2[2].innerText = 'Non Non Biyori';
allParagraphs2.forEach(p => {
    p.style.cursor = 'pointer';
});

// getting attributes from elements:
console.log(input[0].attributes); // .attributes to see all list
console.log(input[0].value); // specify in lists
console.log(title.textContent);
console.log('');

// getting styles from elements:
console.log(input[0].style);
console.log(input[0].style.margin);
console.log(title.style.color);
console.log('');

// events: (list: https://www.w3schools.com/tags/ref_eventattributes.asp)
// connected via HTML document (changing title color to red)
const changeTitleColor = () => {
    title.style.color = 'red';
};

// connecting HTML events via JS (directly) (changing title color to default)
title.onmouseout = eventParameters => {
    // every event has it's own parameter list
    console.log(eventParameters);
    console.log(eventParameters.target);
    title.style.color = 'lightGray';
};

// connecting HTML events via JS (eventListener) (Mark an anime as watched)
const defaultP = ['Blend S', '<abbr title="that one is really good">Seitokai Yakuindomo</abbr>', 'Non Non Biyori'];

allParagraphs2.forEach((p, i) => {
    p.addEventListener('click', () => {
        console.log(p.style.color);
        if (p.style.color === 'lightGreen' || p.style.color === 'lightgreen') {
            p.style.color = 'gray';
            p.innerHTML = defaultP[i];
        } else {
            p.style.color = 'lightGreen';
            p.innerHTML = p.textContent + ' - Watched &#x2714;';
        }
    });
});
