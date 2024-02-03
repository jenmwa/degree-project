import OrderForm from "app/_components/OrderForm";
import ReqestOfferComponent from "app/_components/RequestOffer/ReqestOfferComponent";
import Stepper from "app/_components/Stepper";

export default function Bestallning() {
  return (
    <>
      {/* <ReqestOfferComponent></ReqestOfferComponent> */}
      <section className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Stepper></Stepper>

          <OrderForm></OrderForm>
        </div>
      </section>
    </>
  );
}
