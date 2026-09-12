import { IObservador } from "./IObservador";
import { Notificacion } from "./Notificacion";

export class Nomina implements IObservador {
  public email: string;

  constructor(email: string) {
    this.email = email;
  }

  public actualizar(evento: Notificacion): void {
    if (evento.estadoNuevo === "CONTRATADO") {
      console.log(
        `[NOMINA - ${this.email}] Alta en nómina: ${evento.candidatoNombre} ha sido contratado`
      );
    }
  }
}
