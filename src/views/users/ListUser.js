import React, { Component } from 'react';
import axios from 'axios';
import '../../styles/user.scss';
import withRouter from './withRouter.js';

class ListUser extends Component {
    state = {
        listUsers: []
    }

    async componentDidMount() {
        /* axios.get('https://reqres.in/api/users?page=2').then(res => {
            console.log(res.data.data);
        }) */
        let res = await axios.get('https://reqres.in/api/users?page=1');
        /* console.log(res.data.data); */
        this.setState({
            listUsers: res && res.data && res.data.data ? res.data.data : []
        })
    }

    handleViewDetail = (item) => {
        /* console.log(item); */
        this.props.router.navigate('/user/' + item.id);
    }

    render() {
        let { listUsers } = this.state;
        console.log(this.props);
        return (
            <div className="list-user-container">
                <div className="title">Khách hàng</div>
                <div className="list-user-content">
                    {listUsers && listUsers.length > 0 && listUsers.map((item, index) => {
                        return (
                            <div key={item.id} className="child" onClick={() => this.handleViewDetail(item)}>
                                {index + 1} - {item.first_name} {item.last_name}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default withRouter(ListUser)
