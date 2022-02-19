// [ ] Faça um programa onde os jurados vão dar a explicação para cada nota dada. São permitidas notas de 0 a 10. Cada nota deve conter uma mensagem diferente.

const prompt = require('prompt-sync')()

console.log('Akame Ga Kill! \nEnter a number from 1 to 10 to hear different opinions about the anime, in order from worst to best.')
let userNum = parseInt(prompt('Number: '))

switch (userNum) {
    case 1:
        console.log("My rating is 1 because I didn't like the story in general.")
    break

    case 2:
        console.log('My rating is 2 because i think the characters were misused.')
    break

    case 3:
        console.log("My rating is 3 because i don't like it when characters die.")
    break

    case 4:
        console.log('My rating is 4 because i read the manga, and the anime is different.')
    break

    case 5:
        console.log('My rating is 5. It was good but could be better than that.')
    break

    case 6:
        console.log('My rating is 6 because i liked the story in general, but the ending was pretty hard.')
    break

    case 7:
        console.log("My rating is 7, but don't misunderstand me, this anime is very good, but i've seen better.")
    break

    case 8:
        console.log('My rating is 8. The tragedies in the anime are part of the main message of the story.')
    break

    case 9:
        console.log('My rating is 9. But it was almost 10, i really liked the anime, but i feel like something was missing.')
    break
    
    case 10:
        console.log('My rating is 10. I cried a lot, this anime made me extremely depressed, but I value it. Acceptance, maturity.. I will take many of the teachings of this anime for my entire life.')
    break

    default:
        console.log('Please, enter only numbers from 1 to 10.')
    break
}