import React, { Component } from 'react'
import Test from '../hoc/Test.js';
import logo from '../../assets/images/avatar.jpg';
import { connect } from 'react-redux';

class Home extends Component {
    handleDeleteUser = (item) => {
        this.props.deleteUserRedux(item);
    }

    handleCreateUser = () => {
        this.props.addUserRedux();
    }

    render() {
        console.log(this.props);
        let listUsers = this.props.dataRedux;
        return (
            <>
                <div>
                    Hello world to React.js
                </div>
                <div><img style={{ width: '200px', height: '200px' }} src={logo} /></div>
                <div>
                    {listUsers && listUsers.length > 0 && listUsers.map((item, index) => {
                        return (
                            <div key={item.id}>{index + 1} - {item.name}
                                &nbsp;<span onClick={() => this.handleDeleteUser(item)}>x</span>
                            </div>
                        )
                    })}
                    <button type="button" onClick={() => this.handleCreateUser()}>Add new</button>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return { dataRedux: state.users }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete }),
        addUserRedux: () => dispatch({ type: 'CREATE_USER' }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Test(Home))
