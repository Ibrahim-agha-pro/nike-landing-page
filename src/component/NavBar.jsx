import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants/index";

function NavBar() {
  return (
    <header className="max-container absolute w-full z-40">
      <nav className="py-6 px-10 flex items-center  justify-between">
        <a href="/">
          <img src={headerLogo} width={130} height={29} />
        </a>
        <ul className=" gap-10 flex-1 justify-end text-slate-gray font-montserrat hidden lg:flex">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
        <img src={hamburger} width={22} className="max-lg:block hidden" />
      </nav>
    </header>
  );
}

export default NavBar;
