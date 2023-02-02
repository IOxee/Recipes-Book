export class Details {
  /*
    id: number = 0;
    name: string = '';
    description: string = '';
    image: string = '';
    ingredients: String[] = [];
    instructions: String[] = [];
  */

  constructor(
    public _id: number,
    public _name: string,
    public _description: string,
    public _image: string,
    public _ingredients: String[],
    public _instructions: String[]
  ) { }

  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get description(): string {
    return this._description;
  }

  get image(): string {
    return this._image;
  }

  get ingredients(): String[] {
    return this._ingredients;
  }

  get instructions(): String[] {
    return this._instructions;
  }

  set id(id: number) {
    this._id = id;
  }

  set name(name: string) {
    this._name = name;
  }

  set description(description: string) {
    this._description = description;
  }

  set image(image: string) {
    this._image = image;
  }

  set ingredients(ingredients: String[]) {
    this._ingredients = ingredients;
  }

  set instructions(instructions: String[]) {
    this._instructions = instructions;
  }
}
