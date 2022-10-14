import React from "react";

const ContactUs = () => {
  return (
    <div className=" pb-10">
      <h1 className="text-7xl flex justify-center pt-10 pb-5">Contacts us</h1>
      <p className=" pt-10 pb-10 w-full p-20">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using Content here, content here, making it look
        like readable English. Many desktop publishing packages and web page
        editors now use Lorem Ipsum as their default model text, and a search
        for lorem ipsum will uncover many web sites still in their infancy.
        Various versions have evolved over the years, sometimes by accident,
        sometimes on purpose (injected humour and the like).
      </p>
      {/* map */}

      {/* form */}

      <div className="flex flex-col items-center">
        <p className="">If You Have Any Question</p>

        <br />

        <input
          type="text"
          placeholder="Your Name"
          className="input input-bordered input-info w-1/2 bg-black text-gray-400"
        />
        <br />
        <input
          type="text"
          placeholder="Your Email"
          className="input input-bordered input-info w-1/2 bg-black text-gray-400"
        />
        <br />
        <textarea
          className="textarea textarea-info w-1/2 bg-black"
          placeholder="You Message"
        ></textarea>
        <br />
        <button className="  py-4 px-7 rounded-xl btn w-1/2  bg-blue-500  text-white font-semibold flex">
          Send Message
        </button>
        <br />
      </div>
    </div>
  );
};

export default ContactUs;
