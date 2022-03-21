import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import PlayerList from './components/PlayerList'
import AddProduct from './components/AddProduct.js'
import EditProduct from "./components/EditProduct";

function App() {
    return (
        <div className="container">
            <div className="column">
                <div className="column is-half is-offset-one-quarter">
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<PlayerList />}/>
                            <Route path="/add" element={<AddProduct />}/>
                            <Route path="/edit/players/:id" element={<EditProduct />}/>
                        </Routes>
                    </BrowserRouter>
                </div>
            </div>
        </div>
    );
}

export default App;
