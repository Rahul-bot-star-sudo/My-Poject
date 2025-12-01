import { useEffect, useState } from "react";
import Calculator from "./components/Calculator";
function App() {
    const [massage, setMassage]=useState("");
    useEffect(()=>{
        fetch("http://localhost:8080/hello")
        .then(response => response.text())
        .then(data=> setMassage(data));

    },[]);
    return (
        <div style={{textAlign:"center", marginTop:"100px"}}>
        <h1>React + Spring Boot</h1>
        <h2>{massage}</h2>
        <a href="/calculator">About Page</a>

          <Calculator />
        </div>
    );
}
export default App;