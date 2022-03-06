console.log();

const companies = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 }
];

// adding 10% to all market values, filtering old companies (founded<2000) and returning a sum of market value from all old companies

// adding 10% function
const adding10 = function (company) {
    company.marketValue += (company.marketValue * 10) / 100;
    return company;
};

// filter old companies function
function companiesBefore2000(company) {
    return company.foundedOn < 2000;
}

// sum of marketValue of valid companies
//                             (object destructuring)
const marketValueSum = (total, { marketValue }) => total + marketValue;

// result
newCompanies = companies.map(adding10).filter(companiesBefore2000).reduce(marketValueSum, 0);
console.log(newCompanies);
console.log();
