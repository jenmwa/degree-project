import { IDialog } from "../_models/IDialog";


export const CONTACT_SUCCESS_DIALOG: IDialog = {
  type: "ok",
  title: "Epost är skickad!",
  message:
    "Vi återkommer med svar till epostadressen du angett så snart vi kan.",
  primaryButton: "Ok",
  // redirectLink?: string;
};

export const CONTACT_400_DIALOG: IDialog = {
  type: "warning",
  title: "Något gick fel",
  message: "Vänligen försök igen.",
  primaryButton: "Ok",
  // redirectLink?: string;
}

export const CONTACT_EMAILMISMATCH_DIALOG: IDialog = {
  type: "warning",
  title: "E-postadresserna matchar inte",
  message:
    "De angivna e-postadresserna matchar inte. Var vänlig kontrollera att de är matchar.",
  primaryButton: "Ok",
  // redirectLink?: string;
}

export const REQUEST_SUCCESS_DIALOG: IDialog = {
  type: "ok",
  title: "Beställningsförfrågan är skickad!",
  message:
    "Vi återkommer med svar till epostadressen du angett inom kort.",
  primaryButton: "Ok",
  // redirectLink?: string;
};

export const REQUEST_MISSINGFIELDS_DIALOG: IDialog = {
  type: "warning",
  title: "E-postadress saknas.",
  message:
    "För att kunna göra en beställningsförfrågan är detta fält obligatoriskt.",
  primaryButton: "Ok",
  // redirectLink?: string;
};

export const PRODUCTUPDATE_SUCCESS_DIALOG: IDialog = {
  type: "ok",
  title: "Artikeln är uppdaterad!",
  message:
    "Det gjorde vi bra! 🎉 ",
  primaryButton: "YÄSS",
  // redirectLink?: string;
};

export const PRODUCTUPDATE_CONTROL_DIALOG: IDialog = {
  type: "warning",
  title: "Har du kontrollerat stavning och bild?",
  message:
    "Uppdateringen sker i realtid, när du klickar OK så uppdateras artikeln på en gång. ",
  primaryButton: "Ok",
  // redirectLink?: string;
};
