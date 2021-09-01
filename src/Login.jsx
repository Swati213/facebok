import React from "react";
import "./Login.css";
import Button from '@material-ui/core/Button'


function Login() {
    const signIn=(e)=>{
        
    }
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/100px-Facebook_f_logo_%282019%29.svg.png"
          alt=""
        />

        <img
          className="logo__name"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/196px-Facebook_Logo_%282019%29.svg.png"
          alt=""
        />
      </div>
       
      <Button className = "login__button" onClick = {signIn} type = "submit">
                Sign In
            </Button>
    </div>
  );
}

export default Login;