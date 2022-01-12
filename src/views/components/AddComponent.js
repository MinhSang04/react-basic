import React, { Component } from 'react'

class AddComponent extends Component {
    state = {
        title: '',
        salary: '',
    }

    handleChangeTitle = (event) => {
        this.setState({ title: event.target.value })
    }

    handleChangeSalary = (event) => {
        this.setState({ salary: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (!this.state || !this.state.salary) {
            alert('Missing required params');
            return;
        }
        console.log(this.state);
        this.props.updateState({
            id: Math.floor(Math.random() * 1001),
            title: this.state.title,
            salary: this.state.salary
        });

        this.setState({
            title: '',
            salary: ''
        })
    }

    render() {
        return (
            <form>
                <label htmlFor="fname">Title:</label><br />
                <input type="text" value={this.state.title} onChange={(event) => this.handleChangeTitle(event)} /><br />
                <label htmlFor="lname">Salary:</label><br />
                <input type="text" value={this.state.salary} onChange={(event) => this.handleChangeSalary(event)} /><br /><br />
                <input type="submit" value="Submit" onClick={(event) => this.handleSubmit(event)} />
            </form>
        )
    }
}

export default AddComponent
