import React from 'react';
import '../../styles/listToDo.scss';
import AddToDo from './AddToDo.js';
import { toast } from 'react-toastify';

class ListToDo extends React.Component {
    state = {
        listToDos: [
            { id: 1, title: 'Doing homework' },
            { id: 2, title: 'Making videos' },
            { id: 3, title: 'Fixing bugs' },
        ],
        eToDo: {}
    }

    addNewToDo = (toDo) => {
        this.setState({
            listToDos: [...this.state.listToDos, toDo]
        })
        toast.success('Add success!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    deleteToDo = (toDo) => {
        let currentToDo = this.state.listToDos;
        currentToDo = currentToDo.filter(currentToDo => currentToDo.id !== toDo.id);
        this.setState({
            listToDos: currentToDo
        })
        toast.success('Delete success!');
    }

    editToDO = (toDo) => {
        this.setState({
            eToDo: toDo
        })
    }

    changeToDo = (event) => {
        let ecurrentToDo = { ...this.state.eToDo };
        ecurrentToDo.title = event.target.value;
        this.setState({
            eToDo: ecurrentToDo
        })
    }

    saveToDo = (toDo) => {
        let { listToDos, eToDo } = this.state;
        let isEmptyObj = Object.keys(eToDo).length === 0;
        if (isEmptyObj === false && eToDo.id === toDo.id) {
            let currentToDo = [...listToDos];
            let objIndex = currentToDo.findIndex(obj => obj.id === toDo.id);
            currentToDo[objIndex].title = eToDo.title;
            this.setState({
                listToDos: currentToDo,
                eToDo: {}
            })
            toast.success('Save success!');
        }
    }

    render() {
        let { listToDos, eToDo } = this.state;
        let isEmptyObj = Object.keys(eToDo).length === 0; //Kiểm tra rỗng
        return (
            <div className="list-todo-container">
                <AddToDo addNewToDo={this.addNewToDo} />
                <div className="list-todo-content">
                    {listToDos && listToDos.length > 0 &&
                        listToDos.map((item, index) => {
                            return (
                                <div key={item.id} className="todo-child">
                                    {isEmptyObj === true ?
                                        <>
                                            <span>{index + 1} - {item.title}</span>
                                            <button className="edit" onClick={() => this.editToDO(item)}>Edit</button>
                                        </>
                                        :
                                        <>
                                            {eToDo.id === item.id ?
                                                <>
                                                    <span>{index + 1} - <input value={eToDo.title} onChange={(event) => this.changeToDo(event)} /></span>
                                                    <button className="save" onClick={() => this.saveToDo(item)}>Save</button>
                                                </>
                                                :
                                                <>
                                                    <span>{index + 1} - {item.title}</span>
                                                    <button className="edit" onClick={() => this.editToDO(item)}>Edit</button>
                                                </>
                                            }
                                        </>
                                    }
                                    <button className="delete" onClick={() => this.deleteToDo(item)}>Delete</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default ListToDo