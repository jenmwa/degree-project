import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

export const MenuMobile = () => {
  return (
    <>
      <div className="navbar-menu relative z-50 hidden">
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <a className="mr-auto text-3xl font-bold leading-none" href="#">
              <svg className="h-12" viewBox="0 0 100 100">
                <path d="M100 34.2c-.4-2.6-3.3-4-5.3-5.3-3.6-2.4-7.1-4.7-10.7-7.1-8.5-5.7-17.1-11.4-25.6-17.1-2-1.3-4-2.7-6-4-1.4-1-3.3-1-4.8 0-5.7 3.8-11.5 7.7-17.2 11.5L5.2 29C3 30.4.1 31.8 0 34.8c-.1 3.3 0 6.7 0 10v16c0 2.9-.6 6.3 2.1 8.1 6.4 4.4 12.9 8.6 19.4 12.9 8 5.3 16 10.7 24 16 2.2 1.5 4.4 3.1 7.1 1.3 2.3-1.5 4.5-3 6.8-4.5 8.9-5.9 17.8-11.9 26.7-17.8l9.9-6.6c.6-.4 1.3-.8 1.9-1.3 1.4-1 2-2.4 2-4.1V37.3c.1-1.1.2-2.1.1-3.1 0-.1 0 .2 0 0zM54.3 12.3L88 34.8 73 44.9 54.3 32.4V12.3zm-8.6 0v20L27.1 44.8 12 34.8l33.7-22.5zM8.6 42.8L19.3 50 8.6 57.2V42.8zm37.1 44.9L12 65.2l15-10.1 18.6 12.5v20.1zM50 60.2L34.8 50 50 39.8 65.2 50 50 60.2zm4.3 27.5v-20l18.6-12.5 15 10.1-33.6 22.4zm37.1-30.5L80.7 50l10.8-7.2-.1 14.4z"></path>
              </svg>
            </a>
            <button className="navbar-close">
              <svg
                className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
        </nav>
        
        <div>
          <ul>
            <li className="mb-1">
              <a
                className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-rust-400 rounded"
                href="#"
              >
                Hem
              </a>
            </li>
            <li className="mb-1">
              <a
                className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-rust-400 rounded"
                href="#"
              >
                Om mig
              </a>
            </li>

            <li className="mb-1">
              <a
                className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-rust-400 rounded"
                href="#"
              >
                Kontakt
              </a>
            </li>
          </ul>
        </div>

        <button
          type="button"
          className=" text-white bg-rust-300 hover:bg-rust-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-rust-300 dark:hover:bg-rust-400 dark:focus:ring-rust-500"
        >
          Butiken
          <ArrowTopRightOnSquareIcon className="w-5 h-5 ml-2" />
        </button>
      </div>
    </>
  );
};
