import React, { Component } from 'react';
import './users.css'

class UserClass extends Component {
    constructor(){
        super();
        this.state = {users : []};
    };

    
componentDidMount(){
     fetch("https://jsonplaceholder.typicode.com/users")
     .then((res) => res.json())
     .then((users) => {
           this.setState({
               users: users,
           })
     })
     .catch((error)=>{
         console.log(error)
     });
}
    


    render() {
        console.log(this.state)
            
        return (
            <div>
                {this.state.users.map( (user,idx) => (
                    <div key={idx} className='users'>
                        <p>Name: {user.name}</p>
                        <p>User Name: {user.username}</p>
                        <p>Email: {user.email}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default UserClass;
