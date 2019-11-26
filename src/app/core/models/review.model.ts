export class ReviewModel {
  created_at: string = null;
  created_by: {
    email: string,
    first_name: string,
    id: string,
    last_name: string,
    username: string,
  } = null;
  id: string = null;
  product: string = null;
  rate: number = null;
  text: string = null;

  constructor(obj?: any) {
    for (const field in obj) {
      if (typeof this[field] !== 'undefined') {
        this[field] = obj && obj[field];
      }
    }
  }
}
