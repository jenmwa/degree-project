import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

interface IMenuOpenProps {
  navigation: INavigation[];
  menuOpenClose: () => void;
  mobileMenuOpen: boolean;
}

export interface INavigation {
  name: string;
  href: string;
}

const navigation: INavigation[] = [
  { name: "Hem", href: "/" },
  { name: "Emma", href: "/#Emma" },
  { name: "Kontakt", href: "/#Kontakt" },
];

export default function MenuOpen({
  menuOpenClose,
  mobileMenuOpen,
}: IMenuOpenProps) {
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
            <h2 className="text-4xl font-extrabold ">Björby Blomster</h2>
            {/* <Image
              src="../bjorbyblomster_logo.svg"
              className="h-16"
              alt="Björby Blomster Logo"
              width={50}
              height={50}
            /> */}

            <button
              type="button"
              className="-m-2.5 p-2.5 dark-text"
              onClick={menuOpenClose}
            >
              {/* <span className="sr-only">Stäng meny</span> */}
              <XMarkIcon className="h-12 w-12" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/40">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block px-3 py-2 text-base font-semibold leading-7  hover:bg-rust-100"
                    onClick={menuOpenClose}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  href="/buketter"
                  className="-mx-3 block px-3 py-2.5 text-base font-semibold leading-7  hover:bg-rust-100"
                  onClick={menuOpenClose}
                >
                  Buketter
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
}
