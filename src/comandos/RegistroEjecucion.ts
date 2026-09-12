import { IComando } from "./IComando";

export class RegistroEjecucion {
  public comando: IComando;
  public usuario: string;
  public fecha: Date;

  constructor(comando: IComando, usuario: string, fecha: Date = new Date()) {
    this.comando = comando;
    this.usuario = usuario;
    this.fecha = fecha;
  }
}
