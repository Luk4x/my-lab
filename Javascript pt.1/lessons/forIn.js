let names = ['Ikaru', 'Takashi', 'Rika', 'Ohana', 'Kaashi', 'Okami']

const Esdeath = {
    anime: 'Akame Ga Kill!',
    romaji: 'Esudesu',
    age: 20,
    voicedBy: {
        japanese: 'Satomi Akesaka',
        english: 'Christine Auten'
    },
    hairColor: 'Blue',
    eyeColor: 'Blue',
    gender: 'Female',
    status: 'Dead',
}

// 2 ways to navigate objects
console.log(`${Esdeath.age} == ${Esdeath['age']}`)
console.log(`${Esdeath.voicedBy.japanese} == ${Esdeath['voicedBy']['japanese']}`)
console.log('\n')

// forIn to loop through the properties and values ​​of an object (and another object within)
for(let property in Esdeath) {
    let typeProperty = typeof Esdeath[property]
    if (typeProperty == 'object') {
        console.log('Voiced By:')
        for(let propertyIn in Esdeath[property]) {
            console.log(`   ${propertyIn}: ${Esdeath[property][propertyIn]}`)
        }
    } else {
        console.log(`${property}: ${Esdeath[property]}`)
    }
}
console.log()

//forIn to get array indexes
for(let index in names) {
    console.log(index)
}