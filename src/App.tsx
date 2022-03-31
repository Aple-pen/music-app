import './App.css';
import UploadPicture from "./user/UploadPicture";
import Header from "./header/Header";
import {Route, Routes} from "react-router-dom";
import Player from "./player/Player";

const Home = () => {
    return (
        <div>
            <h1>home</h1>
        </div>
    )
}

function App() {
    return (
        <div className="App">
            <Header/>
            <div className="child">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/user" element={<UploadPicture/>}/>
                </Routes>
            </div>
            <Player audioUrl={""}/>
        </div>
    );
}

export default App;
