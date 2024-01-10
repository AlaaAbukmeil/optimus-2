import { authPostRequestOptions } from "../../common/cookie";
import Loader from "../../common/loader";
import { useState } from "react";
import axios from "axios";
import { baseUrl } from "../../common/cookie";

function Login() {
  let [requestStatus, setRequestStatus] = useState(false);
  let [authStatus, setAuthStatus] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  async function handleSubmit(event: any) {
    setRequestStatus(true);
    let formData = { email: email, password: password };
    try {
      let auth = await axios.post(
        baseUrl+ "login",
        formData,
        authPostRequestOptions
      );
      if (auth.data.status == 200) {
        localStorage.setItem("token", auth.data.token);
        window.location.href = "/dashboard";
      } else {
        setAuthStatus(auth.data.message);
        setRequestStatus(false);
      }
    } catch (error) {}

  }
 
  function OnChangeEmail(event: any) {
    setEmail(event.target.value);
  }
  function onChangePassword(event: any) {
    setPassword(event.target.value);
  }

  if (requestStatus) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <div>
      <div className="container title-container login-text">
        <h1 className="welcome-title-2">Optmius</h1><h1 className="welcome-title-3"> V2 </h1><h1>Login</h1>
      </div>

      <div className="row">
        <form className="col-10 login-card container" id="loginForm" onSubmit={(event) => handleSubmit(event)}>
          <div>
            <h4>
              Email
            </h4>
            <input
              type="email"
              className="formTextInput"
              title="email"
              name="email"
              value={email}
              onChange={(event) => OnChangeEmail(event)}
            />
          </div>
          <div>
            <h4>
              Password
            </h4>
            <input
              type="password"
              className="formTextInput"
              title="password"
              name="password"
              value={password}
              onChange={(event) => onChangePassword(event)}
            />
          </div>
          {authStatus && <h4 className="error">{authStatus}</h4>}
          <button
            type="submit"
        
            
            className="btn login-btn"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
export default Login;
