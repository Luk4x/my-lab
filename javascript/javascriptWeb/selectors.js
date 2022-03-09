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
