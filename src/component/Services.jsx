import { services } from "../constants";

function Services() {
  return (
    <section className="py-20 max-md:px-10  md:px-8 grid gap-10 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
      {services.map((i) => (
        <div key={i.label} className="py-16 px-10 rounded-xl shadow-3xl">
          {
            <img
              className="bg-coral-red w-10 h-10 p-2 rounded-full"
              src={i.imgURL}
            />
          }
          <h1 className="font-bold text-xl font-palanquin my-7">{i.label}</h1>
          <p className="text-slate-gray text-md font-montserrat leading-7">
            {i.subtext}
          </p>
        </div>
      ))}
    </section>
  );
}

export default Services;
