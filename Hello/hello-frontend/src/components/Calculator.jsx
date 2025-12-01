// ✅ Import useState hook from React
// useState is used to store data that can change on the screen
import { useState } from "react";
import "./Calculator.css"
function Calculator() {

  // ✅ State to store first number (A)
  const [a, setA] = useState("");

  // ✅ State to store second number (B)
  const [b, setB] = useState("");

  // ✅ State to store the result returned from backend
  const [result, setResult] = useState(null);

  // ✅ This function is called when we click the "Add" button
  function addNumbers() {

    // ✅ fetch() sends HTTP request to backend
    // ✅ This is a POST request
    // ✅ a and b are sent as query parameters
    fetch(`http://localhost:8080/api/calculator/add?a=${a}&b=${b}`, {
      method: "POST"   // ✅ Important: this must be POST
    })

      // ✅ Convert backend response (number) into JSON
      .then(res => res.json())

      // ✅ Store the backend result into React state
      .then(data => setResult(data))

      // ✅ Catch and print any error in console
      .catch(err => console.error("Error:", err));
  }

  // ✅ This function runs when we click the "Subtract" button
  function subtractNumbers() {

    // ✅ Call subtract API from backend
    fetch(`http://localhost:8080/api/calculator/subtract?a=${a}&b=${b}`, {
      method: "POST"
    })

      // ✅ Convert response to JSON number
      .then(res => res.json())

      // ✅ Save result in state
      .then(data => setResult(data))

      // ✅ Handle errors
      .catch(err => console.error("Error:", err));
  }

  // ✅ This is the UI part (what appears on the screen)
 return (
   <div className="calculator-container">

     <h1>React + Spring Boot Calculator</h1>

     <input
       type="number"
       placeholder="Enter A"
       value={a}
       onChange={(e) => setA(e.target.value)}
     />

     <input
       type="number"
       placeholder="Enter B"
       value={b}
       onChange={(e) => setB(e.target.value)}
     />

     <br /><br />

     <button onClick={addNumbers}>Add</button>
     <button onClick={subtractNumbers}>Subtract</button>

     <h2 className="result-text">Result: {result}</h2>
   </div>
 );

}

// ✅ This allows this component to be used in App.js
export default Calculator;
