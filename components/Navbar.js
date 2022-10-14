import React from "react";

const Navbar = () => {
  return (
    <div className="navbar p-8 absolute flex flex-row items-center text-white">
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl">
          <span className="text-blue-500 mr-1">UK</span> House
        </a>
      </div>
      <div className="navbar-center">
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

      <div className="navbar-end">+4 900 000 57 88 </div>
    </div>
  );
};

export default Navbar;
