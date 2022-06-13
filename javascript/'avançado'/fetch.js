import fetch from 'node-fetch';
import prompt from 'prompt-sync';

// request pattern: getBRLCurrency(2000, 'JPY');
const getBRLCurrency = async (valueBRL, currency) => {
    currency += 'BRL';

    const apiData = await fetch('http://economia.awesomeapi.com.brr/json/last/USD-BRL,EUR-BRL,BTC-BRL,AED-BRL,ARS-BRL,AUD-BRL,BOB-BRL,CAD-BRL,CHF-BRL,CLP-BRL,CNY-BRL,COP-BRL,DKK-BRL,DOGE-BRL,ETH-BRL,GBP-BRL,HKD-BRL,ILS-BRL,INR-BRL,JPY-BRL,LTC-BRL,MXN-BRL,NOK-BRL,NZD-BRL,PEN-BRL,PLN-BRL,PYG-BRL,RUB-BRL,SAR-BRL,SEK-BRL,SGD-BRL,THB-BRL,TRY-BRL,TWD-BRL,UYU-BRL,XRP-BRL,ZAR-BRL')
        .then(res => res.json())
        .catch(err => {
            console.error(`Something happened: ${err}`);
        });

    const quotation = apiData[currency].high;
    const value = valueBRL / quotation;

    console.log('\n Quotation: ', quotation);
    console.log(` ${valueBRL} = ${value.toFixed(2)}\n`);
};

const userValue = parseFloat(prompt()(' Value: '));
const currency = prompt()(' Currency: ');

getBRLCurrency(userValue, currency);
