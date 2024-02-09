import { IBookingCreated, bookingStatus } from "app/_models/IBooking";
import { useState } from "react";
import ReviewRequestBookingStatus from "./ReviewRequestBookingStatus";
import { Dialog } from "@headlessui/react";

interface IReviewRequestDataProps {
  selectedBooking: IBookingCreated;
  close: () => void;
  updateBooking: (
    status: bookingStatus,
    selectedBooking: IBookingCreated
  ) => void;
}
export default function ReviewRequestData({
  selectedBooking,
  close,
  updateBooking,
}: IReviewRequestDataProps) {
  const [status, setStatus] = useState<bookingStatus>(
    selectedBooking.bookingStatus
  );

  const handleStatusChange = (newStatus: bookingStatus) => {
    if (newStatus === "Confirmed") {
    }
    if (newStatus === "Request") {
    }
    setStatus(newStatus);
  };

  const updateStatusOnClick = () => {
    updateBooking(status, selectedBooking);
  };

  return (
    <>
      {" "}
      <span className="block">
        <Dialog.Title className="text-base font-semibold leading-6">
          förhandsvisa förfrågan{" "}
        </Dialog.Title>
      </span>
      <section key={selectedBooking.bookingId}>
        <div className="px-4 sm:px-0">
          <h3 className="text-base font-semibold leading-7 "></h3>
          <p className="mt-1 max-w-2xl leading-6 text-gray-500">
            id: {selectedBooking.bookingId}
          </p>
        </div>
        <div className="mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="  leading-6 ">Vad</dt>
              <dd className="mt-1 leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {selectedBooking.productTitle}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className=" leading-6">Till ev Datum</dt>
              <dd className="mt-1 leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {selectedBooking.requestedDate
                  ? new Date(selectedBooking.requestedDate).toLocaleDateString()
                  : "N/A"}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className=" leading-6 ">Beställare:</dt>
              <dd className="mt-1 leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {selectedBooking.customerEmail}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className=" leading-6 ">Mail skickades:</dt>
              <dd className="mt-1 leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {selectedBooking.created_at
                  ? new Date(selectedBooking.created_at).toLocaleString()
                  : "N/A"}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className=" leading-6">Meddelande</dt>
              <dd className="mt-1 leading-6 sm:col-span-2 sm:mt-0">
                {selectedBooking.bookingMessage}
              </dd>
            </div>

            <div className="px-4 py-6 sm:grid sm:grid-cols-3  sm:gap-4 sm:px-0">
              <h2>Status för förfrågan</h2>
              <ReviewRequestBookingStatus
                value={status}
                onChange={handleStatusChange}
              />
            </div>
            <div className="pt-6 flex items-center justify-end gap-x-6">
              <button
                type="button"
                className=" font-semibold leading-6"
                onClick={() => close()}
              >
                Avbryt
              </button>
              <button
                className=" primary-button"
                onClick={updateStatusOnClick}
                disabled={status === selectedBooking.bookingStatus}
              >
                Uppdatera produkt
              </button>
            </div>
          </dl>
        </div>
      </section>
    </>
  );
}
