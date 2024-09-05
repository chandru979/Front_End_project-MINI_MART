import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/login.css"
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";

function Login() {
  const [username, setUsername] = useState('chandru');
  const [password, setPassword] = useState('123');
  // const [error, setError] = useState('');


  // if (!username || !password) {
  //   setError('Please enter both username and password');
  //   return;
  //   }

  return (
    <MDBContainer className="my-5 gradient-form">
      <form>
        <MDBRow>
          <MDBCol
            col="6"
            className="mb-5"
            style={{ position: "relative", top: "20px" }}
          >
            <div className="d-flex flex-column ms-5">
              <div className="text-center">
                <img
                  src="/images/mini.jpg"
                  style={{
                    width: "185px",
                    border: "2px dashed black",
                    borderRadius: "90px",
                  }}
                  alt="logo"
                />
                <h4 className="mt-1 mb-5 pb-1">Welcome to Mini Mart</h4>
              </div>

              <p>Please login to your account</p>

              <MDBInput
                wrapperClass="mb-4"
                label="User Name"
                id="form1"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="form2"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <div className="text-center pt-1 mb-5 pb-1">
              <Link to="/" className="button">
                  Sign in</Link>
               
              </div>
              <div>
              <Link className="text-muted forgot" to="#!">
                  Forgot password?
                </Link>
              </div>

              <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                <p className="mb-0">Don't have an account?</p>
                <Link to="/signup">Sign Up</Link>
              </div>
            </div>
          </MDBCol>

          <MDBCol col="6" className="mb-5 ">
            <div
              className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4 "
              style={{
                background:
                  "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
              }}
            >
              <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                <h4 class="mb-4">We are more than just a Mart</h4>
                <p class="small mb-0">
                  {" "}
                  "Thank you for choosing Mini Mart. Happy shopping!"
                </p>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
        </form>
    </MDBContainer>
  );
}

export default Login;
