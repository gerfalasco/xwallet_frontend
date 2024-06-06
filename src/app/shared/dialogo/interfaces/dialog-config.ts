import { TipoMensajeType } from "../types/tipo-mensaje.type";

export interface IDialogConfig  {
    title?: string;
    message: string;
    tipo?: TipoMensajeType;
    confirmText?: string;
    cancelText?: string;
}
