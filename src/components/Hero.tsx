import heroImg from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <section id="hero" className="my-12 lg:my-24">
      <div
        className="container mx-auto px-3 grid
          grid-cols-1 lg:grid-cols-2
          items-center gap-10 lg:gap-8"
      >
        {/* Hero content */}
        <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
          <h1
            className="text-3xl sm:text-4xl xl:text-5xl
              font-bold leading-tight text-slate-900"
          >
            Build Your Ideal <br />
            <span className="brand-gradient bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="text-base lg:text-lg text-slate-500 max-w-lg mx-auto lg:mx-0">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          {/* Hero buttons */}
          <div className="flex flex-wrap items-center gap-3 justify-center lg:justify-start">
            <button
              className="brand-gradient cursor-pointer
                text-sm font-medium text-white
                rounded px-4 py-3"
              type="button"
            >
              Explore Technologies
            </button>

            <button
              className="cursor-pointer text-sm text-slate-700
                border border-slate-200 rounded px-8 py-3
                transition-colors duration-300
                hover:border-slate-400"
              type="button"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Hero image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={heroImg}
            alt="Illustration of a development technology stack"
            className="w-full max-w-sm"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
