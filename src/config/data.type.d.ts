export interface IBackendRes<T> {
    data?: T,
    message: string,
    statusCode: number,
    error?: string | string[]
}
export interface ICategories {
    "_id": string,
    "title": string,
    "image": string,
    "slug": string,
    "createdAt": string,
    "updatedAt": string,
    "__v": number
}

export interface IPagination<T> {
    "meta": {
        "current": number,
        "pageSize": number,
        "pages": number,
        "total": number
    },
    "result": T
}
export interface IProducts {
    "_id": string,
    "title": string,
    "slug": string,
    "description": string | string[],
    "brand": {
        "_id": string,
        "title": string
    },
    "price": number,
    "category": {
        "_id": string,
        "title": string
    },
    "quantity": number,
    "sold": number,
    "thumb": string,
    "images": string | string[],
    "color": string | string[],
    "ratings": [],
    "totalRating": number,
    "createdAt": string,
    "updatedAt": string,
    "__v": number
}
export interface ICollections {
    category: ICategories,
    brands: {
        _id: string,
        title: string
    }[]
}