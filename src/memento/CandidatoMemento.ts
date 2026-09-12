import { IEstado } from "../estados/IEstado";

export class CandidatoMemento {
  public estado: IEstado;
  public fecha: Date;

  constructor(estado: IEstado, fecha: Date = new Date()) {
    this.estado = estado;
    this.fecha = fecha;
  }

  public obtenerEstado(): IEstado {
    return this.estado;
  }
}
