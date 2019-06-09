const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

let employersNames = employers.filter((employers) => {
  return employers.length > 0
});
employersNames = employersNames.map((item) => item.toLowerCase().trim());

export {employersNames};