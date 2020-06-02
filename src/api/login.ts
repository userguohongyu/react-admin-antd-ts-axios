import request from '../utils/request'
export function getValidateCode() {
    return request.get(
        `/auth/validateCode`,
        null
    )
}