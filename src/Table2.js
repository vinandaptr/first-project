import React, { Component } from 'react';

class Table2 extends Component {
    render() {
        // console.log(this.props.usersCollection)
        return (
            <div className="wrapper-users">
                <h2 className="text-center">List User</h2>
                <div className="container">
                    <table className="table table-striped table-dark">
                        <thead className="thead-dark">
                            <tr>
                                <td><b>ID</b></td>
                                <td><b>Email</b></td>
                                <td><b>Phone Number</b></td>
                                <td><b>Password</b></td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.usersCollection.length ?
                                this.props.usersCollection.map(obj => {
                                    return (
                                        <tr key={obj.id}>
                                            <td>
                                                {obj.id}
                                            </td>
                                            <td>
                                                {obj.email}
                                            </td>
                                            <td>
                                                {obj.phone}
                                            </td>
                                            <td>
                                                {obj.password}
                                            </td>
                                            <td>
                                                <button type="submit" onClick={() => this.props.handleRemove(obj.id)}>Delete</button>
                                                <button type="submit">Edit</button>
                                            </td>
                                        </tr>
                                    );
                                }) : null
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Table2;