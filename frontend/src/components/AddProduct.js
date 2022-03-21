import {useState} from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
const AddProduct = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const history = useNavigate();
    const saveProduct = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:4040/items', {
            item_name: title,
            item_price: price
        });
        history('/')
    }
    return (
        <div>
            <form onSubmit={ saveProduct }>
                <div className="field">
                    <label className="label">Title</label>
                    <input className="input" type="text" placeholder="title" name="item_name"
                           value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className="field">
                    <label className="label">Price</label>
                    <input className="input" type="text" placeholder="price" name="item_price"
                           value={price} onChange={(e) => setPrice(e.target.value)}/>
                </div>
                <div className="field">
                    <button className="button is-primary">Save</button>
                </div>

            </form>
            {title} - {price}
        </div>
    )
}
export default AddProduct;