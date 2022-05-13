import React from "react";

export default function ConfirmPassword() {
  return (
    <div className="registration">
      <div className="register-header">
        <span>step 2 of 2</span>
        <h1>Create a password to start your membership</h1>
      </div>
      <div className="register-body">
        <p>Just a few steps left - then it's done!</p>
        <p>We also hate paperwork.</p>
      </div>
      <div className="register-form">
        <form action="">
          <input type="text" placeholder="E-mail" />
          <input type="text" placeholder="Password" />

          <div className="email-preference">
            <input type="checkbox" name="" id="" />
            <span>Do not send me email with special offers from Netflix.</span>
          </div>
          <div className="submit-btn-container">
            <button>Next</button>
          </div>
        </form>
      </div>
    </div>
  );
}
