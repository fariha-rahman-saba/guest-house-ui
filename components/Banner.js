import React from "react";
import backgroundImg from "../public/img/banner.png";

const Banner = () => {
  return (
    //       <div className="hero min-h-screen" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
    //   <div className="hero-overlay bg-opacity-40"></div>
    //   <div className="hero-content  text-neutral-content">
    //     <div className="max-w-md">
    //       <h1 className="mb-5 text-5xl font-bold">
    //         <span>Guest house by </span>
    //         <span>the lake</span>
    //       </h1>
    //       <p className="mb-5">The parfect place to stay as a couple in nature</p>
    //       <button className="btn btn-primary">Get Started</button>
    //     </div>
    //   </div>
    // </div>
    <section
      className=" mx-auto  items-center justify-around "
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <button className="  py-4 px-7 rounded-xl btn btn-outline btn-info  text-white font-semibold flex">
            Guest House
            
          </button>
      <div className="space-y-4">
        <h1 className="text-7xl font-bold">
          <span className="text-blue-500">Guest house by </span>
          <br />
          <span>the lake</span>
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur.</p>

        <div className="flex gap-5">
          <button className=" bg-blue-500 py-4 px-7 rounded-xl text-white font-semibold flex">
            Book Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>

          <button className="  py-4 px-7 rounded-xl btn btn-outline btn-info text-white font-semibold flex">
            Call Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
