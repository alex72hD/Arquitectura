import { IObservador } from "./IObservador";
import { Notificacion } from "./Notificacion";

export class SujetoObservable {
  private observadores: IObservador[] = [];

  public agregarObservador(o: IObservador): void {
    this.observadores.push(o);
  }

  public removerObservador(o: IObservador): void {
    this.observadores = this.observadores.filter((observador) => observador !== o);
  }

  public notificar(evento: Notificacion): void {
    for (const observador of this.observadores) {
      observador.actualizar(evento);
    }
  }
}