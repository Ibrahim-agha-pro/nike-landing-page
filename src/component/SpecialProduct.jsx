import { shoe8 } from "../assets/images";
function SpecialProduct() {
  return (
    <section className="max-lg:px-3 md:px-8 pt-32 flex flex-col items-center justify-between lg:flex-row gap-4">
      <div className="max-lg:w-full max-lg:justify-center max-lg:flex max-lg:flex-col max-lg:items-center">
        <h1 className="text-4xl  font-bold font-palanquin max-w-lg">
          We Provide You <span className="text-coral-red"> Super Quality </span>{" "}
          Shoes
        </h1>
        <p className="text-slate-gray text-lg  leading-7 my-6 max-w-xl font-montserrat">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="text-slate-gray text-lg leading-7 my-6 font-montserrat">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <button className="btn btn-primary my-6 text-lg">View details</button>
      </div>
      <div className="flex-1">
        <img src={shoe8} width={400} className="m-auto object-contain " />
      </div>
    </section>
  );
}

export default SpecialProduct;
