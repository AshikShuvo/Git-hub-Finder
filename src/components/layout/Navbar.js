import React from "react";
import PropType from "prop-types";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div className='navbar bg-primary'>
      <h1>
        <i className={props.icon}></i>
        {props.title}
      </h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </div>
  );
};
Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github",
};
Navbar.propTypey = {
  title: PropType.string.isRequired,
  icon: PropType.string.isRequired,
};

export default Navbar;
