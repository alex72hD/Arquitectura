import { IEstado } from "./IEstado";


export class PruebaTecnica implements IEstado {
  public nombre = "PRUEBA_TECNICA";

  public transicionesPermitidas(): string[] {
    return ["OFERTA", "RECHAZADO"];
  }

  public puedeTransicionarA(nuevoEstado: string): boolean {
    return this.transicionesPermitidas().includes(nuevoEstado);
  }
}
