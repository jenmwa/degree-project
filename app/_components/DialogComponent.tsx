"use client";
import { Transition } from "@headlessui/react";
import { Dialog } from "@headlessui/react";
import { IDialog } from "../_models/IDialog";
import React from "react";

export interface IDialogProps {
  dialog: IDialog;
  closeDialog: () => void;
  showDialog: boolean;
}

export default function DialogComponent({
  dialog,
  closeDialog,
  showDialog,
}: IDialogProps) {
  return (
    <Transition.Root show={showDialog} as="div">
      <Dialog as="div" className="fixed inset-0 z-50" onClose={closeDialog}>
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

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as="div"
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="relative transform overflow-hidden bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6"
                      >
                        {dialog.title}
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className=" text-gray-500">{dialog.message}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 flex flex-col sm:flex-row-reverse sm:justify-start sm:items-center sm:space-x-4">
                  <button
                    type="button"
                    className={`inline-flex w-full justify-center ${
                      dialog.type === "warning"
                        ? "button-warning "
                        : "primary-button"
                    }  font-semibold text-white shadow-sm sm:ml-3 sm:w-auto`}
                    onClick={() => {
                      dialog.type === "warning" ? closeDialog() : closeDialog();
                    }}
                  >
                    {dialog.primaryButton}
                  </button>
                  <button
                    type="button"
                    className="mt-4 inline-flex justify-center w-full sm:w-auto button-secondary sm:mt-0 sm:justify-start"
                    onClick={closeDialog}
                  >
                    Avbryt
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
