
import { createRequestService } from "/Users/jennywaller/Documents/degree-project/app/_services/createRequestService";
import { IBooking, bookingStatus } from "/Users/jennywaller/Documents/degree-project/app/_models/IBooking";
import { IUser, Role } from "/Users/jennywaller/Documents/degree-project/app/_models/IUser";

describe("createRequestService", () => {
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
      requestedDate: '',
      customer: user,
      product: "",
      bookingMessage: "",
      bookingStatus: bookingStatus.Request,
      created_at: null,
      updated_at: null
    };

    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValue({ bookingData }),
    });

    await createRequestService(bookingData, user);
    expect(fetch).toHaveBeenCalledWith("/api/createRequest", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });
  });
});
