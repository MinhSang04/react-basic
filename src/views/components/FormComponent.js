import React, { Component } from 'react';
import ChildComponent from './ChildComponent.js';
import AddComponent from './AddComponent.js';

class FormComponent extends Component {
    state = {
        arr: [
            { id: 1, title: 'Developers', salary: '500' },
            { id: 2, title: 'Testers', salary: '400' },
            { id: 3, title: 'Project managers', salary: '1000' }
        ]
    }

    updateState = (data) => {
        console.log(data);
        /* let current = this.state.arr;
        current.push(data); */
        this.setState({
            /* arr: current */
            arr: [...this.state.arr, data] //... là toán tử copy || copy lại tất cả các phần tử || tạo mảng mới với phần tử đã copy và phần tử data
        })
    }

    deleteState = (item) => {
        let current = this.state.arr;
        current = current.filter(current => current.id !== item.id); // Tạo ra mảng mới với điều kiện lọc
        this.setState({
            arr: current,
        })
    }

    render() {
        return (
            <>
                <AddComponent updateState={this.updateState} />
                <ChildComponent arr={this.state.arr} deleteState={this.deleteState} />
            </>
        )
    }
}

export default FormComponent
