import { arrowRight } from "../assets/icons";
import { statistics } from "../constants";
import { shoes } from "../constants";
import { bigShoe1 } from "../assets/images";
import { useState } from "react";

function Hero() {
  const [selectedShoe, setselectedShoe] = useState(bigShoe1);
  return (
    <section
      id="/"
      className="max-container pb-20 max-md:px-3 md:px-8 flex flex-col gap-10 lg:flex-row min-h-screen justify-center   "
    >
      <div className="pt-28 w-2/5 max-lg:w-full ">
        <p className="text-coral-red font-montserrat text-lg ">
          Our Summer collections
        </p>
        <h1 className="relative z-10 text-8xl my-8 font-palanquin font-semibold ">
          <span className="pr-2 whitespace-nowrap max-lg:whitespace-normal   lg:bg-white ">
            The New Arrival
            <br />
          </span>{" "}
          <span className="text-coral-red">Nike</span> Shose
        </h1>
        <p className=" max-w-[70%] text-slate-gray font-montserrat leading-6 ">
          Discover stylish Nike arrivals quality comfort and innovation for your
          active life.
        </p>
        <button className="btn btn-primary flex gap-4 mt-8 mb-14 font-palanquin text-lg">
          Shop now
          <img src={arrowRight} />
        </button>
        <div className="flex gap-12">
          {statistics.map((i) => (
            <div key={i.label}>
              <h1 className="mb-1 text-4xl font-bold font-palanquin">
                {i.value}
              </h1>
              <p className="text-slate-gray text-sm font-montserrat">
                {i.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative bg-hero flex-1 min-h-screen left-0 top-0 flex justify-center items-center  bg-cover ">
        <img
          src={selectedShoe}
          width={610}
          height={500}
          className="object-contain mb-20 relative z-20"
        />

        <div className="absolute bottom-[-5%] sm:left-[10%] flex gap-8     ">
          {shoes.map((i) => (
            <div
              key={i.thumbnail}
              onClick={() => setselectedShoe(i.bigShoe)}
              className={`cursor-pointer bg-card bg-cover flex justify-center items-center w-28 h-28 sm:w-36 sm:h-36 p-1  border-3 rounded-lg ${
                i.bigShoe === selectedShoe ? "border border-red-500" : ""
              }`}
            >
              {<img width={120} src={i.bigShoe} />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
