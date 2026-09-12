import { IEstado } from "./IEstado";
import { Contratado } from "./Contratado";
import { Rechazado } from "./Rechazado";

export class VerificacionReferencias implements IEstado {
  public nombre: string = "VERIFICACION_REFERENCIAS";

  public transicionesPermitidas(): IEstado[] {
    return [new Contratado(), new Rechazado()];
  }

  public puedeTransicionarA(estado: IEstado): boolean {
    return this.transicionesPermitidas().some(
      (permitido) => permitido.nombre === estado.nombre
    );
  }
}
