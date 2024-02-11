import { IUser } from "app/_models/IUser";

export async function createUserService(userData: IUser) {
  try {
    const response = await fetch("/api/createUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();

    if (response.ok) {
      return data;
    }
    if (response.status === 400) {
      const errorBody = await response.json();
      console.error("Bad Request:", errorBody.error);

    } else {
      const errorBody = await response.json();
      throw new Error(errorBody.error);
    }
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};


