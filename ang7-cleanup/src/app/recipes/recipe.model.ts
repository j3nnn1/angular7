export class Recipe {
  // vanilla typescript
  // new objects
  public name: string;
  public description: string;
  public imagePath: string;

  // basic blueprints..

  constructor(name: string, desc: string, imagePath: string) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
  }
}
