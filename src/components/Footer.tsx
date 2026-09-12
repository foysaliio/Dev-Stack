import footerImg from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-slate-100">
      <div className="container mx-auto px-3 py-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
        {/* Brand block */}
        <div className="flex flex-col items-center gap-4 text-center lg:col-span-2 lg:items-start lg:text-left">
          <img src={footerImg} alt="Dev Stack" className="w-32 lg:w-24" />

          <p className="max-w-md text-sm leading-6 text-slate-400">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>

          <ul className="flex items-center gap-4 text-base text-slate-700">
            <li>
              <a href="#" className="hover:text-pink-500">
                GitHub
              </a>
            </li>

            <li className="text-slate-400 lg:hidden">•</li>

            <li>
              <a href="#" className="hover:text-pink-500">
                Twitter
              </a>
            </li>

            <li className="text-slate-400 lg:hidden">•</li>

            <li>
              <a href="#" className="hover:text-pink-500">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        {/* Product links */}
        <div className="hidden lg:block">
          <h3 className="text-sm font-semibold text-slate-900">PRODUCT</h3>

          <ul className="mt-4 space-y-3 text-sm text-slate-500">
            <li>
              <a href="#home" className="hover:text-pink-500">
                Home
              </a>
            </li>
            <li>
              <a href="#technologies" className="hover:text-pink-500">
                Technologies
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-pink-500">
                Projects
              </a>
            </li>
          </ul>
        </div>

        {/* Company links */}
        <div className="hidden lg:block">
          <h3 className="text-sm font-semibold text-slate-900">COMPANY</h3>

          <ul className="mt-4 space-y-3 text-sm text-slate-500">
            <li>
              <a href="#about" className="hover:text-pink-500">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-pink-500">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500">
                Careers
              </a>
            </li>
          </ul>
        </div>

        {/* Legal links */}
        <div className="hidden lg:block">
          <h3 className="text-sm font-semibold text-slate-900">LEGAL</h3>

          <ul className="mt-4 space-y-3 text-sm text-slate-500">
            <li>
              <a href="#" className="hover:text-pink-500">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      {/* Bottom bar */}
      <div className="container mx-auto px-3">
        <div className="mx-3 border-t py-1 border-slate-100 lg:mx-0">
          <div
            className="flex items-center justify-between gap-2
        py-5 text-sm text-slate-400 lg:text-xs"
          >
            <p>© 2026 Dev Stack. All rights reserved.</p>

            <div className="flex gap-6">
              <a href="#" className="hover:text-pink-500">
                Privacy
              </a>

              <a href="#" className="hover:text-pink-500">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
