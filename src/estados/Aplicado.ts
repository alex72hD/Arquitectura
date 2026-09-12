import { IEstado } from "./IEstado";
import { Entrevista } from "./Entrevista";
import { Rechazado } from "./Rechazado";

export class Aplicado implements IEstado {
  public nombre: string = "APLICADO";

  public transicionesPermitidas(): IEstado[] {
    return [new Entrevista(), new Rechazado()];
  }

  public puedeTransicionarA(estado: IEstado): boolean {
    return this.transicionesPermitidas().some(
      (permitido) => permitido.nombre === estado.nombre
    );
  }
}
