import {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const PlayerList = () => {
    const [players, setPlayer] = useState([]);
    useEffect(() => {
        getPlayers();
    }, [])

    const getPlayers = async () => {
        const response =   await axios.get('http://localhost:8080/api/players');
        console.log(response.data.message);
        setPlayer(response.data.message);
    }
    const deleteItem = async (id) => {
        await axios.delete(`http://localhost:8080/api/players/${id}`);
        getPlayers();

    }
    return (
        <div>
            <Link to ="/add" className="button is-primary mt-3">Add New</Link>
            <table className="table is-striped is-fullwidth">
                <thead>
                <tr>
                    <th>No</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Experience</th>
                    <th>Level</th>

                </tr>
                </thead>
                <tbody>
                {players.map((player, index) => (
                    <tr key={player.id}>
                        <td>{index + 1}</td>
                        <td>{player.username}</td>
                        <td>{player.email}</td>
                        <td>{player.experience}</td>
                        <td>
                            <Link to ={`edit/players/${player.id}`} className="button is-small is-info">Edit</Link>
                            <button onClick={() => deleteItem(player.id)} className="button is-small is-danger">Delete</button>
                        </td>
                    </tr>
                ))}

                </tbody>
            </table>
        </div>
    )
}

export default PlayerList;
