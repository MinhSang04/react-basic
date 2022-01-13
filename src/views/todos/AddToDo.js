import React from 'react';
import { toast } from 'react-toastify';

class AddToDo extends React.Component {
    state = {
        title: ''
    }

    handleOnChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleOnClickAdd = () => {
        if (!this.state.title) {
            toast.error('Error!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return;
        }
        let toDo = {
            id: Math.floor(Math.random() * 1001),
            title: this.state.title
        }
        this.props.addNewToDo(toDo);
        this.setState({
            title: ''
        })
    }

    render() {
        let { title } = this.state;
        return (
            <>
                <div className="add-todo">
                    <input type="text" value={title} onChange={(event) => this.handleOnChangeTitle(event)} />
                    <button className="add" type="button" onClick={() => this.handleOnClickAdd()}>Add</button>
                </div>
            </>
        )
    }
}

export default AddToDo;