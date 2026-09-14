import { Candidato } from "./modelos/Candidato";
import { IEstado } from "./estados/IEstado";
import { ComandoAvanzarEstado } from "./comandos/ComandoAvanzarEstado";

export class GestorDeCandidato {
  public avanzarEstado(candidato: Candidato, nuevoEstado: IEstado, usuario: string): void {
    const comando = new ComandoAvanzarEstado(candidato, nuevoEstado);
    candidato.obtenerHistorial().ejecutarComando(comando, usuario);
  }

  public deshacerUltimaTransicion(candidato: Candidato): void {
    candidato.obtenerHistorial().deshacerUltimo();
  }
}
