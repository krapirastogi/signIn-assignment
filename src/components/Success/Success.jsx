import React from "react";
import Succes from "./Success.module.css";
import Logo from "../images/Logo.png";
const Success = () => {
  return (
     <div className={Succes.container}>
      <img src={Logo} alt="" />
      <p>Sucess!</p>
     </div>
    );
};

export default Success;
