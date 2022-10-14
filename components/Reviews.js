import React from "react";

const Reviews = () => {
  return (
    <div className="bg-black ">
      <div className="p-2">
        <h1 className=" mx-auto flex justify-center items-center mb-5 text-7xl text-white">
          Read reviews our
        </h1>
        <h1 className=" mx-auto flex justify-center items-center mb-5 text-7xl text-white">
          guests
        </h1>
      </div>

      {/* inputs */}

      <div className=" mx-auto flex flex-col  justify-center items-center ">
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
              Save my name, email,and website in this browser for the next time
              I comment
            </span>
          </label>
        </div>
        <button className="  py-4 px-7 rounded-xl btn w-1/2  bg-blue-500  text-white font-semibold flex">
          Post Comment
        </button>
      </div>
    </div>
  );
};

export default Reviews;
