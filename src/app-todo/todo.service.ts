export class TodoService {
  // Do not place private constructors for jest to load.
  // private constructor() { /**/ }

  private static _instance: TodoService;
  public static Instance = (): TodoService => {
    if (!this._instance) {
      this._instance = new this()
    }
    return this._instance
  }

  public forMockTest(): string {
    return "Success, although in test cases it is considered an unexpected value."
  }
}
