import { IComando } from "./IComando";
import { RegistroEjecucion } from "./RegistroEjecucion";

export class HistorialComandos {
  private registros: RegistroEjecucion[] = [];

  public ejecutarComando(comando: IComando, usuario: string): void {
    comando.ejecutar();
    this.registros.push(new RegistroEjecucion(comando, usuario, new Date()));
  }

  public deshacerUltimo(): void {
    const ultimoRegistro = this.registros.pop();
    if (ultimoRegistro) {
      ultimoRegistro.comando.deshacer();
    }
  }

  public obtenerHistorial(): RegistroEjecucion[] {
    return [...this.registros];
  }
}
