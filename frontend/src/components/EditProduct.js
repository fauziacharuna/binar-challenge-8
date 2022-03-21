import {useEffect, useState} from 'react';
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";

const EditProduct = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPasword] = useState('');
    const [experience, setExperience] = useState('');

    const history = useNavigate();
    const {id} = useParams();

    const editProduct = async (e) => {
        e.preventDefault();
        console.log(id);
        await axios.put(`http://localhost:8080/api/players/${id}`, {
            username: username,
            email: email,
            password: password,
            experience: experience
        });
        history('/')
    }
    useEffect(() => {
        getProductById();
    }, []);
    const getProductById = async () => {
        const response = await axios.get(`http://localhost:8080/api/players/${id}`);
        setUsername(response.data.message.username);
        setEmail(response.data.message.email);
        setExperience(response.data.message.experience);
        setPasword(response.data.message.password);
    }
    return (
        <div>
            <form onSubmit={editProduct}>
                <div className="field">
                    <label className="label">Username</label>
                    <input className="input" type="text" placeholder="username" name="username"
                           value={username} onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div className="field">
                    <label className="label">Email</label>
                    <input className="input" type="email" placeholder="email" name="email"
                           value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="field">
                    <label className="label">Password</label>
                    <input className="input" type="password" placeholder="password" name="password"
                           value={password} onChange={(e) => setPasword(e.target.value)}/>
                </div>
                <div className="field">
                    <label className="label">Experience</label>
                    <input className="input" type="number" placeholder="experience" name="experience"
                           value={experience} onChange={(e) => setExperience(e.target.value)}/>
                </div>
                <div className="field">
                    <button className="button is-primary">Edit</button>
                </div>

            </form>
        </div>
    )
}
export default EditProduct;
