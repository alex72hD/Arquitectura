import { IObservador } from "./IObservador";
import { Notificacion } from "./Notificacion";

export class Reclutador implements IObservador {
  public email: string;

  constructor(email: string) {
    this.email = email;
  }

  public actualizar(evento: Notificacion): void {
    console.log(
      `[RECLUTADOR - ${this.email}] Candidato: ${evento.candidatoNombre} cambió de ${evento.estadoAnterior} a ${evento.estadoNuevo}`
    );
  }
}
