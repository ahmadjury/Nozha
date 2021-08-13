import React, { useState } from "react";
import { Form, Button } from "reactstrap";
import InputField from "./InputField";


const AddProductForm = (props) => {
 const {schoolname,town,emailadd,tel,date,num,errors,successfulfunction,place}=props;
 const [name,setName]=useState(schoolname)
 const [city,setCity]=useState(town)
 const [email,setEmail]=useState(emailadd)
 const [telephoneNumber,setTelephoneNumber] =useState(tel)
 const [dateOfReservation, setDateOfReservation] =useState (date)
 const [numberOfStudents, setNumberOfStudents] = useState (num)
 const [resort, setResort] =useState(place)

 
 const handleSubmit =(e)=>{
  e.preventDefault();
  successfulfunction({name,city,email,telephoneNumber,dateOfReservation,numberOfStudents,resort});

}
  return (
    <Form onSubmit={handleSubmit}>
      <InputField
        type="text"
        value={name}
        placeholder="Add School Name"
        label="School Name"
        onChange={(e)=>setName(e.target.value)}
      />
      <InputField
        type="text"
        value={city}
        placeholder="Add a city"
        label="City"
        onChange={(e)=>setCity(e.target.value)}
      />
          <InputField
        type="text"
        value={email}
        placeholder="Add an Email"
        label="Email"
        onChange={(e)=>setEmail(e.target.value)}
      />
              <InputField
        type="Number"
        value={telephoneNumber}
        placeholder="Add a Telephone Number"
        label="Telephone Number"
        onChange={(e)=>setTelephoneNumber(e.target.value)}
      />
        <InputField
        type="date"
        value={dateOfReservation}
        placeholder="Add a date"
        label="Date"
        onChange={(e)=>setDateOfReservation(e.target.value)}
      />
          <InputField
        type="number"
        value={numberOfStudents}
        placeholder="Add Number of Students"
        label="Number of Students"
        onChange={(e)=>setNumberOfStudents(e.target.value)}
      />

<InputField
        type="number"
        value={resort}
        placeholder="Add Resort"
        label="Resort"
        onChange={(e)=>setResort(e.target.value)}
      />



      <Button color="primary">Reserve</Button>{" "}
      <Button color="secondary">Cancel</Button>
    </Form>
  );
};

export default AddProductForm;