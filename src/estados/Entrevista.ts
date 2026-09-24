import { IEstado } from "./IEstado";


export class Entrevista implements IEstado {
  public nombre  = "ENTREVISTA";

  public transicionesPermitidas(): string[] {
    return ["PRUEBA_TECNICA", "RECHAZADO"];
  }

  public puedeTransicionarA(nuevoEstado: string): boolean {
     return this.transicionesPermitidas().includes(nuevoEstado);
  }
}
