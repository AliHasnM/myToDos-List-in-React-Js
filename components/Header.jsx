import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="flex space-x-16 items-center bg-[#d3ecdd] p-3 px-6 shadow-2xl">
      <div className="logo cursor-pointer">{props.title}</div>
      <div className="flex space-x-96">
        <ul className="flex space-x-10">
          <li>
            <Link
              to="/"
              className="hover:bg-[#b9fdd4] cursor-pointer p-1 px-2 rounded shadow-sm"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:bg-[#b9fdd4] cursor-pointer p-1 px-2 rounded shadow-sm"
            >
              About
            </Link>
          </li>
        </ul>
        {/* Ternary operator  use {condition ? ture : false } */}
        {props.searchbar ? (
          <div className="search space-x-2">
            <input
              type="text"
              placeholder="Search"
              className="p-1 px-2 rounded"
            />
            <button className="bg-blue-600 rounded p-1 px-2 text-white hover:bg-blue-500">
              Search
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Header;
// default props set
Header.defaultProps = {
  title: "Your Title Here",
  searchbar: false,
};
// props type set
Header.propTypes = {
  title: PropTypes.string,
  searchbar: PropTypes.bool.isRequired,
};
// props --> jesy function me parameters ko pass krty hain esy hi hum react me Components me data ko pass krne k leye props ko use krty hain
// propTypes -->  es me hum props ki type ko set kr dety hain k knsi type ka props send kr sakty hain like as , string, number, etc
// defaultProps --> es me hum default props ko set kr dety hain k aghar koi user props send nhi krta tu defaultProps show ho jaie
