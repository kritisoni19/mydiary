import { Link } from "react-router-dom";


function Menu() {
  // console.log(cartItems)
  return (
    <>
      {/* {cartItems.length} */}
      <div className="bg-[#7968dc]">
        <nav className=" border-gray-200 dark:bg-gray-900">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
            <Link to="/" className="flex items-center">
              <img
                src="../images/diary-logo.png"
                className="h-10 mr-3"
                alt="Logo"
              />
            </Link>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-default"
            >
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <Link
                    to="/"
                    className="text-lg  py-2  pr-4 text-white  font-Kalam">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/addentry"
                    className="text-lg py-2  text-white font-Kalam"
                  >
                    Add Entry
                  </Link>
                </li>
                <li>
                  <Link to="/myentries" className="text-lg py-2  text-white font-Kalam">
                    My Entries
                  </Link>
                </li>
              
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
export default Menu;
