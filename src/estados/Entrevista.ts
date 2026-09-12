import { IEstado } from "./IEstado";
import { PruebaTecnica } from "./PruebaTecnica";
import { Rechazado } from "./Rechazado";

export class Entrevista implements IEstado {
  public nombre: string = "ENTREVISTA";

  public transicionesPermitidas(): IEstado[] {
    return [new PruebaTecnica(), new Rechazado()];
  }

  public puedeTransicionarA(estado: IEstado): boolean {
    return this.transicionesPermitidas().some(
      (permitido) => permitido.nombre === estado.nombre
    );
  }
}
