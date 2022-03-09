// getting attributes from elements:
const input1 = document.getElementsByName('input1');
console.log(input1[0].attributes); // .attributes to see all
console.log(input1[0].value); // specify in lists
const title4 = document.querySelector('h1');
console.log(title4.textContent);
console.log('');

// manipulating elements
title4.innerText = 'Anime List:';
input1[0].value = 'Comedy';
const paragraphs4 = document.querySelectorAll('p');
paragraphs4[0].textContent = 'Blend S';
paragraphs4[1].innerHTML = '<abbr title="that one is really good">Seitokai Yakuindomo</abbr>';
paragraphs4[2].innerText = 'Non Non Biyori';
