import {GET_IMAGES_LIST_REQUEST, GET_IMAGES_LIST_SUCCESS, GET_IMAGES_LIST_FAIL} from 'actions/imagesList';


const initState = {
    isLoading: false,
    imagesList: [],
    errorMsg: '',
    hasMore:false
};

export default function reducer(state = initState, action) {
    switch (action.type) {
        case GET_IMAGES_LIST_REQUEST:
            return {
                ...state,
                isLoading: true,
                imagesList: [],
                errorMsg: '',
                hasMore:false
            };
        case GET_IMAGES_LIST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                imagesList:action.result.data,
                errorMsg: '',
                hasMore:action.result.data.length==0?false:true
            };
        case GET_IMAGES_LIST_FAIL:
            return {
                ...state,
                isLoading: false,
                imagesList: [],
                errorMsg: '请求错误',
                hasMore:false
            };
        default:
            return state;
    }
}