import { Notificacion } from "./Notificacion";

export interface IObservador {
  actualizar(evento: Notificacion): void;
}
