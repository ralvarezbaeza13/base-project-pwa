export class Pokemon {
  id: string;
  name: string;

  constructor(data: { id: string; name: string }) {
    this.id = data.id;
    this.name = data.name;
  }
}
