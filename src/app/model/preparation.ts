export class Preparation {
  constructor(
    private _step: string,
    private _description: string
  ) { }

  get step(): string {
    return this._step;
  }

  set step(value: string) {
    this._step = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }
}
