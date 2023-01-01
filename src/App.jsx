import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DefaultState} from "./DefaultState";
export function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <DefaultState /> } />
                <Route path='/shop' element={<DefaultState />} />
            </Routes>
        </BrowserRouter>

    );
}