export class ProductModel {
  id: string = null;
  img: string = null;
  text: string = null;
  title: string = null;

  constructor(obj?: any) {
    for (const field in obj) {
      if (typeof this[field] !== 'undefined') {
        this[field] = obj && obj[field];
      }
    }
  }
}
