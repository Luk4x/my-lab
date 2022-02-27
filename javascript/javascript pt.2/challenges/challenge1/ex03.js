// [ ] Escreva um programa onde, você chame uma função, e ela diga a hora exata!

const getCurrentTime = function () {
    const getFormattedWeekDay = () => {
        let weekDay = new Date().getDay();

        switch (weekDay) {
            case 0:
                return 'Sunday';
                break;

            case 1:
                return 'Monday';
                break;

            case 2:
                return 'Tuesday';
                break;

            case 3:
                return 'Wednesday';
                break;

            case 4:
                return 'Thursday';
                break;

            case 5:
                return 'Friday';
                break;

            case 6:
                return 'Saturday';
                break;

            default:
                return '<Error>';
                break;
        }
    };
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    let ms = new Date().getMilliseconds();

    return `Today is ${getFormattedWeekDay()} and now it's ${hours}:${minutes}:${seconds}:${ms} o'clock.`;
};

console.log(getCurrentTime());
