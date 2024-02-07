import { IBookingWithCustomerEmail, bookingStatus } from "app/_models/IBooking";
import { useState } from "react";
import ReviewRequestBookingStatus from "./ReviewRequestBookingStatus";
import { CONTACT_SUCCESS_DIALOG } from "./DialogMessage";
import { initialDialog } from "app/_helpers/initialDialog";
import { IDialog } from "app/_models/IDialog";

interface IReviewRequestDataProps {
  selectedBooking: IBookingWithCustomerEmail;
  close: () => void;
}
export default function ReviewRequestData({
  selectedBooking,
  close,
}: IReviewRequestDataProps) {
  const [status, setStatus] = useState<bookingStatus>(bookingStatus.Request);

  const handleStatusChange = (newStatus: bookingStatus) => {
    setStatus(newStatus);
  };

  const updateStatusOnClick = () => {
    console.log("click", status, selectedBooking.bookingId);
    updateBooking(status, selectedBooking.bookingId);
  };

  const updateBooking = async (status: bookingStatus, bookingId: string) => {
    try {
      const response = await fetch("/api/updateBooking", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          bookingId: bookingId,
          bookingStatus: status,
        }),
      });
      if (response.ok) {
        console.log("Booking updated successfully");
        close();
      } else {
        console.error("Failed to update product");
      }
    } catch (error) {
      console.error("Error updating product:", error);
      throw error;
    }
  };

  console.log(selectedBooking);
  return (
    <>
      <div key={selectedBooking.bookingId}>
        <div className="px-4 sm:px-0">
          <h3 className="text-base font-semibold leading-7 "></h3>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
            id: {selectedBooking.bookingId}
          </p>
        </div>
        <div className="mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 ">Vad</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {selectedBooking.productTitle}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6">När</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {selectedBooking?.requestedDate}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 ">Beställare:</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {selectedBooking.customerEmail}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 ">
                Mail skickades:
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {selectedBooking.created_at
                  ? new Date(selectedBooking.created_at).toLocaleString()
                  : "N/A"}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6">Meddelande</dt>
              <dd className="mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0">
                {selectedBooking.bookingMessage}
              </dd>
            </div>

            <div>
              <h2>Booking Status</h2>
              <ReviewRequestBookingStatus
                value={status}
                onChange={handleStatusChange}
              />
              <p>Selected Status: {status}</p>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button
                type="button"
                className="text-sm font-semibold leading-6 text-gray-900"
                onClick={() => close()}
              >
                Avbryt
              </button>
              <button className=" primary-button" onClick={updateStatusOnClick}>
                Uppdatera produkt
              </button>
            </div>

            {/* <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 ">Status</dt>
              <dd className="mt-2 text-sm  sm:col-span-2 sm:mt-0">
                <button
                  id="dropdownDefaultButton"
                  data-dropdown-toggle="dropdown"
                  className="primary-button inline-flex items-center"
                >
                  Status{" "}
                  <svg
                    className="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                <div className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Dashboard
                      </a>
                    </li>
                  </ul>
                </div>
              </dd>
            </div> */}
          </dl>
        </div>
      </div>
    </>
  );
}
