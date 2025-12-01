import { useState } from "react";   // Import useState hook for state management

function StudentForm() {   // Functional component starts

  // Creating state object to store multiple input values
  const [student, setStudent] = useState({
    name: "",     // Stores name input
    email: "",    // Stores email input
    age: ""       // Stores age input
  });

  // State for storing API response message
  const [responseMessage, setResponseMessage] = useState("");

  // This function runs when user types in any input field
  const handleChange = (e) => {

    setStudent({
      ...student,                   // Keep existing values unchanged
      [e.target.name]: e.target.value   // Update only changed field
    });

  };

  // This function runs when form is submitted
  const handleSubmit = async (e) => {

    e.preventDefault();   // Stop page refresh on submit

    // Sending POST request to Spring Boot backend
    const res = await fetch("http://localhost:8080/student", {

      method: "POST",  // HTTP method type

      headers: { "Content-Type": "application/json" }, // Data format

      body: JSON.stringify(student)  // Convert JS object into JSON

    });

    // Convert backend response into JS object
    const data = await res.json();

    // Store backend message into state
    setResponseMessage(data.message);
  };

  return (   // JSX UI starts
    <div>

      <h2>Student Form</h2>

      <form onSubmit={handleSubmit}>   {/* Connecting form submit */}

        <input
          type="text"                      // Input type text
          name="name"                      // Key name (must match state)
          placeholder="Enter name"        // Placeholder text
          value={student.name}            // Bind state value
          onChange={handleChange}         // Detect typing event
        />

        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={student.email}
          onChange={handleChange}
        />

        <input
          type="number"
          name="age"
          placeholder="Enter age"
          value={student.age}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>   {/* Submit button */}

      </form>

      <p>{responseMessage}</p>   {/* Display backend message */}

    </div>
  );
}

export default StudentForm;   // Export component for use in App.js
