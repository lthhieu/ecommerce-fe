import axios from './custom.axios'
import { IAccount, IBackendRes, ICategories, IPagination, IProducts, IUser } from './data.type'

export const apiFetchCategories = () => {
    return axios.get<IBackendRes<ICategories[]>>('categories')
}
//products
export const apiFetchProducts = (query: string) => {
    return axios.get<IBackendRes<IPagination<IProducts[]>>>(`products?${query}`)
}
export const apiFetchProductById = (id: string) => {
    return axios.get<IBackendRes<IProducts>>(`products/${id}`)
}
//users
export const apiRegister = (data: IUser) => {
    return axios.post<IBackendRes<any>>('users', { ...data })
}
export const apiConfirmEmail = (token: string) => {
    return axios.post<IBackendRes<IUser>>(`users/confirm-email?token=${token}`)
}
export const apiResetPassword = (token: string, password: string) => {
    return axios.patch<IBackendRes<IUser>>(`users/reset-password?token=${token}`, { password })
}
//auth
export const apiLogin = (data: IUser) => {
    return axios.post<IBackendRes<IAccount>>('auth/login', { ...data })
}
export const apiProfile = () => {
    return axios.get<IBackendRes<IUser>>('auth/profile')
}
export const apiLogout = () => {
    return axios.post<IBackendRes<string>>('auth/logout')
}
//mail
export const apiForgotPassword = (email: string) => {
    return axios.get<IBackendRes<any>>(`mail/forgot-password?email=${email}`)
}