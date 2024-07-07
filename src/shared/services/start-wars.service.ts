import { iWarsResponse } from '../interfaces/start-wars.interface';

export class StartWarsService {
  static async search(
    name: string,
    setLoader: (loader: boolean) => void
  ): Promise<iWarsResponse> {
    setLoader(true);
    return fetch('https://swapi.dev/api/people/?search=' + name.toLowerCase())
      .then(response => response.json())
      .then(data => {
        return data as iWarsResponse;
      })
      .finally(() => {
        setLoader(false);
      });
  }
}
