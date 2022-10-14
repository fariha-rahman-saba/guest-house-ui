import React from "react";

const Reviews = () => {
  return (
    <div className="bg-black mt-10">
      <div className="p-2">
        <h1 className=" mx-auto flex justify-center items-center text-7xl text-white">
          Read reviews our
        </h1>
        <h1 className=" mx-auto flex justify-center items-center mb-5 text-7xl text-white">
          guests
        </h1>
        <p className=" flex justify-center mb-10">
          Your email address will not be published Required fields market *
        </p>
      </div>

      {/* inputs */}

      <div className=" mx-auto flex flex-col  justify-center items-center ">
        <input
          type="text"
          placeholder="Your Name"
          className="input input-bordered input-info w-1/2 bg-black text-gray-400"
        />
        <br />

        <input
          type="text"
          placeholder="Your E-mail"
          className="input input-bordered input-info w-1/2 bg-black text-gray-400"
        />
        <br />
        <input
          type="text"
          placeholder="Your Phone Number"
          className="input input-bordered input-info w-1/2 bg-black text-gray-400"
        />
        <br />

        <div className="form-control flex flex-row items-center mb-10">
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

      {/* Reviews */}
      {/* <div className="card w-96 bg-blue-500 shadow-xl mt-20 text-white">
        <figure className="px-10 pt-10 ">
          <img src="/person1.png" alt="person" className="rounded-xl" />
        </figure>

        <div className="card-body items-center text-center">
          <h2 className="card-title">Oner</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since.
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default Reviews;
