import React, {useState,useEffect} from 'react';
import axios from 'axios';

const UserFunction = () => {
    useEffect(()=>{
        axios.get()
        .then((res)=>{
            setUsers(res.data);
        })
        .catch((error)=>{
            console.log(error)
        });
    },[]);

    console.log(users)

    return (
        <div>
            
        </div>
    );
}

export default UserFunction;
