import { Candidato } from "./modelos/Candidato";
import { IEstado } from "./estados/IEstado";
import { ComandoAvanzarEstado } from "./comandos/ComandoAvanzarEstado";
import { RegistroEjecucion } from "./comandos/RegistroEjecucion";
import { HistorialComandos } from "./comandos/HistorialComandos";

export class GestorDeCandidato  {
  private historiales = new WeakMap<Candidato, HistorialComandos>();

  public avanzarEstado(candidato: Candidato, nuevoEstado: IEstado, usuario: string): void {
    const comando = new ComandoAvanzarEstado(candidato, nuevoEstado);
    this.historialDe(candidato).ejecutarComando(comando, usuario);
  }

  public deshacerUltimaTransicion(candidato: Candidato): void {
    this.historialDe(candidato).deshacerUltimo();
  }

  public obtenerHistorial(candidato: Candidato): RegistroEjecucion[] {
    return this.historialDe(candidato).obtenerHistorial();
  }

  private historialDe(candidato: Candidato): HistorialComandos {
    let historial = this.historiales.get(candidato);
    if (!historial) {
      historial = new HistorialComandos();
      this.historiales.set(candidato, historial);
    }
    return historial;
  }
}
