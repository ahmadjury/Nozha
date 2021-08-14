// import React, { useState } from "react";
// import { Form, Button } from "reactstrap";
// import InputField from "./InputField";


// const AddProductForm = () => {
//   const [inputValue, setInputValue] = useState({ name: "", city: "" ,email:"",telephoneNumber:"",dateOfReservation:""
//   ,numberOfStudents:"",resort:""});
//   const { name, city, email,telephoneNumber,dateOfReservation,numberOfStudents,resort} = inputValue;

//   const handleChange = (e) => {
//     const { name, city,email,telephoneNumber, dateOfReservation,numberOfStudents,resort} = e.target;
//     setInputValue((prev) => ({
//       ...prev,
//       // [name]: value,
//     }));
//     console.log(inputValue);
//   };


//   return (
//     <Form onSubmit={handleSubmit}>
//       <InputField
//         type="text"
//         value={name}
//         placeholder="Add School Name"
//         label="School Name"
//         onChange={handleChange}
//       />
//       <InputField
//         type="text"
//         value={city}
//         placeholder="Add a city"
//         label="City"
//         onChange={handleChange}
//       />
//           <InputField
//         type="text"
//         value={email}
//         placeholder="Add an Email"
//         label="Email"
//         onChange={handleChange}
//       />
//               <InputField
//         type="Number"
//         value={telephoneNumber}
//         placeholder="Add a Telephone Number"
//         label="Telephone Number"
//         onChange={handleChange}
//       />
//         <InputField
//         type="date"
//         value={dateOfReservation}
//         placeholder="Add a date"
//         label="Date"
//         onChange={handleChange}
//       />
//           <InputField
//         type="number"
//         value={numberOfStudents}
//         placeholder="Add Number of Students"
//         label="Number of Students"
//         onChange={handleChange}
//       />

// <InputField
//         type="text"
//         value={resort}
//         placeholder="Add Resort"
//         label="Resort"
//         onChange={handleChange}
//       />



//       <Button color="primary">Reserve</Button>{" "}
//       <Button color="secondary">Cancel</Button>
//     </Form>
//   );
// };

// export default AddProductForm;