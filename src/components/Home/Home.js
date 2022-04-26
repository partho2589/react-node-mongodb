import React, { useEffect, useState } from 'react';

const Home = () => {
  
        const [users, setUsers] = useState([]);
        useEffect(()=>{
            fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUsers(data))
        },[])

        const handelUserDelete = id =>{
           const proceed = window.confirm('Are you sure want to delete?')
           if(proceed){
               console.log('delete user with id', id)
           }
        }

    return (
        <div>
            <h1>This is home</h1>
            <h2>Available Users: { users.length}</h2>
            <ul>
                {
                    users.map(user => <li key={user._id}> {user.name}:: {user.email} 
                    <button onClick={() => handelUserDelete(user._id)}>Delete </button>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Home;