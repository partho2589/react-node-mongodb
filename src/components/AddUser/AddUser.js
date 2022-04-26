import React from 'react';

const AddUser = () => {

    const handelAddUser = (event) =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        
        const user = {name, email};


        // send data to the server

        fetch('http://localhost:5000/user',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res =>res.json())
        .then(data => {
            console.log(data)
            alert('users added successfully!!!')
            event.target.reset()
        })
    }
    return (
        <div>
            <h1>This is addUser!!!!</h1>
            <form onSubmit={handelAddUser}>
                <input type="text" name="name" placeholder='Name' id="" required />
                <br />
                <input type="email" name="email" placeholder='Email' id="" required /><br />
                <input type="submit" value="Add User" />
            </form>
        </div>
    );
};

export default AddUser;