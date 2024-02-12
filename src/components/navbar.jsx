import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <header className="bg-white shadow sticky top-0">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center mb-4 h-full">
          <img src={logo} alt="Logo" className="w-20 object-contain" />
        </a>

        <nav className="hidden md:flex space-x-6 items-center">
          <a href="#" className="text-gray-500 hover:text-purple-600 transition">
            About
          </a>
          <a href="#" className="text-gray-500 hover:text-purple-600 transition">
            Services
          </a>
          <a href="#" className="text-gray-500 hover:text-purple-600 transition">
            Projects
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="sm:flex sm:space-x-4">
            <a
              href="#"
              className="block rounded-md bg-purple-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-purple-700"
            >
              Login
            </a>
            <a
              href="#"
              className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-purple-600 transition hover:text-gray-600/75 sm:block"
            >
              Register
            </a>
          </div>

          <button className="block md:hidden rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75">
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
