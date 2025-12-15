function Contact() {
  return (
    <section className="py-16 flex items-center flex-col gap-10 lg:flex-row max-md:px-10  md:px-12 ">
      <div className="w-1/2 max-lg:text-center max-lg:w-3/4">
        <h1 className="text-4xl font-montserrat lg:max-w-lg font-semibold">
          Sign Up for <span className="text-coral-red"> Updates </span> &
          Newsletter
        </h1>
      </div>

      <div className=" w-1/2 flex justify-end max-lg:justify-center  max-lg:w-full  ">
        <div className=" flex max-lg:flex-col max-lg:gap-4   w-4/5 border py-2   border-slate-400  rounded-full px-3  max-lg:rounded-none ">
          <input
            className="flex-1 max-lg:border max-lg:py-4 max-lg:px-2 max-lg:rounded-lg  placeholder:text-gray-placeholder:text-sm placeholder:font-palanquin outline-none focus:placeholder:text-transparent  placeholder:transition"
            placeholder="subscibe@nike.com"
          />
          <button className="max-lg:py-2 max-lg:rounded-lg lg:btn  btn-primary whitespace-nowrap ">
            {" "}
            Sign Up
          </button>
        </div>
      </div>
    </section>
    // <section>
    //   {" "}
    //   <div>
    //     {" "}
    //     <h1>
    //       Sign Up for <span className="text-coral-red">Updates </span> &
    //       Newsletter
    //     </h1>
    //   </div>
    //   <div>
    //     <input
    // className="relative placeholder:text-gray- placeholder:text-sm placeholder:font-palanquin border py-5 border-slate-400 rounded-full pl-5 pr-60"
    //       placeholder="subscibe@nike.com"
    //     />
    // <button className="btn btn-primary absolute "> Sign Up</button>
    //   </div>
    // </section>
  );
}

export default Contact;
