import axios from './custom.axios'
import { IBackendRes, ICategories, IPagination, IProducts } from './data.type'

export const apiFetchCategories = () => {
    return axios.get<IBackendRes<ICategories[]>>('categories')
}
export const apiFetchProducts = (query: string) => {
    return axios.get<IBackendRes<IPagination<IProducts[]>>>(`products?${query}`)
}