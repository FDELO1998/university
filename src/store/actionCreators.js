import { CHANGE_INPUT_VALUE, CHANGE_LIST, DELETE_ITEM, INIT_LIST_ACTION, GET_INIT_LIST } from './actionTypes';
// import axios from 'axios';

export const GetInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
});

export const getAddItemAction = () => ({
    type: CHANGE_LIST
});

export const deleteAddItemAction = (value) => ({
    type: DELETE_ITEM,
    index: value
});

export const initListAction = (data) => ({
    type: INIT_LIST_ACTION,
    data
})

export const getInitList = () => ({
    type: GET_INIT_LIST
})
// export const getTodoList = () => {
//     return (dispatch) => {
//         axios.get('/list.json').then((res)=>{
//             const data = res.data;
//             const action = initListAction(data);
//             dispatch(action);
//         });
//     }
// }