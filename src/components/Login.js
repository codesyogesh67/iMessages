import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((err) => alert(err.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://lh3.googleusercontent.com/proxy/FFow_rm4FRqBJQ7G0O9aGSnZNUCbrPZY2XyR0NmILMq-Li-r6U_GgATImAAQl6TRXDnHAFcjJ4uh3IxMfze9UrknwDXieIBGujSC9QwVKmQE5s220Mk5mIGbc6xmKx4G3o6zd4ZnNBeoMUviLZbExeSNMFWrDGJ8TYCLTijmNg"
          alt="iMessage"
        />
        <h2>iMessage</h2>
      </div>

      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}

export default Login;
