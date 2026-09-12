import { IEstado } from "./IEstado";

export class Contratado implements IEstado {
  public nombre: string = "CONTRATADO";

  public transicionesPermitidas(): IEstado[] {
    return [];
  }

  public puedeTransicionarA(estado: IEstado): boolean {
    return false;
  }
}
