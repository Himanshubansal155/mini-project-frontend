import React, { useState,useEffect } from "react";
import { auth } from './../../firebase';
import { toast } from 'react-toastify';
import { sendSignInLinkToEmail } from 'firebase/auth';


const RegisterComplete = ({ history }) => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState('')

  useEffect(() => {
    setEmail(window.localStorage.getItem('emailForRegistration'));
    //console.log(window.location.href);
    //console.log(window.localStorage.getItem('emailForRegistration'));
  },[]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!email || !password){
      toast.error('Email and password is required');
      return;
    }
    if(password.length < 6){
      toast.error('Password must be at least 6 characters long');
      return;
    }
    try{
      const result = await auth.signInWithEmailLink(email,window.location.href);
      //console.log("RESULT",result);
      if(result.user.emailVerified){
        window.localStorage.removeItem("emailForRegistration")
        let user = auth.currentUser
        await user.updatePassword(password);
        const idTokenResult = await user.getIdTokenResult()
        console.log('user',user,"idTokenResult",idTokenResult);
        history.push("/");
      }
    }catch (error){
      console.log(error);
      toast.error(error.message);
    }
    
  };
  const completeRegistrationForm = () => (

    <form onSubmit={handleSubmit}>

      <input type="email" className="form-control" value={email} disabled />
      <input type="password" className="form-control" value={password}
       onChange={(e) => setPassword(e.target.value)} 
       placeholder="Password"
       autoFocus
       />
       <br />
      <button type="submit" className="btn btn-light mt-2">
       Complete Registration
      </button>
    </form>
  );



  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4>Register complete</h4>
          {completeRegistrationForm()}
        </div>
      </div>
    </div>
  );
}

export default RegisterComplete;
