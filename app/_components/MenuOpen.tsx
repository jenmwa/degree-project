import { Dialog } from "@headlessui/react";
import { INavigation } from "./Hero";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface IMenuOpenProps {
  navigation: INavigation[];
  menuOpenClose: () => void;
  mobileMenuOpen: boolean;
}

export const MenuOpen = ({
  navigation,
  menuOpenClose,
  mobileMenuOpen,
}: IMenuOpenProps) => {
  return (
    <>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={menuOpenClose}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-100 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Björby Blomster</span>
            </a>

            <button
              type="button"
              className="-m-2.5 p-2.5 text-gray-800"
              onClick={menuOpenClose}
            >
              <span className="sr-only">Stäng meny</span>
              <XMarkIcon className="h-12 w-12" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/40">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-rust-100"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-rust-100"
                >
                  Butiken
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
};
