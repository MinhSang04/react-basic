import React from 'react'

class MyComponent extends React.Component {
    state = {
        name: 'Minh Sang',
        phone: '0334054004'
    }

    handleOnChangeName = (event) => {
        this.setState({ name: event.target.value })
    }

    handleClickButton = () => {
        alert('click me');
    }

    render() {
        return (
            <React.Fragment>
                <div className="first">
                    <input type="text" value={this.state.name} onChange={(event) => this.handleOnChangeName(event)} />
                    Hello {this.state.name}
                </div>
                <div className="second">
                    Phone {this.state.phone}
                </div>
                <div className="third">
                    <button onClick={() => this.handleClickButton()}>Click me</button>
                </div>
            </React.Fragment>
        )
    }
}

export default MyComponent //Để sử dụng Component bên ngoài

