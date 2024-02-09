"use client";
import React, { useState } from "react";
import { initialProduct } from "../../_helpers/initialProduct";
import ProductSection from "../../_components/ProductSection";
import { IProduct } from "../../_models/IProduct";
import EditProductModal from "../../_components/EditProductModal";
import { updateProductService } from "app/_services/updateProductService";
import DialogComponent from "app/_components/DialogComponent";
import { IDialog } from "app/_models/IDialog";
import { initialDialog } from "app/_helpers/initialDialog";
import {
  PRODUCTUPDATE_ERROR_DIALOG,
  PRODUCTUPDATE_SUCCESS_DIALOG,
} from "app/_components/DialogMessage";

import { getTodaysDate } from "app/_utilities/getTodaysDate";

export default function Dashboard() {
  const [selectedProduct, setSelectedProduct] =
    useState<IProduct>(initialProduct);
  const [showModal, setShowModal] = useState(false);
  const [dialog, setDialog] = useState<IDialog>(initialDialog);
  const [showDialog, setShowDialog] = useState(false);

  const close = () => {
    setShowModal(false);
  };

  const showProduct = (product: IProduct) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleFormData = async (formData: IProduct) => {
    try {
      const response = await updateProductService(formData);
      if (response.ok) {
        setDialog(PRODUCTUPDATE_SUCCESS_DIALOG);
        setShowDialog(true);
      }
    } catch (error) {
      console.error("Error updating product:", error);
      setDialog(PRODUCTUPDATE_ERROR_DIALOG);
      setShowDialog(true);
    }
  };

  const closeDialog = () => {
    setShowModal(false);
    setShowDialog(false);
    close();
  };

  return (
    <>
      <div className="flex flex-1 flex-col px-6 py-12 lg:px-8 ">
        <span className="mt-20">Dagens datum:</span>
        <h1 className=" text-3xl mb-12 font-extraboldmd:text-5xl lg:text-6xl">
          {getTodaysDate()}
        </h1>

        <>
          {showModal && (
            <EditProductModal
              close={close}
              showModal={showModal}
              selectedProduct={selectedProduct}
              handleFormData={handleFormData}
            ></EditProductModal>
          )}
          <ProductSection showProduct={showProduct}></ProductSection>

          {showDialog && (
            <DialogComponent
              dialog={dialog}
              closeDialog={closeDialog}
              showDialog={showDialog}
            ></DialogComponent>
          )}
        </>
      </div>
    </>
  );
}
