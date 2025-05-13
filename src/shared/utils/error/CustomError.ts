export class CustomError extends Error {
  public readonly statusCode: number;

  constructor(
    public message: string,
    statusCode: number,
    public readonly name: string = "CustomError"
  ) {
    super(message);
    this.statusCode = statusCode;
    this.name = name;
    Error.captureStackTrace(this, this.constructor);
  }
}