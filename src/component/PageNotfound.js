import React from "react";
import { Link } from "react-router-dom";
import "./PageNotFound.css";

function PageNotfound() {
  return (
    <div>
      <h1>404- ooops Page Not Found</h1>

      <button className="btn">
        <Link to="/">go back to homepage</Link>
      </button>
    </div>
  );
}

export default PageNotfound;
