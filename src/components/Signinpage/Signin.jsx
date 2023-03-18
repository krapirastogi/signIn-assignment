import React,{useState} from "react";
import { FaEye, FaEyeSlash} from "react-icons/fa";
import {Link} from "react-router-dom";
import  SignIn from"./Signin.module.css";
import Logo from "../images/Logo.png";
import Banner from "../images/Banner carousel.png";


const Signin = () => {
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
 
  return (
  <div className={SignIn.container}>
    <div className={SignIn.leftPanel}>
      <div className={SignIn.item1}>
      <img src={Logo} alt="" />
      </div>
     <div className={SignIn.item2}>
        <h1 className={SignIn.h1}>Welcome to <span>SystemPackage</span> 
        </h1>
        
     <div className={SignIn.form}>
        <div className={SignIn.emailContainer}>
              <input type="email" />
              <select name="domain" className={SignIn.domain}>
                <option value="value-1">@heads.design</option>
                <option value="value-2">@heads.development</option>
              </select>
        </div>
     <div className={SignIn.passwordContainer}>
       <input
          type={isPasswordVisible ? "text" : "password"}
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}/>
        
        <button type="button" className={SignIn.toggle} onClick={togglePasswordVisibility}>
          {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>
      <br />
      <Link to="/otppage">
      <button className={SignIn.submit} type="submit">Next</button>
      </Link>
     
     <br />
     <h6 className={SignIn.h6}>Forgot your password?</h6>
     
     <br />
     </div>
    </div>
    
     <div className={SignIn.item3}>
      <h3>Not a member ? <span>Create account</span></h3>

     </div>
     
    </div>
    <div className={SignIn.rightPanel}>
    <img src={Banner} alt="" />
    </div>
  </div>
  );
};

export default Signin;
