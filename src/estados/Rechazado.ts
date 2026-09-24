import { IEstado } from "./IEstado";

export class Rechazado implements IEstado {
  public nombre = "RECHAZADO";

  public transicionesPermitidas(): string[] {
    return [];
  }

  public puedeTransicionarA(nuevoEstado: string): boolean {
    return false;
  }
}
