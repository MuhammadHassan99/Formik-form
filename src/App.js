import React from "react";
import rocketImg from "./asset/rocket.png";
import Signup from "./components/Signup";

const App = () => {
  return (
    <div className='container mt-3'>
      <div className='row'>
        <div className='col-md-5'>
          <Signup />
        </div>
        <div className='col-md-7 my-aut'>
          <img className='img-fluid w-100' src={rocketImg} alt='' />
        </div>
      </div>
    </div>
  );
};

export default App;
