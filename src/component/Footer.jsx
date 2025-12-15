import { footerLogo } from "../assets/images";
import { socialMedia } from "../constants";
import { footerLinks } from "../constants";
function Footer() {
  return (
    <footer className="py-20 px-8 gap-8  bg-black text-white grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-1">
      <div className="max-lg:text-center max-lg:mb-6">
        <img width={130} src={footerLogo} className="max-lg:m-auto" />
        <p className="text-sm leading-7 my-6 text-gray-300 font-montserrat  ">
          Get shoes ready for the new term at your nearest Nike store. Find Your
          perfect Size In Store. Get Rewards
        </p>

        <div className="flex gap-5 max-lg:m-auto w-fit ">
          {socialMedia.map((i) => (
            <img
              key={i.alt}
              src={i.src}
              className="bg-white p-2 w-10 h-10 rounded-full"
            />
          ))}
        </div>
      </div>
      {footerLinks.map((item) => (
        <div key={item.title} className="text-center">
          <h1 className="text-xl mb-6">{item.title}</h1>

          {item.links.map((link) => (
            <p
              key={link.name}
              className="mb-2 text-slate-300 hover:text-slate-600 transition duration-75"
            >
              {link.name}
            </p>
          ))}
        </div>
      ))}

      <div className="flex justify-between lg:col-span-4 md:col-span-3 sm:col-span-2 max-sm:col-span-1 max-sm:flex-col max-sm:items-center gap-6 ">
        <p>copyright sign Copyright. All rights reserved.</p>
        <p>Terms & Conditions</p>
      </div>
    </footer>
  );
}

export default Footer;
