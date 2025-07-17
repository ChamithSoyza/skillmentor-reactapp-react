import './App.css'
import Home from "./pages/Home.tsx";
import {Route, Routes} from "react-router";
import Dashboard from "./pages/Dashboard.tsx";
import Tutors from "./pages/Tutors.tsx";

function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="*" element={<h1>404 Not Found !</h1>}/>
                <Route path="/tutors" element={<Tutors/>}/>
            </Routes>
        </>
    )
}

export default App
