export interface IDialog {
  type: "warning" | "ok" | "";
  title: string;
  message: string;
  primaryButton: string;
  redirectLink?: string;
}
