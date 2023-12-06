import React from "react";

function Register() {
  return (
    <div className="register-body">
      <div className="container">
        <h1 className="form-title">Welcome to Business World Trade</h1>
        <form action="#">
          <div className="main-user-info">
            <div className="user-input-box">
              <label htmlFor="fullName">First Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter First Name"
              />
            </div>
            <div className="user-input-box">
              <label htmlFor="username">Last Name</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter Last Name"
              />
            </div>
            <div className="user-input-box">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Email"
              />
            </div>
            <div className="user-input-box">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Enter Phone Number"
              />
            </div>
            <div className="user-input-box">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter Password"
              />
            </div>
            
          </div>
          <div className="gender-details-box">
            <span className="gender-title">Gender</span>
            <div className="gender-category">
              <input type="radio" name="gender" id="male" />
              <label htmlFor="male">Male</label>
              <input type="radio" name="gender" id="female" />
              <label htmlFor="female">Female</label>
              <input type="radio" name="gender" id="other" />
              <label htmlFor="other">Other</label>
            </div>
          </div>
          <div className="form-submit-btn">
            <input type="submit" value="Register" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;