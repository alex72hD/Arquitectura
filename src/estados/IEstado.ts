export interface IEstado {
  nombre: string;
  transicionesPermitidas(): string[];
  puedeTransicionarA(nuevoEstado: string): boolean;
}
