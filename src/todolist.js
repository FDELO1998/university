import React, { Component } from 'react';
import { Input, Button, List } from 'antd';
import store from './store';
// import axios from 'axios';
import { GetInputChangeAction, deleteAddItemAction, getAddItemAction, initListAction, getInitList } from './store/actionCreators';
import 'antd/dist/antd.css';


class Todolist extends Component {

    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleInputchange = this.handleInputchange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleButtonclick = this.handleButtonclick.bind(this);
        this.handleItemDelete  = this.handleItemDelete.bind(this);
        store.subscribe(this.handleStoreChange);
    }
    render() {
        return (
          <div>
            <div style={{ margin: 20 }}>
              <Input
                style={{ width: "300px", marginRight: 20 }}
                value={this.state.inputValue}
                onChange={this.handleInputchange}
              />
              <Button type="primary" onClick={this.handleButtonclick}>提交</Button>
              <List
                style={{ width: "300px", marginTop: 20 }}
                dataSource={this.state.list}
                bordered
                renderItem={(item, index) => <List.Item onClick={this.handleItemDelete.bind(this, index)}> 
                    {item}</List.Item>}
              /> 
              
            </div>
            <div></div>
          </div>
        );
    }

    componentDidMount() {
        const action = getInitList();
        store.dispatch(action);
        // axios.get('/list.json').then((res) => {
        //     const data = res.data;
        //     const action = initListAction(data);
        //     store.dispatch(action);

        // })
    }
    handleInputchange(e) {
        const action = GetInputChangeAction(e.target.value);
        store.dispatch(action);
    }
    handleStoreChange() {
        this.setState(store.getState())
    }
    handleButtonclick(){
        const action = getAddItemAction()
        store.dispatch(action);
    }
    handleItemDelete(e){
        // 定义函数的时候没有默认参数可以通过bind或者箭头函数把参数传进去
        const action = deleteAddItemAction(e);
        store.dispatch(action);
    }
}

export default Todolist;