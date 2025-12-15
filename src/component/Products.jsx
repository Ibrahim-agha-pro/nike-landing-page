import { products } from "../constants";
import { star } from "../assets/icons";
function Products() {
  return (
    <section className="max-md:px-3 md:px-8">
      <div>
        <h1 className="text-4xl font-montserrat font-bold">
          Our <span className="text-coral-red">Popular</span> Products
        </h1>
        <p className="text-slate-gray font-palanquin text-sm py-10 max-w-md">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>

      <div className="grid justify-items-center lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-1 gap-5 ">
        {products.map((i) => (
          <div key={i.name}>
            <img src={i.imgURL} />
            <div className="flex flex-1 gap-2 my-5 items-center">
              <img src={star} className="inline-block " />{" "}
              <p className="text-slate-gray text-lg font-montserrat">(4.5) </p>
            </div>
            <p className="font-bold font-palanquin text-xl  ">{i.name}</p>
            <p className="my-5 text-coral-red font-semibold text-2xl font-montserrat">
              {i.price}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
