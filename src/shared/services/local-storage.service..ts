export class LocalStorageService {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }

  public set<T>(value: T): void {
    localStorage.setItem(this.name, JSON.stringify(value));
  }

  public get<T>(): T | null {
    const data = localStorage.getItem(this.name);
    if (data) {
      return JSON.parse(data) as T;
    }
    return null;
  }

  public delete(): void {
    localStorage.removeItem(this.name);
  }
}
