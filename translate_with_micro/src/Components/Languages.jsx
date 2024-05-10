import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import languageData from '../Api/languageData'

function Languages() {

    const [formData, setFormData] = useState({
      from: "en",
      to: "hi",
    });
  
    const changeHandler = (event) => {
      const { name, value, checked, type } = event.target;
      setFormData((prevFormData) => {
        return {
          ...prevFormData,
          // [event.target.name]: event.target.value,
          [name]: type === "checkbox" ? checked : value,
        };
      });
    };
   
  return (
    <>
    <Form.Select className='container'  name="from" 
        onChange={changeHandler}
        value={formData.from}>
      {languageData.map((item, index) => {
      return(
        <option key={index} value={item.value}>{item.label}</option>
      )
})}
    </Form.Select>
    <Form.Select className='container'  name="to" 
        onChange={changeHandler}
        value={formData.to}>
      {languageData.map((item, index) => {
      return(
        <option key={index} value={item.value}>{item.label}</option>
      )
})}
    </Form.Select>
    </>
  );
}

export default Languages;