// [ ] Escreva um programa onde, você chame uma função, e ela diga que ano estamos!

const getYear = () => {
    let year = new Date().getFullYear();
    const getFormattedMonth = function () {
        let month = new Date().getMonth();

        switch (month) {
            case 0:
                return 'January';
                break;

            case 1:
                return 'February';
                break;

            case 2:
                return 'March';
                break;

            case 3:
                return 'April';
                break;

            case 4:
                return 'May';
                break;

            case 5:
                return 'June';
                break;

            case 6:
                return 'July';
                break;

            case 7:
                return 'August';
                break;

            case 8:
                return 'September';
                break;

            case 9:
                return 'October';
                break;

            case 10:
                return 'November';
                break;

            case 11:
                return 'December';
                break;

            default:
                return '<Error>';
                break;
        }
    };

    return `${getFormattedMonth()}, ${year}`;
};

console.log(`We are in ${getYear()}`);
