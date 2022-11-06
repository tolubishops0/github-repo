import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="homepage">
      <div>
        <h1>Welcome to the HomePage</h1>
        <button className="btn">
          <Link to="repo">go to repo</Link>
        </button>
      </div>
    </div>
  );
}

export default HomePage;
