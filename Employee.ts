import { Person } from './Person';

export class Employee extends Person {

  constructor(name: string, empID: number) {
    super(name);
    this.EmployeeID = empID;
  }
  
  EmployeeID: number = 0;
}