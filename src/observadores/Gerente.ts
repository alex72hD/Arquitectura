import { IObservador } from "./IObservador";
import { Notificacion } from "./Notificacion";

export class Gerente implements IObservador {
  public email: string;

  constructor(email: string) {
    this.email = email;
  }

  public actualizar(evento: Notificacion): void {
    if (evento.estadoNuevo === "OFERTA" || evento.estadoNuevo === "CONTRATADO") {
      console.log(
        `[GERENTE - ${this.email}] Notificación relevante: ${evento.candidatoNombre} pasó a ${evento.estadoNuevo}`
      );
    }
  }
}
