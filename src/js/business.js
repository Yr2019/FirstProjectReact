
import {eu, rus, firstName} from './sponsors';

class MakeBusiness {
  constructor({owner: ow, director : di, cash: ca, emp: em} = {}) {
    this.ow = ow;
    this.director = di;
    this.cash = ca;
    this.emp = em;
    if (typeof (this.di) === 'undefined') this.di = "Victor";
  }
  businessInfo() {
    const sumSponsors = [...eu, ...rus, 'unexpected sponsor'];
    console.log(`We have a business. Owner: ${this.ow}, director: ${this.di}. Our budget: ${this.ca}. And our employers: ${this.em}`);
    console.log('And we have a sponsors: ');
    console.log(...sumSponsors);
    console.log(`Note. Be careful with ${firstName}. It's a huge risk.`);
  }
}

export default MakeBusiness;