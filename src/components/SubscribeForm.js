import React, { useState } from "react";

const SubscribeForm = () => {
      
  const [email, setEmail] = useState("")
  // console.log(email);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/subscribe", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "",
      },
      body: JSON.stringify({
        email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
      });
  };

  return (
    <form>
      <div className="form-container">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Please enter your email address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>Subcribe here</button>
      </div>
    </form>
  );
};

export default SubscribeForm;
