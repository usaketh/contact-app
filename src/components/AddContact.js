import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddContact(props) {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const add = (e) => {
        e.preventDefault();
        if (name === "" || email === "") {
            alert("All fields are mandatory!");
            return;
        }
        props.addContactHandler({ name, email });
        setName("");
        setEmail("");
        navigate("/");
    }

    return (
        <>
            <br />
            <h2>Add contact</h2>
            <div className='ui main'>
                <form className='ui form' onSubmit={add}>
                    <div className='field'>
                        <label>Name</label>
                        <input
                            type='text'
                            name='name'
                            placeholder='Name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className='field'>
                        <label>Email</label>
                        <input
                            type='text'
                            name='email'
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <button className='ui button blue'>Add</button>
                </form>
            </div>
        </>
    )
}

export default AddContact;
