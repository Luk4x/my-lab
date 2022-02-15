const numbers = [1, 2, 3, 4, 5, 6, 7, 9]

console.log('numbers:')
console.log(numbers)
console.log('\nnumbers - 3:')
console.log(numbers[2])

const objects = [
    { // mouse
        mark: 'Cougar',
        serie: 'Minos x5',
        maxDpi: 12000,
        colorTheme: 'Black',
        rgb: true,
        maxPollingRate: 2000,
        sensor: 'PixArt PMW3360',
        desktopConfig: {
            dpi: 12000,
            pollingRate: 1000
        },
        mineConfig: {
            dpi: 8000,
            pollingRate: 1000
        },
        osuConfig: {
            dpi: 5400,
            pollingRate: 2000
        }
    },
    { // person
        name: 'Lucas',
        age: 18,
        skills: {
            programmingLanguage: 'JavaScript',
            markupLanguage: 'HTML',
            stylingLanguage: 'CSS'
        },
        sex: 'male',
        height: 1.8
    }
]

console.log('\n\nobjects:')
console.log(objects)
console.log('\nobjects - mouse:')
console.log(objects[0])