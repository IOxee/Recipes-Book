export class CarrouselImages {
  constructor(
    private _image: string,
    private _alt: string
  ) { }

  get image(): string {
    return this._image;
  }

  set image(value: string) {
    this._image = value;
  }

  get alt(): string {
    return this._alt;
  }

  set alt(value: string) {
    this._alt = value;
  }
}

