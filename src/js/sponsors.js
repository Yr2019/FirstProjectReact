const sponsors = {
  cash: [40000, 5000, 30400, 12000],
  eu: ['SRL', 'PLO', 'J&K'],
  rus: ['RusAuto', 'SBO']
};

let { eu, eu: [firstName, secondName, thirdName], rus } = sponsors;

const money = sponsors.cash.reduce((previousValue, currentValue) => previousValue + currentValue, 0);

export {eu, rus, money, firstName};