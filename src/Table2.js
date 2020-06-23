import React, { Component } from 'react';

class Table2 extends Component {
    render() {
        // console.log(this.props.usersCollection)
        return (
            <div className="wrapper-users">
                <p></p>
                <h3 className="text-center">List User</h3>
                <p></p>
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
                                                <button className="btn-md btn-warning btn-user" type="submit">Edit</button>

                                                <button className="btn-md btn-danger btn-user" type="submit" 
                                                onClick={() => this.props.handleRemove(obj.id)}>Delete</button>
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