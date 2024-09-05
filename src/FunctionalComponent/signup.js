import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";

function SignUp() {
  
  return (
    <>
      <Header />

      <MDBContainer className="my-5 gradient-form">
          <MDBRow>
            <MDBCol
              col="6"
              className="mb-5"
              style={{ position: "relative", top: "20px", left: "50%" }}
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

                <p>Please create your account</p>

                <MDBInput
                  wrapperClass="mb-4"
                  label="User Name"
                  id="form1"
                  type="Username"
                  required
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="form2"
                  type="password" 
                  required
                />

                <div className="text-center pt-1 mb-5 pb-1">
                  <MDBBtn className="mb-4 w-100 gradient-custom-2">
                    Sign up
                  </MDBBtn>
                </div>

                <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                  <p className="mb-0">Already have an account?</p>
                  {/* <MDBBtn outline className="mx-2" color="danger" onclick="window.location.href='./loginroute.js'"> */}
                  <Link to="/login">Sign in</Link>
                  {/* </MDBBtn> */}
                </div>
              </div>
            </MDBCol>

            <MDBCol
              col="6"
              className="mb-5"
              style={{ position: "relative", right: "50%" }}
            >
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
                    "Welcome to Mini Mart, Please log in to access our
                    services."
                  </p>
                </div>
              </div>
            </MDBCol>
          </MDBRow>
      </MDBContainer>
    </>
  );
}

export default SignUp;
