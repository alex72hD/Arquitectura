import { IEstado } from "./IEstado";


export class Oferta implements IEstado {
  public nombre = "OFERTA";

  public transicionesPermitidas(): string[] {
    return ["VERIFICACION_REFERENCIAS", "RECHAZADO"];
  }

  public puedeTransicionarA(nuevoEstado: string): boolean {
    return this.transicionesPermitidas().includes(nuevoEstado);
  }
}
