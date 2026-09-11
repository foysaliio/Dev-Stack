const Technologies = () => {
  return (
    <section id="technologies">
      <div className="container mx-auto px-3">
        {/* Technologies section heading */}
        <div className="space-y-2 text-center lg:text-left">
          <h2
            className="text-2xl lg:text-4xl
              font-bold text-slate-900"
          >
            Explore the <span className="text-[#EC4899]">Technologies</span>
          </h2>

          <p className="text-sm lg:text-base text-slate-500">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {/* Technologies cards and stack */}
        <div className="mt-8"></div>
      </div>
    </section>
  );
};

export default Technologies;
