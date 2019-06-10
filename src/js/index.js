
import {eu, rus, firstName, money} from './sponsors';
import {employersNames} from './employers';

class MakeBusiness {
  constructor({owner: ow, director : di = 'Victor', cash: ca, emp: em} = {}) {
    this.ow = ow;
    this.di = di;
    this.ca = ca;
    this.em = em;
  }
  businessInfo() {
    const sumSponsors = [...eu, ...rus, 'unexpected sponsor'];
    console.log(`We have a business. Owner: ${this.ow}, director: ${this.di}. Our budget: ${this.ca}. And our employers: ${this.em}`);
    console.log('And we have a sponsors: ');
    console.log(...sumSponsors);
    console.log(`Note. Be careful with ${firstName}. It's a huge risk.`);
  }
}



const makeBusiness = new MakeBusiness({owner:'Sam', cash: money, emp: employersNames});
makeBusiness.businessInfo();

export default MakeBusiness;