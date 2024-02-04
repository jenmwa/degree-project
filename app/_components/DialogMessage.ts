import { IDialog } from "../_models/IDialog";


export const CONTACT_SUCCESS_DIALOG: IDialog = {
  type: "ok",
  title: "Epost är skickad!",
  message:
    "Vi återkommer med svar till epostadressen du angett så snart vi kan.",
  primaryButton: "Ok",
};

export const CONTACT_400_DIALOG: IDialog = {
  type: "warning",
  title: "Något gick fel",
  message: "Vänligen försök igen.",
  primaryButton: "Ok",
}

export const CONTACT_EMAILMISMATCH_DIALOG: IDialog = {
  type: "warning",
  title: "E-postadresserna matchar inte",
  message:
    "De angivna e-postadresserna matchar inte. Var vänlig kontrollera att de är desamma.",
  primaryButton: "Ok",
}

export const REQUEST_SUCCESS_DIALOG: IDialog = {
  type: "ok",
  title: "Beställningsförfrågan är skickad!",
  message:
    "Vi återkommer med svar till epostadressen du angett inom kort.",
  primaryButton: "Ok",
};

export const REQUEST_MISSINGFIELDS_DIALOG: IDialog = {
  type: "warning",
  title: "E-postadress saknas.",
  message:
    "För att kunna göra en beställningsförfrågan är detta fält obligatoriskt.",
  primaryButton: "Ok",
};

