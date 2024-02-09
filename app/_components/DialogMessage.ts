import { IDialog } from "../_models/IDialog";


export const CONTACT_SUCCESS_DIALOG: IDialog = {
  type: "ok",
  title: "Epost är skickad!",
  message:
    "Vi återkommer med svar till epostadressen du angett så snart vi kan.",
  primaryButton: "Ok",
  // redirectLink?: string;
};

export const CONTACT_ERROR_DIALOG: IDialog = {
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
  redirectLink: '/buketter',
};

export const REQUEST_MISSINGFIELDS_DIALOG: IDialog = {
  type: "warning",
  title: "Obligatoriska fält saknas.",
  message:
    "För att kunna komma i kontakt med oss gällande beställningsförfrågan måste vi ha ditt namn, din epost samt ett meddelande.",
  primaryButton: "Ok",
  // redirectLink?: string;
};

export const REQUEST_ERROR_DIALOG: IDialog = {
  type: "warning",
  title: "Något gick fel.",
  message:
    "Bokningen kunde inte uppdateras. Vänligen försök igen eller kontakta oss.",
  primaryButton: "Ok",
  // redirectLink?: string;
};

export const PRODUCTUPDATE_ERROR_DIALOG: IDialog = {
  type: "warning",
  title: "Något gick fel.",
  message:
    "Bokningen kunde inte uppdateras. Vänligen försök igen eller kontakta IT-ansvarig.",
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

export const PRODUCTUPDATE_IMGSRC_DIALOG: IDialog = {
  type: "warning",
  title: "Uppladdningen stödjer ej bildformatet.",
  message:
    "Bilder som laddas upp måste vara av format  .jpg, .jpeg, .png.",
  primaryButton: "Ok",
  // redirectLink?: string;
};

export const PRODUCTUPDATE_IMGSUCCESS_DIALOG: IDialog = {
  type: "ok",
  title: "Bilden är uppladdad.",
  message:
    "Bilden är nu uppladdad till databasen.",
  primaryButton: "Ok",
  // redirectLink?: string;
};

export const BOOKINGUPDATE_SUCCESS_DIALOG: IDialog = {
  type: "ok",
  title: "Bokningen är uppdaterad!",
  message:
    "Bokningens status är uppdaterad i databasen.",
  primaryButton: "Ok",
  // redirectLink: '/admin/dashboard',
};


export const BOOKINGUPDATE_ERROR_DIALOG: IDialog = {
  type: "warning",
  title: "Något gick fel.",
  message:
    "Bokningen kunde inte uppdateras. Vänligen försök igen eller kontakta IT-ansvarig.",
  primaryButton: "Ok",
  // redirectLink?: string;
};

export const ADMIN_REMOVEIMG_IMG: IDialog = {
  type: "warning",
  title: "Vill du ta bort denna bild?",
  message:
    "Tar du bort bilden kommer den inte längre visas på produkten.",
  primaryButton: "Tabort",
  // redirectLink?: string;
};

