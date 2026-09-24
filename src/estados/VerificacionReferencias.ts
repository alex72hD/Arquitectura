import { IEstado } from "./IEstado";


export class VerificacionReferencias implements IEstado {
  public nombre = "VERIFICACION_REFERENCIAS";

  public transicionesPermitidas(): string[] {
    return ["Contratado", "Rechazado"];
  }

  public puedeTransicionarA(nuevoEstado: string): boolean {
    return this.transicionesPermitidas().includes(nuevoEstado);
  }
}
