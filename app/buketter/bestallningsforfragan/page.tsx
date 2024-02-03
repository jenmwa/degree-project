"use client";
import DialogComponent from "app/_components/DialogComponent";
import OrderForm from "app/_components/OrderForm";
import Stepper from "app/_components/Stepper";
import { IDialog } from "app/_models/IDialog";
import { useState } from "react";

export default function Bestallning() {
  const [showDialog, setShowDialog] = useState(false);

  // const [email, setEmail] = useState<IContactEmail>({
  //   type: "contact",
  //   name: "",
  //   email: "",
  //   confirmEmail: "",
  //   message: "",
  // });

  const [dialog, setDialog] = useState<IDialog>({
    type: "ok",
    title: "test",
    message: "test",
    primaryButton: "test",
  });

  const closeDialog = () => {
    setShowDialog(false);
  };

  // const clearEmailFields = () => {
  //   setEmail({
  //     type: "contact",
  //     name: "",
  //     email: "",
  //     confirmEmail: "",
  //     message: "",
  //   });
  //   setIsAgreed(false);
  // };
  return (
    <>
      {/* <ReqestOfferComponent></ReqestOfferComponent> */}
      <section className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Stepper></Stepper>

          <OrderForm></OrderForm>
        </div>
        <DialogComponent
          dialog={dialog}
          closeDialog={closeDialog}
          showDialog={showDialog}
        />
      </section>
    </>
  );
}
