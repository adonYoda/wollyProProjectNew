export const createToken = (email: string, password: string) => `Basic ${window.btoa(email + ':' + password)}`
export const baseUrl = "http://localhost:8080/"
export const homePage = "/"
export const profilePage = "/profile"
