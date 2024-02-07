"use client";

import { Transition, Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment, useRef } from "react";

import ReviewRequestData from "./ReviewRequestData";
import { IBookingWithCustomerEmail, bookingStatus } from "app/_models/IBooking";

export interface IDialogProps {
  close: () => void;
  showTableModal: boolean;
  selectedBooking: IBookingWithCustomerEmail;
  updateBooking: (
    status: bookingStatus,
    selectedBooking: IBookingWithCustomerEmail
  ) => void;
}

export default function ReviewRequestModal({
  close,
  showTableModal,
  selectedBooking,
  updateBooking,
}: IDialogProps) {
  const srOnlyCloseMessage = "förhandsvisa förfrågan";

  return (
    <Transition.Root show={showTableModal} as="div">
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto"
        onClose={close}
      >
        <Transition.Child
          as="div"
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel
                  className="pointer-events-auto relative w-screen max-w-md "
                  tabIndex={0}
                >
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="relative text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() => close()}
                      >
                        <span className="absolute -inset-2.5" />
                        <span className="sr-only">
                          {" "}
                          {srOnlyCloseMessage}
                        </span>{" "}
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      <ReviewRequestData
                        selectedBooking={selectedBooking}
                        close={close}
                        updateBooking={updateBooking}
                      ></ReviewRequestData>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
