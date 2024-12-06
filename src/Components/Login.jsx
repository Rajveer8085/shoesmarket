import React, { useRef, useState } from "react";
import "./AuthForm.css";

const AuthForm = ({ setShow,setEmailname}) => {
  const [isLogin, setIsLogin] = useState(true); // Tracks login or signup mode
  const [isSubmitted, setIsSubmitted] = useState(false); // Tracks successful submission
  const [nameErr, setNameErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [passErr, setPassErr] = useState("");
  const [dblPassErr, setDblPassErr] = useState("");

  const nameRef = useRef();
  const emailRef = useRef();
  const passRef = useRef();
  const dblPassRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let isValid = true;

    // Reset error messages
    setNameErr("");
    setEmailErr("");
    setPassErr("");
    setDblPassErr("");

    // Get form values
    const nameValue = nameRef.current?.value || "";
    const emailValue = emailRef.current?.value || "";
    const passValue = passRef.current?.value || "";
    const dblPassValue = dblPassRef.current?.value || "";

      // email info for user page
      setEmailname(emailValue,nameValue)
    // Perform validations
    if (!isLogin && nameValue.trim() === "") {
      setNameErr("Please enter your name.");
      isValid = false;
    }

    if (!emailValue || !/^\S+@\S+\.\S+$/.test(emailValue)) {
      setEmailErr("Please enter a valid email.");
      isValid = false;
    }

    if (passValue.length < 6) {
      setPassErr("Password must be at least 6 characters.");
      isValid = false;
    }

    if (!isLogin && passValue !== dblPassValue) {
      setDblPassErr("Passwords do not match.");
      isValid = false;
    }

    // If valid, show success message and navigate to new page
    if (isValid) {
      setShow(true); // Notify parent component if necessary
      setIsSubmitted(true); // Change to success page
    }
  };

  const toggleFormMode = () => {
    setIsLogin(!isLogin); // Toggle between login and sign-up
    setNameErr("");
    setEmailErr("");
    setPassErr("");
    setDblPassErr("");
  };

  // Render success page if form is submitted successfully
  if (isSubmitted) {
    setShow(false)
  }

  // Render the form if not submitted
  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>
        <form onSubmit={handleFormSubmit}>
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" placeholder="Enter your name" ref={nameRef} />
              {nameErr && <p className="error-text text-danger">{nameErr}</p>}
            </div>
          )}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input autoFocus type="email" id="email" placeholder="Enter your email" ref={emailRef} />
            {emailErr && <p className="text-danger error-text">{emailErr}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" ref={passRef} />
            {passErr && <p className="text-danger error-text">{passErr}</p>}
          </div>
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm your password"
                ref={dblPassRef}
              />
              {dblPassErr && <p className="error-text text-danger">{dblPassErr}</p>}
            </div>
          )}
          <button type="submit" className="auth-btn">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <p className="toggle-text">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span onClick={toggleFormMode} className="toggle-link">
            {isLogin ? "Sign Up" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
