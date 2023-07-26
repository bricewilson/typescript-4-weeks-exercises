export class Person {

  constructor(personName: string) {
    this.Name = personName;
  }

  Name: string = "";

  private _address: string = "";

  set Address(value: string) {
    this._address = value;
  }

  get Address() {
    return this._address.toUpperCase();
  }

  PrintPersonInfo(): void {
    console.log(`${this.Name} - ${this.Address}`);
  }
}

