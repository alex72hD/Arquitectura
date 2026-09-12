import { IEstado } from "./IEstado";

export class Rechazado implements IEstado {
  public nombre: string = "RECHAZADO";

  public transicionesPermitidas(): IEstado[] {
    return [];
  }

  public puedeTransicionarA(estado: IEstado): boolean {
    return false;
  }
}
