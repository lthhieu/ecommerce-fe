export const path = {
    HOME: '/',
    PRODUCTS: 'products',
    BLOGS: 'blogs',
    OUR_SERVICE: 'our-service',
    FAQS: 'faqs',
    DETAIL_PRODUCT: 'products/:id',
    LOGIN: 'login',
    CONFIRM_EMAIL: ':confirm-email',
}
export const navigation = [
    {
        id: 1,
        value: 'HOME',
        path: path.HOME
    },
    {
        id: 2,
        value: 'PRODUCTS',
        path: path.PRODUCTS
    }, {
        id: 3,
        value: 'BLOGS',
        path: path.BLOGS
    }, {
        id: 4,
        value: 'OUR SERVICE',
        path: path.OUR_SERVICE
    }, {
        id: 5,
        value: 'FAQs',
        path: path.FAQS
    }
]
export const tab = [
    { id: 1, value: 'best seller' },
    { id: 2, value: 'new arrivals' }
]
export const collections = [
    { id: 1, value: 'smartphone' },
    { id: 2, value: 'tablet' },
    { id: 3, value: 'laptop' }
]