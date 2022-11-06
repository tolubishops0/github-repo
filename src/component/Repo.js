import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Repo.css";
import EachRepo from "./EachRepo";
import { Link} from "react-router-dom";

function Repo() {
  const [repositories, setRepositiries] = useState([]);
  const [eachRepo, setEachRepo] = useState();

  const getRepo = () => {
    axios
      .get("https://api.github.com/users/tolubishops0/repos")
      .then((res) => {
        const myRepo = res.data;
        setRepositiries(myRepo);
        console.log(myRepo)
      })
      .catch((error) => console.error(`error: ${error}`));
  };
  useEffect(() => {
    getRepo();
  }, []);

  const handleRepo = (repos) => {
    setEachRepo(repos);
  };
  return (
    <div className="repo__wrapper">
      <table>
        <thead>
          <th>REPOSITORIES</th>
        </thead>
        <tbody>
          {repositories.map((repos) => (
            <td
              style={{ display: "block" }}
              key={repos.id}
              onClick={() => handleRepo(repos)}
            >
              <Link to="eachrepo"> {repos.name}</Link>
            </td>
          ))}
        </tbody>
      </table>
      <button className="btn btn-repo">
          <Link to="/">back to homepage</Link>
        </button>

      <EachRepo data={eachRepo} />
    </div>
  );
}

export default Repo;
