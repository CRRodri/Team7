import React from 'react';
import { Link, Navigate, useNavigate, useLocation } from "react-router-dom"; 

function Signout() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    localStorage.setItem("authenticatedB", false);
    navigate("/"); //Navigate back to main page
  };

  return (
    <div>
      <button onClick={handleBackClick}>Sign out</button>
    </div>
  );
};

export default Signout;

