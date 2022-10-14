import React from "react";

const Booking = () => {
  return (
  <div className="flex justify-between pl-20 pr-20 pt-20 mx-auto">
      <div className="w-1/2 h-50 mr-10  ">
        <h1 className="text-5xl font-bold mb-10">
          Confort in <br />
          any season
        </h1>
        <p>
          NOVELLA is the perfect place to get away from the news, the noise of
          the city and enjoy nature. To wake up from the singing of birds, have
          breakfast in nature, do yoga and meditation, take a walk in the
          forest. Relax in the SPA and watch the bright stars from the forest.
        </p>
        <button className=" bg-blue-500 py-4 px-7 rounded-xl text-white font-semibold flex mt-10">
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
      </div>
      <div className="bg-[url('/house1.png')] bg-cover w-[332px] h-[408px]"></div>
    </div>
  );
};

export default Booking;
