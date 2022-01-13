import React, { Component } from 'react'
import '../../styles/nav.scss';
import { Link, NavLink } from 'react-router-dom'

class Navigation extends Component {
    render() {
        return (
            <div className="topnav">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/my">My</NavLink>
                <NavLink to="/todos">Todos</NavLink>
                <NavLink to="/form">Form</NavLink>
                <NavLink to="/user">User</NavLink>
                {/* <NavLink to="/" activeClassName="active">Home</NavLink>
                <NavLink to="/todos" activeClassName="active">Todos</NavLink>
                <NavLink to="/form" activeClassName="active">Form</NavLink> */}
                {/*  <Link className="active" to="/">Home</Link>
                <Link to="/todos">Todos</Link>
                <Link to="/form">Form</Link> */}
            </div>
        )
    }
}

export default Navigation
