import React from "react";

const Discount = () => {
  return (
    <div className="bg-black">
      <h1 className=" mx-auto flex justify-center items-center mb-5 text-7xl text-white">
        Get 15% discount when <br />
        booking online
      </h1>

      <div className=" mx-auto flex flex-col  justify-center items-center ">
        <select className="select select-info w-1/2   mx-auto flex justify-center items- mb-5 bg-black text-gray-400">
          <option>Dhaka</option>
          <option>Rangpur</option>
          <option>Chittagong</option>
        </select>

        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-info w-1/2 bg-black text-gray-400"
        />
        <br />
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-info w-1/2 bg-black text-gray-400"
        />
        <br />

        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-info w-1/2 bg-black text-gray-400"
        />
        <br />
      </div>
    </div>
  );
};

export default Discount;
