import { IComando } from "./IComando";
import { Candidato } from "../modelos/Candidato";
import { IEstado } from "../estados/IEstado";
import { CandidatoMemento } from "../memento/CandidatoMemento";

export class ComandoAvanzarEstado implements IComando {
  private candidato: Candidato;
  private estadoNuevo: IEstado;
  private memento: CandidatoMemento | null = null;

  constructor(candidato: Candidato, estadoNuevo: IEstado) {
    this.candidato = candidato;
    this.estadoNuevo = estadoNuevo;
  }

  public ejecutar(): void {
    this.memento = this.candidato.crearMemento();
    this.candidato.cambiarEstado(this.estadoNuevo);
  }

  public deshacer(): void {
    if (this.memento) {
      this.candidato.restaurarMemento(this.memento);
    }
  }
}
