import React, { useState } from "react";
import { auth } from '../../firebase'
import { toast } from 'react-toastify';
import { sendSignInLinkToEmail } from 'firebase/auth';


function Register() {
  const [email, setEmail] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      url: "http://localhost:3000/register/complete",
      handleCodeInApp: true
    }
    sendSignInLinkToEmail(auth, email, config).then(() => {
      toast.success(
        `Email is sent to ${email}. Click the link to complete your registration.`
      );
      window.localStorage.setItem('emailForRegistartion', email)
      setEmail("");
    });

  };
  const registerForm = () => (

    <form onSubmit={handleSubmit}>

      <input
        type="email"
        className="form-control"
        value={email}
        onChange={e => setEmail(e.target.value)}
        autoFocus />
      <button type="submit" className="btn btn-light mt-2">
        Register
      </button>
    </form>
  );



  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4>Register</h4>
          {registerForm()}
        </div>
      </div>
    </div>
  );
}

export default Register;
