import React from "react";
import { FaLink, FaEye, FaStar, FaInfo, FaUtensils } from "react-icons/fa";

const RepoItem = ({ item }) => {
  const {
    name,
    description,
    html_url,
    forks,
    open_issues,
    watchers_count,
    stargazers_count,
  } = item;

  return (
    <div className="mb-2 rounded-md card bg-primary hover:bg-accent-content">
      <div className="card-body">
        <h3 className="mb-2 text-xl font-semibold">
          <a href={html_url} target="_blank" rel="noreferrer">
            <FaLink className="inline mr-1" /> {name}
          </a>
        </h3>
        <p className="mb-3">{description}</p>
        <div>
          <div className="mr-2 badge badge-accent badge-lg">
            <FaEye className="mr-2" /> {watchers_count}
          </div>
          <div className="mr-2 badge badge-accent badge-lg">
            <FaStar className="mr-2" /> {stargazers_count}
          </div>
          <div className="mr-2 badge badge-accent badge-lg">
            <FaInfo className="mr-2" /> {open_issues}
          </div>
          <div className="mr-2 badge badge-accent badge-lg">
            <FaUtensils className="mr-2" /> {forks}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepoItem;
