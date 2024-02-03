import OrderForm from "../OrderForm";
import Stepper from "../Stepper";

export default function ReqestOfferComponent() {
  return (
    <>
      <section className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Stepper></Stepper>
          <OrderForm></OrderForm>
        </div>
      </section>
    </>
  );
}
