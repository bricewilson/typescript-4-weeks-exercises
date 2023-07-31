import { logger } from './decorators';

export class Engineer {

  specialty: string = 'Electrical Engineering';

  @logger
  printSpecialty(): void {
    console.log(`Specialty: ${this.specialty}`);
  }
}

let eng = new Engineer();
eng.printSpecialty();