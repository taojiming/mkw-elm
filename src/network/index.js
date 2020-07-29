import { request } from './request'

export function getSeller() {
    return request({
        url: '/seller',
    })
}

export function getGoods() {
    return request({
        url: '/goods',
    })
}
