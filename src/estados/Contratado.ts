import { IEstado } from "./IEstado";

export class Contratado implements IEstado {
  public nombre = "CONTRATADO";

  public transicionesPermitidas(): string[] {
    return [];
  }

  public puedeTransicionarA(nuevoEstado: string): boolean {
    return false;
  }
}
