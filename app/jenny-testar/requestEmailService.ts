// import { IBookingWithCustomerEmail } from "app/_models/IBooking";
// import { IContactEmail } from "app/_models/IContactEmail";

// export async function requestEmailService(booking: IBookingWithCustomerEmail) {
//   console.log('BOOKING IS', booking)

//   try {
//     if (!booking.customerEmail) {
//       return { success: false, error: "Cant handle the booking" };
//     }
//     const res = await fetch("/api/requestEmail", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(booking),
//     });

//     const body = await res.json();
//     console.log('body is', body);

//     if (res.ok) {
//       return { success: true, data: body };
//     }

//     if (res.status === 400) {
//       return { success: false, error: "Bad request" };
//     }
//   } catch (error) {
//     console.error("Something went wrong: ", error);
//     return { success: false, error: "Something went wrong" };
//   }
// }
