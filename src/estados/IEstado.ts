export interface IEstado {
  nombre: string;
  transicionesPermitidas(): IEstado[];
  puedeTransicionarA(estado: IEstado): boolean;
}
