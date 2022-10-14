import React from "react";

const Discount = () => {
  return (
    <div className="bg-black ">
      <div className="p-2">
        <h1 className=" mx-auto flex justify-center items-center mb-5 text-7xl text-white">
          Get 15% discount when
        </h1>
        <h1 className=" mx-auto flex justify-center items-center mb-5 text-7xl text-white">
          booking online
        </h1>
      </div>

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
        <div className="form-control flex">
          <input
            type="checkbox"
            checked
            className="checkbox checkbox-primary"
          />
          <label className="label cursor-pointer">
            <span className="label-text">
              I agree to the processing of data
            </span>
          </label>
        </div>
        <button className="  py-4 px-7 rounded-xl btn w-1/2  bg-blue-500  text-white font-semibold flex">
          Send Message
        </button>
      </div>
    </div>
  );
};

export default Discount;
