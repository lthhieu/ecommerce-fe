import axios from './custom-axios'

export const apiFetchCategories = () => {
    return axios.get('categories')
}