import { offer } from "../assets/images";
import { arrowRight } from "../assets/icons";
function SpecialOffer() {
  return (
    <section className="flex py-20 max-md:px-10  md:px-12 gap-16 flex-col-reverse md:flex-row">
      <div className="flex-1">
        <img src={offer} />
      </div>
      <div className="flex-1 lg:pt-20 max-lg:pt-1">
        <h1 className="text-[40px] font-semibold font-montserrat">
          {" "}
          <span className="text-coral-red">Special </span> Offer
        </h1>
        <p className="info-text my-6">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="info-text">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="flex gap-8 mt-8">
          <button className="btn btn-primary flex gap-3">
            Shop now <img src={arrowRight} />{" "}
          </button>
          <button className="btn border border-slate-gray text-slate-gray">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
}

export default SpecialOffer;
