import { iPerson } from '../interfaces/start-wars.interface';

export class PersonModel {
  name: string;

  birth_year: string;
  gender: string;
  homeworld: string;
  checked: boolean;
  url: string;

  constructor(data: iPerson) {
    this.name = data.name;
    this.birth_year = data.birth_year;
    this.gender = data.gender;
    this.homeworld = data.homeworld;
    this.url = data.url;
    this.checked = false;
  }
}
