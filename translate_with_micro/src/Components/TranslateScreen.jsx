import { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import languageData from "../Api/languageData";
import axios from "axios";

function TranslateScreen() {
  const [langData, setLangData] = useState({
    from: "en",
    to: "hi",
  });

  const langChangeHandler = (event) => {
    const { name, value, checked, type } = event.target;
    setLangData((prevFormData) => {
      return {
        ...prevFormData,
        // [event.target.name]: event.target.value,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const [formData, setFormData] = useState({
    text: "",
    textTo: "",
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

  const translateSubmit = async () => {
    try {
      const response = await axios.post(
        "https://microsoft-translator-text.p.rapidapi.com/translate?api-version=3.0&to[0]=hi&from=en",
        {
          headers: {
            "content-type": "application/json",
            "X-RapidAPI-Key": "c1936df579msh545ecf0809fe995p1c999djsnb1e11c65f5ba",
            "X-RapidAPI-Host": "microsoft-translator-text.p.rapidapi.com",
          },
          body: [formData], 
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  

  // setFormData.textTo(response.data);
  console.log(langData);
  console.log(formData);
  return (
    <>
      {/* Select Language to translate */}
      <Form.Select
        className="container my-2"
        name="from"
        onChange={langChangeHandler}
        value={langData.from}
      >
        {languageData.map((item, index) => {
          return (
            <option key={index} value={item.value}>
              {item.label}
            </option>
          );
        })}
      </Form.Select>
      <Form.Select
        className="container my-2"
        name="to"
        onChange={langChangeHandler}
        value={langData.to}
      >
        {languageData.map((item, index) => {
          return (
            <option key={index} value={item.value}>
              {item.label}
            </option>
          );
        })}
      </Form.Select>

      <InputGroup className="container">
        <Form.Control
          as="textarea"
          className="h-80"
          name="text"
          value={formData.text}
          placeholder="Enter your message"
          onChange={changeHandler}
          style={{ resize: "none", height: "220px", outline: "none" }}
        />
      </InputGroup>
      <div className="container mt-3">
        <Button
          className="container mt-3"
          variant="primary"
          onClick={translateSubmit}
        >
          Translate
        </Button>
      </div>
      <InputGroup className="container mt-5">
        <Form.Control
          as="textarea"
          className="h-80"
          name="text"
          value={formData.textTo}
          placeholder="Translate Value!"
          style={{ resize: "none", height: "220px", outline: "none" }}
          disabled
        />
      </InputGroup>
    </>
  );
}

export default TranslateScreen;
