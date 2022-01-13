import React, { Component } from 'react';
import axios from 'axios';
import withRouter from './withRouter.js';

class DetailUser extends Component {
    state = {
        user: {}
    }
    async componentDidMount() {
        if (this.props.router && this.props.router.params) {
            let id = this.props.router.params.id;
            let res = await axios.get('https://reqres.in/api/users/' + id); // get(`https://reqres.in/api/users/${id}`)
            this.setState({
                user: res && res.data && res.data.data ? res.data.data : {}
            })
        }
    }

    handleBackListUser = () => {
        this.props.router.navigate('/user');
    }

    render() {
        console.log(this.props);
        let { user } = this.state;
        let isEmptyObj = Object.keys(user).length === 0; //Kiểm tra rỗng
        return (
            <>
                {isEmptyObj === false &&
                    <>
                        <div>User name: {user.first_name} {user.last_name}</div>
                        <div>User email: {user.email}</div>
                        <div><img src={user.avatar} /></div>
                        <div><button type="button" onClick={() => this.handleBackListUser()}>Back</button></div>
                    </>
                }
            </>
        )
    }
}

export default withRouter(DetailUser);
