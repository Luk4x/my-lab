let names = ['Ikaru', 'Takashi', 'Rika', 'Ohana', 'Kaashi', 'Okami']

// Normal for syntax (verbose)
for(let i=0;i<names.length;i++) {
    console.log(names[i])
}
console.log('\n')

// forOf syntax (simple)
for(let name of names) {
    console.log(name)
}
console.log()

// forOf on strings
for(let letter of 'Lucas') {
    console.log(letter)
}
console.log()

for(let name of names) { // looping through the items on array
    for(let letter of name) { // looping through the elements of array items
        console.log(letter)
    }
    console.log()
}