import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/create">Create</Link>
          </li>
        </ul>
      </nav>
      <div>Home</div>
    </>
  );
}

export default Home;
