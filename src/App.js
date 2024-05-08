import Translate from "./components/Translate";
import React from "react";


const App = () => {
  return (
    <div className="App">
      <div className="row" style={{ position: "relative" }}>
        <div className="row" style={{ border: "2px solid #e5e5e5", position: "absolute", background: "#fafafa", height: "110px", width: "110vw" }}>
          <div className="col-11 mx-auto">
          </div>
        </div>
        <div className="col-lg-11 mx-auto col-sm-6 p-0">
          <div style={{ height: "80px" }}></div>
          <Translate />
        </div>
      </div>
      <h1 className="text-center pt-5 mt-5 m-4">Hariom Chouhan</h1>
      <p className="text-center m-4">hariomchouhan430@gmail.com</p>
    </div>
  );
}

export default App;
