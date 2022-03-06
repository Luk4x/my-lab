console.log();

const companies = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 }
];

// getting all companies that was founded after 1970 (it's possible to do with reduce, but it's clearly a filter situation, mainly because the return is an array).
// basically: if you want to return a new array with only the items that meet a certain condition, ie filter, use .filter();
const companiesFoundedAfter1970 = companies.reduce((validCompanies, company) => {
    if (company.foundedOn > 1970) validCompanies.push(company);
    return validCompanies;
}, []);

// const companiesFoundedAfter1970 = companies.filter(company => {
//     if (company.foundedOn > 1970) return true;
// });
// console.log(companiesFoundedAfter1970);

console.log(companiesFoundedAfter1970);
console.log();

// updating all marketValues by +10. (it's possible, but it's clearly a map situation, mainly because the return has the same amount of items in the array).
// basically: if you want to return an array with the same number of items as the original, use .map();
const companiesMarketValuePlus10 = companies.reduce((marketValuePlus10, company) => {
    marketValuePlus10.push(company.marketValue + 10);
    return marketValuePlus10;
}, []);

// const companiesMarketValuePlus10 = companies.map(company => {
//     return company.marketValue + 10;
// });

console.log(companiesMarketValuePlus10);
console.log();

// separate companies that has marketValue less than 300 and higher than 300 by name (that's a great exercise to show a reduce situation. I organized the array elements into coherent properties of an object to meet demand).
// basically: if you want to return a different data type other than array/reduce the array to a result, that is, make a more abrupt transformation, use .reduce();
const companiesNameByMarketValue = companies.reduce((companies, company) => {
    if (companies['marketValue<300'] == null) companies['marketValue<300'] = [];
    if (companies['marketValue>300'] == null) companies['marketValue>300'] = [];

    if (company.marketValue < 300) {
        companies['marketValue<300'].push(company.name);
    } else {
        companies['marketValue>300'].push(company.name);
    }

    return companies;
}, {});
console.log(companiesNameByMarketValue);
console.log();

// getting marketValue sum
const marketValueSum = companies.reduce((sum, company) => {
    sum += company.marketValue;
    return sum;
}, 0);
console.log(marketValueSum);
console.log();
