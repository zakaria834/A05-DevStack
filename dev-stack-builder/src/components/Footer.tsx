import logoText from "../assets/logo-text.png";

function Footer() {
  return (
    <footer className="mt-16 w-full border-t border-slate-100 bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-12 lg:px-10">
        {/* Main Footer */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4 lg:gap-x-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a
              href="#home"
              className="inline-flex items-center"
              aria-label="Dev Stack Home"
            >
              <img
                src={logoText}
                alt="Dev Stack"
                className="h-9 w-auto object-contain"
              />
            </a>

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-500">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-sm font-semibold text-slate-600">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-fuchsia-600"
              >
                GitHub
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-fuchsia-600"
              >
                Twitter
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-fuchsia-600"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-slate-800">
              Product
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-slate-500">
              <li>
                <a href="#home" className="transition hover:text-fuchsia-600">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#technologies"
                  className="transition hover:text-fuchsia-600"
                >
                  Technologies
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="transition hover:text-fuchsia-600"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-slate-800">
              Company
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-slate-500">
              <li>
                <a href="#about" className="transition hover:text-fuchsia-600">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="transition hover:text-fuchsia-600"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#careers"
                  className="transition hover:text-fuchsia-600"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-slate-800">
              Legal
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-slate-500">
              <li>
                <a
                  href="#privacy"
                  className="transition hover:text-fuchsia-600"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="transition hover:text-fuchsia-600">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 flex flex-col gap-4 border-t border-slate-100 pt-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex gap-7">
            <a href="#privacy" className="transition hover:text-fuchsia-600">
              Privacy
            </a>
            <a href="#terms" className="transition hover:text-fuchsia-600">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
