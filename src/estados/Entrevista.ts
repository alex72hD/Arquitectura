import { IEstado } from "./IEstado";


export class Entrevista implements IEstado {
  public nombre  = "ENTREVISTA";

  public transicionesPermitidas(): string[] {
    return ["PruebaTecnica", "Rechazado"];
  }

  public puedeTransicionarA(nuevoEstado: string): boolean {
     return this.transicionesPermitidas().includes(nuevoEstado);
  }
}
