import { IEstado } from "./IEstado";


export class Aplicado implements IEstado {
   public nombre = "APLICADO";

 public transicionesPermitidas(): string[] {
    return ["ENTREVISTA", "RECHAZADO"];
  }


  public puedeTransicionarA(nuevoEstado: string): boolean {
     return this.transicionesPermitidas().includes(nuevoEstado);
  }
}
