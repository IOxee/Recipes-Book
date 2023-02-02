export class Ingredientes {
  constructor (private _name: string, private _amount: string) { }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get amount(): string {
    return this._amount;
  }

  set amount(value: string) {
    this._amount = value;
  }
}

