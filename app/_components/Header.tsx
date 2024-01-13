import Image from "next/image";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";

export const Header = () => {
  return (
    <>
      {" "}
      <header className="fixed z-10 w-full ">
        <nav className="px-4 py-4 flex justify-between items-center bg-stone-100">
          <div className="flex items-center">
            <a className="text-3xl font-bold leading-none" href="#">
              <Image
                src="/bjorbyblomster_logo.svg"
                alt="logo"
                className="w-10 h-10"
                width={40}
                height={40}
              ></Image>
            </a>
            <span>Björby blomster</span>
          </div>
          <div className="lg:hidden">
            <button className="navbar-burger flex items-center text-rust-300 p-3">
              <svg
                className="block h-4 w-4 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Mobilmenu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>

          <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
            <li>
              <a className="text-sm text-gray-500 hover:text-gray-600" href="#">
                Hem
              </a>
            </li>
            <li className="text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                className="w-4 h-4 current-fill"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </li>
            <li>
              <a className="text-sm text-rust-300 font-bold" href="#">
                Om mig
              </a>
            </li>
            <li className="text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                className="w-4 h-4 current-fill"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </li>

            <li>
              <a className="text-sm text-gray-500 hover:text-gray-600" href="#">
                Kontakt{" "}
              </a>
            </li>
          </ul>

          <button
            type="button"
            className="hidden lg:flex text-white bg-rust-300 hover:bg-rust-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center items-center dark:bg-rust-300 dark:hover:bg-rust-400 dark:focus:ring-rust-500"
          >
            Butiken
            <ArrowTopRightOnSquareIcon className="w-5 h-5 ml-2" />
          </button>
        </nav>
      </header>
    </>
  );
};
