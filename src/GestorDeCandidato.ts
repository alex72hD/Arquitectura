import { Candidato } from "./modelos/Candidato";
import { IEstado } from "./estados/IEstado";
import { HistorialComandos } from "./comandos/HistorialComandos";
import { ComandoAvanzarEstado } from "./comandos/ComandoAvanzarEstado";

export class GestorDeCandidato {
  private historial: HistorialComandos;

  constructor(historial: HistorialComandos = new HistorialComandos()) {
    this.historial = historial;
  }

  public avanzarEstado(candidato: Candidato, nuevoEstado: IEstado, usuario: string): void {
    const comando = new ComandoAvanzarEstado(candidato, nuevoEstado);
    this.historial.ejecutarComando(comando, usuario);
  }

  public deshacerUltimaTransicion(): void {
    this.historial.deshacerUltimo();
  }

  public obtenerHistorial(): HistorialComandos {
    return this.historial;
  }
}
