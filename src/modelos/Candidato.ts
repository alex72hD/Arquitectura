import { IEstado } from "../estados/IEstado";
import { IObservador } from "../observadores/IObservador";
import { Notificacion } from "../observadores/Notificacion";
import { CandidatoMemento } from "../memento/CandidatoMemento";
import { HistorialComandos } from "../comandos/HistorialComandos";

export class Candidato {
  public nombre: string;
  public estadoActual: IEstado;
  public reclutadorEmail: string;
  private observadores: IObservador[] = [];
  private historial: HistorialComandos;

  constructor(
    nombre: string,
    estadoInicial: IEstado,
    reclutadorEmail: string,
    historial: HistorialComandos = new HistorialComandos()
  ) {
    this.nombre = nombre;
    this.estadoActual = estadoInicial;
    this.reclutadorEmail = reclutadorEmail;
    this.historial = historial;
  }

  public obtenerEstado(): string {
    return this.estadoActual.nombre;
  }

  public cambiarEstado(nuevo: IEstado): void {
    if (!this.estadoActual.puedeTransicionarA(nuevo)) {
      throw new Error(`Transición inválida: ${this.estadoActual.nombre} -> ${nuevo.nombre}`);
    }

    const estadoAnterior = this.estadoActual.nombre;
    this.estadoActual = nuevo;

    const evento = new Notificacion(
      this.nombre,
      estadoAnterior,
      this.estadoActual.nombre,
      new Date(),
      false
    );

    this.notificarObservadores(evento);
  }

  public agregarObservador(o: IObservador): void {
    this.observadores.push(o);
  }

  public removerObservador(o: IObservador): void {
    this.observadores = this.observadores.filter((observador) => observador !== o);
  }

  public notificarObservadores(evento: Notificacion): void {
    for (const observador of this.observadores) {
      observador.actualizar(evento);
    }
  }

  public crearMemento(): CandidatoMemento {
    return new CandidatoMemento(this.estadoActual, new Date());
  }

  public restaurarMemento(m: CandidatoMemento): void {
    const estadoAnterior = this.estadoActual.nombre;
    this.estadoActual = m.obtenerEstado();

    const evento = new Notificacion(
      this.nombre,
      estadoAnterior,
      this.estadoActual.nombre,
      new Date(),
      false
    );

    this.notificarObservadores(evento);
  }

  public obtenerHistorial(): HistorialComandos {
    return this.historial;
  }
}
