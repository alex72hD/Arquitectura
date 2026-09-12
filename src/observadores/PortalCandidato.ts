import { IObservador } from "./IObservador";
import { Notificacion } from "./Notificacion";

export class PortalCandidato implements IObservador {
  public candidatoId: string;

  constructor(candidatoId: string) {
    this.candidatoId = candidatoId;
  }

  public actualizar(evento: Notificacion): void {
    if (!evento.esNotaInterna) {
      console.log(
        `[PORTAL CANDIDATO - ID: ${this.candidatoId}] Su proceso avanzó a: ${evento.estadoNuevo}`
      );
    }
  }
}
