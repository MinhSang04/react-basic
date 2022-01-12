import React, { Component } from 'react';
import '../../styles/child.scss';

class ChildComponent extends Component {
    state = {
        show: false
    }

    handleShowHide = () => {
        this.setState({
            show: !this.state.show,
        })
    }

    handleOnClick = (item) => {
        console.log(item);
        this.props.deleteState(item);
    }

    render() {
        /* const name = this.props.name; */
        const { arr } = this.props;
        const { show } = this.state;
        return (
            <>
                {show === false ?
                    <div>
                        <button className="btn-show" onClick={() => this.handleShowHide()}>Show</button>
                    </div>
                    :
                    <>
                        <div>
                            {
                                arr.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary} &nbsp; <span onClick={() => this.handleOnClick(item)}>x</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div><button onClick={() => this.handleShowHide()}>Hide</button></div>
                    </>
                }
            </>
        )
        // return (
        //     <>
        //         {show === false && <div><button onClick={() => this.handleShowHide()}>Show</button></div>}

        //         {show &&
        //             <>
        //                 <div>
        //                     {
        //                         arr.map((item, index) => {
        //                             return (
        //                                 <div key={item.id}>
        //                                     {item.title} - {item.salary}
        //                                 </div>
        //                             )
        //                         })
        //                     }
        //                 </div>
        //                 <div><button onClick={() => this.handleShowHide()}>Hide</button></div>
        //             </>
        //         }
        //     </>
        // )
    }
}

// import React from 'react'

// const ChildComponent = (props) => {
//     const { arr } = props;
//     return (
//         <>
//             {
//                 arr.map((item, index) => {
//                     if (item.salary >= 500) {
//                         return (
//                             <div key={item.id}>
//                                 {item.title} - {item.salary} $
//                             </div>
//                         )
//                     }
//                 })
//             }
//         </>
//     )
// }

export default ChildComponent
