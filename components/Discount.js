import React from "react";

const Discount = () => {
  return (
    <div className="bg-black ">
        <h1 className=" mx-auto flex justify-center items-center text-7xl text-white">
          Get 15% discount when
        </h1>
        <h1 className=" mx-auto flex justify-center items-center mb-10 text-7xl text-white">
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
          placeholder="Name"
          className="input input-bordered input-info w-1/2 bg-black text-gray-400"
        />
        <br />

        <input
          type="number"
          placeholder="Telephone"
          className="input input-bordered input-info w-1/2 bg-black text-gray-400"
        />
        <br />
        <div className="form-control flex flex-row items-center mb-8">
          <input
            type="checkbox"
            checked
            className="checkbox checkbox-primary"
          />
          <div>
            <label className="label cursor-pointer">
              <span className="label-text">
                I agree to the processing of data
              </span>
            </label>
          </div>
        </div>
        <button className="  py-4 px-7 rounded-xl btn w-1/2  bg-blue-500  text-white font-semibold flex">
          Send Message
        </button>
      </div>
    </div>
  );
};

export default Discount;
