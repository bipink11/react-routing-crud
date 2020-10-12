
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {useHistory,useParams} from 'react-router-dom';

const EditUser = () => {
    let history = useHistory();
    const {id} = useParams();

    const [user, setUser] = useState({
        name:'',
        username:'',
        email:'',
        phone:'',
        website:''
    })

    useEffect( ()=>{
        loadUser();
    },[]);

    const onInputChange = (e) =>{
        setUser({
           ...user, [e.target.name] : e.target.value
        })
    }

    const loadUser = async () =>{
        const result = await axios.get(`http://localhost:3003/users/${id}`)
        setUser(result.data);
        console.log("result = ",result)
    }

    const {name,username,email,phone,website} = user;

    const onSubmit =  async e =>{
        e.preventDefault();
        await axios.put(`http://localhost:3003/users/${id}`,user);
        history.push("/")
    }
    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Edit A User</h2>
                <form onSubmit={onSubmit}>
                    <div className="form-group ">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter your Name"
                            name="name" 
                            value={name}
                            onChange={onInputChange}
                            />
                    </div>
                    <div className="form-group ">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter your User Name"
                            name="username" 
                            value={username}
                            onChange={onInputChange}
                            />
                    </div>
                    <div className="form-group ">
                        <input
                            type="email"
                            className="form-control form-control-lg"
                            placeholder="Enter email address"
                            name="email" 
                            value={email}
                            onChange={onInputChange}
                            />
                    </div>
                    <div className="form-group ">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter phone number"
                            name="phone" 
                            value={phone}
                            onChange={onInputChange}
                            />
                    </div>
                    <div className="form-group ">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter website name"
                            name="website"
                            value={website}
                            onChange={onInputChange}
                            />
                    </div>
                  <div>
                        <button className="btn btn-primary btn-block">Update User</button> 
                  </div>
                </form>

            </div>
        </div>
    )
}

export default EditUser;
