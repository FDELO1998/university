
import { CHANGE_INPUT_VALUE, CHANGE_LIST, DELETE_ITEM, INIT_LIST_ACTION } from './actionTypes';
const defaultState = {
    inputValue: '',
    list: [],
}

export default (state = defaultState, action) => {
    if(action.type === CHANGE_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if(action.type === INIT_LIST_ACTION){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list = action.data;
        return newState;
    }
    if(action.type === DELETE_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1); // 知道某个数组元素的下标, 使用此函数可直接清除这一项
        return newState;
    }
    console.log(state, action);
    return state;
}