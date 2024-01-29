import { Bars3Icon } from "@heroicons/react/24/outline";
import { INavigation } from "./MenuOpen";

interface INavProps {
  menuOpenClose: () => void;
  navigation: INavigation[];
}

export function Nav({ menuOpenClose, navigation }: INavProps) {
  return (
    <>
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Björby Blomster</span>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center p-2.5 text-gray-100"
            onClick={menuOpenClose}
          >
            <span className="sr-only">Öppna menyn</span>
            <Bars3Icon className="h-12 w-12" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-100"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-gray-100 bg-rust-300 px-6 py-3  hover:bg-rust-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rust-500"
          >
            Buketter <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
    </>
  );
}
