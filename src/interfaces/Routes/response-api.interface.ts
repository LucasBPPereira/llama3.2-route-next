export interface IResponseAPI<T> {
    success: boolean;
    message: string;
    data: T | T[] | null;
    time: string;
}