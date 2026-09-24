import { IEstado } from "../estados/IEstado";
import { IObservador } from "../observadores/IObservador";
import { Notificacion } from "../observadores/Notificacion";
import { CandidatoMemento } from "../memento/CandidatoMemento";
import { SujetoObservable } from "../observadores/sujetoObservable";

export class Candidato {
  public nombre: string;
  public estadoActual: IEstado;
  public reclutadorEmail: string;
  private notificador: SujetoObservable = new SujetoObservable();

  constructor(
    nombre: string,
    estadoInicial: IEstado,
    reclutadorEmail: string
  ) {
    this.nombre = nombre;
    this.estadoActual = estadoInicial;
    this.reclutadorEmail = reclutadorEmail;
  }

  public obtenerEstado(): string {
    return this.estadoActual.nombre;
  }

   public cambiarEstado(nuevo: IEstado): void {
    if (!this.estadoActual.puedeTransicionarA(nuevo.nombre)) {
      throw new Error(`Transición inválida: ${this.estadoActual.nombre} -> ${nuevo.nombre}`);
    }

    this.aplicarEstado(nuevo);
  }

 public agregarObservador(o: IObservador): void {
    this.notificador.agregarObservador(o);
  }

  public removerObservador(o: IObservador): void {
    this.notificador.removerObservador(o);
  }

  public notificarObservadores(evento: Notificacion): void {
    this.notificador.notificar(evento);
  }

  public crearMemento(): CandidatoMemento {
    return new CandidatoMemento(this.estadoActual, new Date());
  }

  public restaurarMemento(m: CandidatoMemento): void {
    this.aplicarEstado(m.obtenerEstado());
  }


  private aplicarEstado(nuevo: IEstado): void {
    const estadoAnterior = this.estadoActual.nombre;
    this.estadoActual = nuevo;

    const evento = new Notificacion(
      this.nombre,
      estadoAnterior,
      this.estadoActual.nombre,
      new Date(),
      false
    );

    this.notificador.notificar(evento);
  }
}
