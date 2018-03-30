export const GET_IMAGES_LIST_REQUEST = "userInfo/GET_IMAGES_LIST_REQUEST";
export const GET_IMAGES_LIST_SUCCESS = "userInfo/GET_IMAGES_LIST_SUCCESS";
export const GET_IMAGES_LIST_FAIL = "userInfo/GET_IMAGES_LIST_FAIL";

export function getImagesList(pageNo, pageSize) {
    return {
        types: [
            GET_IMAGES_LIST_REQUEST, GET_IMAGES_LIST_SUCCESS, GET_IMAGES_LIST_FAIL
        ],
        promise: client => client
            .get(`/api/list`)
    }
}