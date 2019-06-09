
import {eu, rus, firstName} from './sponsors';

class MakeBusiness {
  constructor({owner, director = "Victor", cash, emp} = {}) {
    this.owner = owner;
    this.director = director;
    this.cash = cash;
    this.emp = emp;
  }
  businessInfo() {
    const sumSponsors = [...eu, ...rus, 'unexpected sponsor'];
    console.log(`We have a business. Owner: ${this.owner}, director: ${this.director}. Our budget: ${this.cash}. And our employers: ${this.emp}`);
    console.log('And we have a sponsors: ');
    console.log(...sumSponsors);
    console.log(`Note. Be careful with ${firstName}. It's a huge risk.`);
  }
}

export default MakeBusiness;