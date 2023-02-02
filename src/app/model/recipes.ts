import { Ingredientes } from "./ingredientes";
import { Preparation } from "./preparation";
import { CarrouselImages } from "./carrousel-images";

export class Recipes {
  constructor(
    private _id: number,
    private _title: string,
    private _description: string,
    private _header_image: string,
    private _header_image_alt: string,
    private _ingredientes: Ingredientes[],
    private _preparation: Preparation[],
    private _carrouselImages: CarrouselImages[]
  ) { }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get header_image(): string {
    return this._header_image;
  }

  set header_image(value: string) {
    this._header_image = value;
  }

  get header_image_alt(): string {
    return this._header_image_alt;
  }

  set header_image_alt(value: string) {
    this._header_image_alt = value;
  }

  get ingredientes(): Ingredientes[] {
    return this._ingredientes;
  }

  set ingredientes(value: Ingredientes[]) {
    this._ingredientes = value;
  }

  get preparation(): Preparation[] {
    return this._preparation;
  }

  set preparation(value: Preparation[]) {
    this._preparation = value;
  }

  get carrouselImages(): CarrouselImages[] {
    return this._carrouselImages;
  }

  set carrouselImages(value: CarrouselImages[]) {
    this._carrouselImages = value;
  }

}
