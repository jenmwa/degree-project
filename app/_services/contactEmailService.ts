import { IContactEmail, IRequestEmail } from "app/_models/IContactEmail";

export async function contactEmailService(email: IRequestEmail) {

  try {
    if (email.email !== email.confirmEmail) {
      return { success: false, error: "Email addresses do not match" };
    }
    const res = await fetch("/api/contactEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email),
    });

    const body = await res.json();

    if (res.ok) {
      return { success: true, data: body };
    }

    if (res.status === 400) {
      return { success: false, error: "Bad request" };
    }
  } catch (error) {
    console.error("Something went wrong: ", error);
    return { success: false, error: "Something went wrong" };
  }
}
