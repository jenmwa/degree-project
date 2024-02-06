import { createBookingService } from "/Users/jennywaller/Documents/degree-project/app/_services/createBookingService";
import { IBooking } from "/Users/jennywaller/Documents/degree-project/app/_models/IBooking";
import { IUser, Role } from "/Users/jennywaller/Documents/degree-project/app/_models/IUser";

describe("createBookingService", () => {
  it("should call the API with the correct parameters", async () => {

    const user: IUser = {
      userId: "1", userFirstName: "John Doe",
      userEmail: "",
      userLastName: "",
      userPhoneNumber: 0,
      role: Role.USER,
      isDeleted: false,
      isNewsletter: false,
      created_at: null,
      updated_at: null
    };
    const bookingData: IBooking = {
      bookingId: "123",
      requestedDate: '',
      customer: user,
      product: "",
      bookingMessage: "",
      bookingStatus: "",
      created_at: null,
      updated_at: null
    };

    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValue({ bookingData }),
    });

    await createBookingService(bookingData, user);

    expect(fetch).toHaveBeenCalledWith("/api/createBooking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });
  });
});
