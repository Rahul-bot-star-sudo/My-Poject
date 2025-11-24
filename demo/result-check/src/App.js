import React from "react";
import Login from "./Login";
import { BrowserRouter, Routes,Route} from "react-router-dom";
import Navbar from "./componenents/Navbar";

function App() {
    return(
    <BrowserRouter>
    <Navbar />
    <Routes>
        <Route path="/" element={<Login />} />
    </Routes>
    </BrowserRouter>
    );
//  return <Login />;
}

export default App;
