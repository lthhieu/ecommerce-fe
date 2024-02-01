import axios from './custom-axios'
import { IBackendRes, ICategories } from './data.type'

export const apiFetchCategories = () => {
    return axios.get<IBackendRes<ICategories[]>>('categories')
}