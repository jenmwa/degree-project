import { Fragment, useRef, useState } from "react";

import {
  CheckIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";
import { Transition } from "@headlessui/react";
import { Dialog } from "@headlessui/react";

export interface IDialog {
  type: "warning" | "ok" | "";
  title: string;
  message: string;
  primaryButton: string;
}

export interface IDialogProps {
  dialog: IDialog;
}

// const dialog: IDialog = {
//   type: "ok",
//   title: "Avaktivera konto",
//   message:
//     "Är du säker på att du vill avaktivera ditt konto? Denna åtgärd är permanent och går inte att ångra.",
//   primaryButton: "Avaktivera konto",
// };

/* <DialogComponent
  dialog={{
    type: "warning",
    title: "Warning Title",
    message: "This is a warning message.",
    primaryButton: "OK",
  }}
/>;

// Render an OK dialog
<DialogComponent
  dialog={{
    type: "ok",
    title: "Success Title",
    message: "This is a success message.",
    primaryButton: "OK",
  }}
/>; */

// const dialogData: IDialog[] = [
//   {
//     type: "warning",
//     title: "Avaktivera konto",
//     message:
//       "Är du säker på att du vill avaktivera ditt konto? Denna åtgärd är permanent och går inte att ångra.",
//     primaryButton: "Avaktivera konto",
//   },
//   {
//     type: "ok",
//     title: "Dialog neutralt",
//     message: "Detta är ett neutralt dialogmeddelande.",
//     primaryButton: "OK",
//   },
// ];

export default function DialogComponent({ dialog }: IDialogProps) {
  const cancelButtonRef = useRef(null);

  const [open, setOpen] = useState(true);

  const openDialog = () => {
    setOpen(true);
  };

  const closeDialog = () => {
    setOpen(false);
  };

  return (
    <Transition.Root show={open} as="div">
      <Dialog
        as="div"
        className="relative z-10"
        onClose={closeDialog}
        initialFocus={cancelButtonRef}
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
                    <div
                      className={` ${
                        dialog.type === "warning"
                          ? " mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100"
                          : ""
                      } sm:mx-0 sm:h-10 sm:w-10`}
                    >
                      {dialog.type === "warning" ? (
                        <ExclamationTriangleIcon
                          className="h-6 w-6 text-red-600"
                          aria-hidden="true"
                        />
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-900"
                      >
                        {dialog.title}
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          {dialog.message}
                        </p>
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
                    }  text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto`}
                    onClick={closeDialog}
                  >
                    {dialog.primaryButton}
                  </button>
                  <button
                    type="button"
                    className="mt-4 inline-flex justify-center w-full sm:w-auto button-secondary sm:mt-0 sm:justify-start"
                    onClick={closeDialog}
                    ref={cancelButtonRef}
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