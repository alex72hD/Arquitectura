import { Candidato } from "./modelos/Candidato";
import { GestorDeCandidato } from "./GestorDeCandidato";
import { Aplicado } from "./estados/Aplicado";
import { Entrevista } from "./estados/Entrevista";
import { PruebaTecnica } from "./estados/PruebaTecnica";
import { Oferta } from "./estados/Oferta";
import { VerificacionReferencias } from "./estados/VerificacionReferencias";
import { Contratado } from "./estados/Contratado";
import { Rechazado } from "./estados/Rechazado";
import { Reclutador } from "./observadores/Reclutador";
import { Gerente } from "./observadores/Gerente";
import { Nomina } from "./observadores/Nomina";
import { PortalCandidato } from "./observadores/PortalCandidato";

const gestor = new GestorDeCandidato();

const candidato = new Candidato("Robin Montoya", new Aplicado(), "reclutador@empresa.com");

const reclutador = new Reclutador("reclutador@empresa.com");
const gerente = new Gerente("gerente.tech@empresa.com");
const nomina = new Nomina("nomina@empresa.com");
const portal = new PortalCandidato("CAND-9876");

candidato.agregarObservador(reclutador);
candidato.agregarObservador(gerente);
candidato.agregarObservador(nomina);
candidato.agregarObservador(portal);

console.log("--- FLUJO REGULAR DE SELECCION ---");
gestor.avanzarEstado(candidato, new Entrevista(), "analista.rrhh");
gestor.avanzarEstado(candidato, new PruebaTecnica(), "lead.tech");
gestor.avanzarEstado(candidato, new Oferta(), "gerente.tech");
gestor.avanzarEstado(candidato, new VerificacionReferencias(), "analista.rrhh");

console.log("\n--- SIMULACION DE ERROR Y DESHACER (UNDO CON AUDITORIA) ---");
gestor.avanzarEstado(candidato, new Rechazado(), "asistente.rrhh");
console.log("Estado actual tras error accidental:", candidato.obtenerEstado());

gestor.deshacerUltimaTransicion();
console.log("Estado restaurado con undo:", candidato.obtenerEstado());

console.log("\n--- CULMINACION DEL PROCESO ---");
gestor.avanzarEstado(candidato, new Contratado(), "director.rrhh");
console.log("Estado final del candidato:", candidato.obtenerEstado());

console.log("\n--- PRUEBA DE TRANSICION INVALIDA ---");
const candidatoInvalido = new Candidato("Juan Perez", new Aplicado(), "reclutador@empresa.com");
try {
  gestor.avanzarEstado(candidatoInvalido, new Contratado(), "admin");
} catch (error: any) {
  console.log("Excepcion capturada exitosamente:", error.message);
}

console.log("\n--- HISTORIAL DE AUDITORIA ---");
const historial = gestor.obtenerHistorial().obtenerHistorial();
for (const registro of historial) {
  console.log(`[${registro.fecha.toISOString()}] Accion realizada por: ${registro.usuario}`);
}
