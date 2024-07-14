import { iPerson, iWarsResponse } from '../interfaces/start-wars.interface';

export class StartWarsService {
  static async search(name: string): Promise<iWarsResponse> {
    return fetch('https://swapi.dev/api/people/?search=' + name.toLowerCase())
      .then(response => response.json())
      .then(data => {
        return data as iWarsResponse;
      });
  }

  static async getPage(id: number): Promise<iWarsResponse> {
    return fetch('https://swapi.dev/api/people?page=' + Number(id))
      .then(response => response.json())
      .then(data => {
        return data as iWarsResponse;
      });
  }

  static async getPerson(id: number): Promise<iPerson> {
    return fetch('https://swapi.dev/api/people/' + Number(id))
      .then(response => response.json())
      .then(data => {
        return data as iPerson;
      });
  }
}
