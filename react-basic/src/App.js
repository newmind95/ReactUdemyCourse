import React, { Component} from 'react';
import axios from 'axios';
import Loading from './Loading';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            loading: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    } 
    

    getUsers() {
        this.setState({
            loading: true 
        })
        axios('https://api.randomuser.me/?nat=US&results=5').then(response => (
            this.setState({
                users: [...this.state.users, ...response.data.results],
                loading: false
            })
        ));
    }

    handleSubmit(e) {
        e.preventDefault();
        this.getUsers();
        console.log('successfuly loaded users');
    }

    componentDidMount() {
        this.getUsers();
    }

    render () {
    const {loading, users} = this.state;
    return <div className="App">
        <form onSubmit={this.handleSubmit}>
            <input type="submit" value="load more users"/>
        </form>
        <hr />
        {!loading ? users.map(user => (
            
            <div key={user.id.value}>
                <h3>{`${user.name.first} ${user.name.last}`}</h3>
                <p>{`${user.location.street.number} - ${user.location.street.name}`}</p>
                <p>{`${user.location.country} - ${user.location.postcode}`}</p>
                <hr />               
            </div>
        )) : <Loading message="Loading, please wait" />}
    </div>
    }
}

export default App;
