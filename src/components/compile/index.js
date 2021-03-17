import React from 'react';
// import StickyForceLayout from '../Observe';
import Todolist from '../Todoitem/Todolist';
import './index.css';

class Compile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            inputvalue: '',
            todolist: []
        }
    }
    render(){
        return <div className="Compile-edit">
            {/* <StickyForceLayout /> */}
            <input value = {this.state.inputvalue} onChange={this.handleChangeValue.bind(this)}/><button onClick={this.handlebuttonClick.bind(this)}>submit</button>
            <ul>
                {
                    this.state.todolist.map((item, index) => {
                       return   <Todolist key={index} content={item} index={index} onClick={this.handleItemclick.bind(this)}/>
                    })
                }
              
            </ul>
            {/* <iframe src="https://tool.lu/coderunner/embed/aGd.html" width="650" height="550" frameborder="0" mozallowfullscreen webkitallowfullscreen allowfullscreen></iframe> */}
        </div>
    };
    handleChangeValue(e) {
        
        this.setState({
            inputvalue: e.target.value
        })
    }
    handlebuttonClick() {
        this.setState({
            todolist: [...this.state.todolist, this.state.inputvalue],
            inputvalue: ''
        })
    }
    handleItemclick(index){
        const list = [...this.state.todolist];
        
        list.splice(index,1);
        this.setState({
            todolist: list
        })
    }
   
}
export default Compile;