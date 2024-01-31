export interface IBackendRes<T> {
    data?: T,
    message: string,
    statusCode: number,
    error?: string | string[]
}
export interface ICategories {
    "_id": string,
    "title": string,
    "slug": string,
    "createdAt": string,
    "updatedAt": string,
    "__v": number
}