import { IEstado } from "./IEstado";
import { VerificacionReferencias } from "./VerificacionReferencias";
import { Rechazado } from "./Rechazado";

export class Oferta implements IEstado {
  public nombre: string = "OFERTA";

  public transicionesPermitidas(): IEstado[] {
    return [new VerificacionReferencias(), new Rechazado()];
  }

  public puedeTransicionarA(estado: IEstado): boolean {
    return this.transicionesPermitidas().some(
      (permitido) => permitido.nombre === estado.nombre
    );
  }
}
