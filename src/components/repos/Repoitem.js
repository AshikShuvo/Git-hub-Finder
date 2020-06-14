import React from "react";
import PropTypes from "prop-types";

const Repoitem = ({ repo, key }) => {
  return (
    <div className='card '>
      <h3>
        <a href={repo.html_url}>{repo.name}</a>
      </h3>
    </div>
  );
};
Repoitem.prototypes = {
  repo: PropTypes.object.isRequired,
};

export default Repoitem;
