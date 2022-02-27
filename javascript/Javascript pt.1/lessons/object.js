const mouse = {
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
}

console.log('mouse Object:')
console.log(mouse)

console.log('\nGeneral mouse Configs:')
console.log(mouse.mark)
console.log(mouse.serie)
console.log(mouse.sensor)
console.log(mouse.maxDpi + 'DPI')
console.log(mouse.colorTheme)
console.log('RGB = ' + mouse.rgb)
console.log(mouse.maxPollingRate + 'hz')

console.log('\nDesktop mouse Configs:')
console.log(mouse.desktopConfig.dpi + 'DPI')
console.log(mouse.desktopConfig.pollingRate + 'hz')

console.log('\nMinecraft mouse Configs:')
console.log(mouse.mineConfig.dpi + 'DPI')
console.log(mouse.mineConfig.pollingRate + 'hz')

console.log('\nOsu mouse Configs:')
console.log(mouse.osuConfig.dpi + 'DPI')
console.log(mouse.osuConfig.pollingRate + 'hz')


const person = {
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

console.log('\n\person Object:')
console.log(person)

console.log('\nGeneral person Characteristics:')
console.log(person.name)
console.log(person.age)
console.log(person.sex)
console.log(person.height + 'm')

console.log('\nperson Skills:')
console.log(person.skills.markupLanguage)
console.log(person.skills.stylingLanguage)
console.log(person.skills.programmingLanguage)