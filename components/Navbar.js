import React from "react";

const Navbar = () => {
  return (
    <div className="navbar w-11/12 mb-10">
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl">
          <span className="text-blue-500 mr-1">UK</span> House
        </a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal ">
          <li>
            <a>Photo gallery</a>
          </li>

          <li>
            <a>Our houses</a>
          </li>
          <li>
            <a>Booking</a>
          </li>
          <li>
            <a>Booking</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
