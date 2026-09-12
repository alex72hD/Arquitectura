export class Notificacion {
  public candidatoNombre: string;
  public estadoAnterior: string;
  public estadoNuevo: string;
  public fecha: Date;
  public esNotaInterna: boolean;

  constructor(
    candidatoNombre: string,
    estadoAnterior: string,
    estadoNuevo: string,
    fecha: Date,
    esNotaInterna: boolean = false
  ) {
    this.candidatoNombre = candidatoNombre;
    this.estadoAnterior = estadoAnterior;
    this.estadoNuevo = estadoNuevo;
    this.fecha = fecha;
    this.esNotaInterna = esNotaInterna;
  }
}
