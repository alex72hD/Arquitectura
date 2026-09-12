import { IEstado } from "./IEstado";
import { Oferta } from "./Oferta";
import { Rechazado } from "./Rechazado";

export class PruebaTecnica implements IEstado {
  public nombre: string = "PRUEBA_TECNICA";

  public transicionesPermitidas(): IEstado[] {
    return [new Oferta(), new Rechazado()];
  }

  public puedeTransicionarA(estado: IEstado): boolean {
    return this.transicionesPermitidas().some(
      (permitido) => permitido.nombre === estado.nombre
    );
  }
}
