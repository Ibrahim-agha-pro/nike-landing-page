import Contact from "./component/Contact";
import Hero from "./component/Hero";
import NavBar from "./component/NavBar";
import Products from "./component/Products";
import Services from "./component/Services";
import SpecialOffer from "./component/SpecialOffer";
import SpecialProduct from "./component/SpecialProduct";
import Testimonials from "./component/Testimonials";
import Footer from "./component/Footer";

function App() {
  return (
    <main className="relative">
      <NavBar />
      <Hero />
      <Products />
      <SpecialProduct />
      <Services />
      <SpecialOffer />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
