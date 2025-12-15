import { reviews } from "../constants";
import { star } from "../assets/icons";
function Testimonials() {
  return (
    <section className="bg-[#f5f6ff] gap-16 min-h-screen py-24 flex flex-col items-center px-16 ">
      <div className="text-center">
        <h1 className="text-4xl font-semibold font-palanquin mb-2">
          What Our <span className="text-coral-red">Customers</span> Say?
        </h1>
        <p className=" text-md text-slate-gray font-montserrat max-w-lg">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>
      </div>

      <div className="flex max-lg:gap-20 max-lg:flex-col justify-between w-full ">
        {reviews.map((i) => (
          <div
            key={i.customerName}
            className="flex flex-col items-center flex-1  "
          >
            <img className=" w-28 h-28 rounded-full" src={i.imgURL} />
            <p className="pt-7 text-slate-gray max-w-xs text-center font-montserrat">
              {i.feedback}
            </p>
            <div className="flex gap-2 my-3">
              {" "}
              <img src={star} />
              <span className="text-slate-gray text-xl">({i.rating})</span>
            </div>
            <h1 className="font-bold text-2xl font-palanquin">
              {i.customerName}
            </h1>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
