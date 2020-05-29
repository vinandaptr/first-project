import React, { Component } from 'react';
import axios from 'axios';
import Table2 from './Table2';

class User extends Component {

    constructor(props) {
        super(props);
        this.state = { usersCollection: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:1212/user/get-all')
            .then(res => {
                this.setState({ usersCollection: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    // dataTable() {
    //     return this.state.usersCollection.map((data, i) => {
    //         return <Table2 obj={data} key={i} />;
    //     });
    // }

    handleRemove = (id) => {
        // console.log(id);
        axios
            .delete('http://localhost:1212/user/' + id)
            .then(res => {
                console.log(res);
                if (res.status === 200) {
                    this.componentDidMount()
                }
            })
            .catch(err => {
                console.log(err);
            });
    };

    render() {
        return (
                <div className="container">
                    <Table2 usersCollection = {this.state.usersCollection} handleRemove = {this.handleRemove} />
                </div>
        )
    }
}

export default User;