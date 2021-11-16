import React, { useState,useEffect } from "react";
import { auth } from '../../firebase'
import { toast } from 'react-toastify';
import {useSelector} from "react-redux";
import { sendSignInLinkToEmail } from 'firebase/auth';


const Register = ({history}) => {
  const [email, setEmail] = useState("");

  const {user} = useSelector((state) => ({...state}));

  useEffect=(() => {
    if(user && user.token) history.push("/");
},[user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      url: "http://localhost:3000/register/complete",
      handleCodeInApp: true
    };
    await auth.sendSignInLinkToEmail(auth, email, config);
      toast.success(
        `Email is sent to ${email}. Click the link to complete your registration.`
      );
      window.localStorage.setItem('emailForRegistartion', email)
      setEmail("");
    };

  };
  const registerForm = () => (

    <form onSubmit={handleSubmit}>

      <input
        type="email"
        className="form-control"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder= "Your email"
        autoFocus 
        />
        <br />
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
