import logoText from "../assets/logo-text.png";
const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white">
      
      {/* Main Footer */}
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <img src={logoText} alt="Dev Stack" className="h-8 w-auto" />
            </div>

            <p className="mt-4 max-w-xs text-sm leading-6 text-gray-500">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            {/* Social Links */}
            <div className="mt-5 flex gap-5 text-sm font-medium text-gray-600">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500"
              >
                GitHub
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500"
              >
                Twitter
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-bold uppercase text-gray-900">
              Product
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-gray-500">
              <a href="#" className="hover:text-pink-500">
                Home
              </a>

              <a href="#" className="hover:text-pink-500">
                Technologies
              </a>

              <a href="#" className="hover:text-pink-500">
                Projects
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-bold uppercase text-gray-900">
              Company
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-gray-500">
              <a href="#" className="hover:text-pink-500">
                About
              </a>

              <a href="#" className="hover:text-pink-500">
                Contact
              </a>

              <a href="#" className="hover:text-pink-500">
                Careers
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-bold uppercase text-gray-900">Legal</h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-gray-500">
              <a href="#" className="hover:text-pink-500">
                Privacy Policy
              </a>

              <a href="#" className="hover:text-pink-500">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col gap-4 border-t border-gray-200 pt-6 text-sm text-gray-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-700">
              Privacy
            </a>

            <a href="#" className="hover:text-gray-700">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
