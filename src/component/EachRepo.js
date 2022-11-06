import React from "react";
import { Link } from "react-router-dom";
import "./EachRepo.css";

function EachRepo({ data }) {
  return (
    <div className="eachrepo__wrapper">
      <p>
        <p className="title">ID:</p>
        {data?.id}
      </p>
      <p>
        <p className="title">Name:</p>
        {data?.name}
      </p>

      <p>
        <p className="title">Full-Name:</p>
        {data?.full_name}
      </p>
      <p>
        <p className="title"> Url:</p>
        <Link  to={data?.html_url}>
          {data?.html_url}
        </Link>
      </p>
    </div>
  );
}

export default EachRepo;
