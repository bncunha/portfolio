export class Tech {
  image!: string;
  alt!: string;

  constructor(image: string, alt: string) {
    this.image = '/assets/techs/' + image;
    this.alt = alt;
  }
}
