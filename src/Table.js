import React, { Component } from 'react';

class Table extends Component {

    // removeUser = (e, user) => {
    //     e.preventDefault();

    //     if (this.props.removeClick) {
    //         this.props.removeClick(user);
    //     }
    // };

    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.id}
                </td>
                <td>
                    {this.props.obj.email}
                </td>
                <td>
                    {this.props.obj.phone}
                </td>
                <td>
                    {this.props.obj.password}
                </td>
                <td>
                    <button type="submit" onClick={this.props.handleRemove}>Delete</button>
                </td>
            </tr>
        );
    }
}

export default Table;