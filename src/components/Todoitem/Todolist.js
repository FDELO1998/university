import React from 'react';
// import axios from 'axios';

class Todolist extends React.Component {

    componentDidMount() {
        // axios.get('api/todolist')
        // .then(res => {
        //     console.log(res);
        //     return res;
        // })
        // .catch(()=>alert('error'));
    }

    handleClick() {
        this.props.onClick(this.props.index);
    }
    render() {
        return <li onClick={this.handleClick.bind(this)}>{this.props.content}</li>;
    }

}

export default Todolist;