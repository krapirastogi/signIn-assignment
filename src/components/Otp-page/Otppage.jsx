import React,{useState} from "react";

import OtpPage from "./Otppage.module.css";
import Logo from "../images/Logo.png";
import Banner from "../images/Banner carousel.png";

const Otppage = () => {
  const [state, setState] = useState({
    value: "",
    otp1: "",
    otp2: "",
    otp3: "",
    otp4: "",
    otp5: "",
    otp6: "",
    disable: true,
  });
  

  const handleChange = (value1, event) => {
    setState((prevState) => ({ ...prevState, [value1]: event.target.value }));
    const otp =
      state.otp1 +
      state.otp2 +
      state.otp3 +
      state.otp4 +
      state.otp5 +
      state.otp6;
    const enteredOTP = otp + event.target.value;
    console.log(enteredOTP);
    if (enteredOTP === '123456') {
      window.location.replace('/success');
    }
  };

  const inputfocus = (elmnt) => {
    if (elmnt.key === "Delete" || elmnt.key === "Backspace") {
      const next = elmnt.target.tabIndex - 2;
      if (next > -1) {
        elmnt.target.form.elements[next].focus();
      }
    } else {
      const next = elmnt.target.tabIndex;
      if (next < 6) {
        elmnt.target.form.elements[next].focus();
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const otp =
      state.otp1 +
      state.otp2 +
      state.otp3 +
      state.otp4 +
      state.otp5 +
      state.otp6;
    const expectedOTP = "123456";

    if (otp === expectedOTP) {
      
    } else {
      alert("Invalid OTP, please try again.");
    }
  };



  return (
    <div className={OtpPage.container}>
    <div className={OtpPage.leftPanel}>
      <div className={OtpPage.item1}>
      <img src={Logo} alt="" />
      </div>
     <div className={OtpPage.item2}>
      <div className={OtpPage.content}>
        <h1 className={OtpPage.h1}>Enter the verification code to continue</h1>
        <p className={OtpPage.p}>We sent to <span>hellouser@heads.design</span>.If you don't see it, check your spam.</p>
      </div>
     <form onSubmit={handleSubmit}>
      <div className={OtpPage.otpContainer}>
        <input
          name="otp1"
          type="text"
          autoComplete="off"
          className={OtpPage.otpInput}
          value={state.otp1}
          onKeyPress={inputfocus}
          onChange={(e) => handleChange("otp1", e)}
          tabIndex="1"
          maxLength="1"
          onKeyUp={(e) => inputfocus(e)}
        />
        <input
          name="otp2"
          type="text"
          autoComplete="off"
          className={OtpPage.otpInput}
          value={state.otp2}
          onChange={(e) => handleChange("otp2", e)}
          tabIndex="2"
          maxLength="1"
          onKeyUp={(e) => inputfocus(e)}
        />
        <input
          name="otp3"
          type="text"
          autoComplete="off"
          className={OtpPage.otpInput}
          value={state.otp3}
          onChange={(e) => handleChange("otp3", e)}
          tabIndex="3"
          maxLength="1"
          onKeyUp={(e) => inputfocus(e)}
        />
        <input
          name="otp4"
          type="text"
          autoComplete="off"
          className={OtpPage.otpInput}
          value={state.otp4}
          onChange={(e) => handleChange("otp4", e)}
          tabIndex="4"
          maxLength="1"
          onKeyUp={(e) => inputfocus(e)}
        />
        <input
          name="otp5"
          type="text"
          autoComplete="off"
          className={OtpPage.otpInput}
          value={state.otp5}
          onChange={(e) => handleChange("otp5", e)}
          tabIndex="5"
          maxLength="1"
          onKeyUp={(e) => inputfocus(e)}
        />
        <input
          name="otp6"
          type="text"
          autoComplete="off"
          className={OtpPage.otpInput}
          value={state.otp6}
          onChange={(e) => handleChange("otp6", e)}
          tabIndex="6"
          maxLength="1"
          onKeyUp={(e) => inputfocus(e)}
        />
      </div>
      </form>
      <div className={OtpPage.formFooter}>
        <p>Back</p>
        
      </div>
     </div>
     <div className={OtpPage.item3}>
      <h3>Not a member ? <span>Create account</span></h3>

     </div>
     
    </div>
    <div className={OtpPage.rightPanel}>
    <img src={Banner} alt="" />
    </div>
  </div>
  );
};

export default Otppage;