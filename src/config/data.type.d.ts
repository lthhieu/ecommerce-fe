export interface IBackendRes<T> {
    data?: T,
    message: string | string[],
    statusCode: number,
    error?: string
}
export interface ICategories {
    "_id": string,
    "title": string,
    "image"?: string,
    "slug"?: string,
    "createdAt"?: string,
    "updatedAt"?: string,
    "__v"?: number
}
export interface ICategoriesWithIcons extends ICategories {
    icon: JSXElement
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
    "description": string[],
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

export interface IUser {
    "_id"?: string,
    "firstName"?: string,
    "lastName"?: string,
    "email"?: string,
    "mobile"?: string,
    "role"?: string,
    "wishlist"?: [],
    "isBlocked"?: boolean,
    "cart"?: [],
    "__v"?: number,
    "createdAt"?: string,
    "updatedAt"?: string,
    "username"?: string
}
export interface IAccount {
    "access_token": string,
    "user": {
        "_id": string,
        "firstName": string,
        "lastName": string,
        "email": string,
        "mobile": string,
        "wishlist": [],
        "isBlocked": boolean,
        "cart": [],
        "__v": number,
        "createdAt": string,
        "updatedAt": string
    }
}