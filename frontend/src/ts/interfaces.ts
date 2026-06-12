import type { Dayjs } from "dayjs";
import type { InfoHorario } from "../components/InfoHorario";

export interface MigasProps {
  nivel2: boolean;
  nivel3?: boolean;
  titulo: string
}


export type GlobalInfo = {
  user: string,
  pass: string,
  isLogin: boolean,
  setLogin: (arg0: boolean) => void

}

export type Login = {
  user: string,
  pass: string
};

export interface Provincia {
  CODIGO: string;
  descripcion: string;
}

export interface Municipio {
  CODIGO: string;
  descripcion: string;
  provincia: Provincia;
}

export type Position = {
  lat: number,
  lng: number
};
export type Marcador = {
  id: number,
  name: string,
  position: Position
};


export interface Encuesta {
  id: number
  nombre: string
  fechaRealizacion: number
  fechaIncorporacion: number,
  estado: number,
  direccion: Direccion
  organismo: Organismo
  infoHorario: InfoHorario
  infoServicios: InfoServicios
  infoTeletrabajo: InfoTeletrabajo
  infoInstalaciones: InfoInstalaciones
  infoMovilidad: InfoMovilidad
  infoPuesto: InfoPuesto
  infoSalario: InfoSalario
}

export interface Direccion {
  id: number
  calle: string
  numero: string
  codigoPostal: string
  municipio: Municipio,
  lat?: number,
  lng?: number
}

export interface Organismo {
  dir3: string
  unidadOrganica: string
  nivel: number
  organoPadre?: Organismo
}

export interface InfoHorario {
  id: number
  horario: string
  tardesObligatorias: string
  hayHorarioVerano: string
  horarioVeranoCondiciones: string
}

export interface InfoServicios {
  id: number
  hayApartamiento: string
  hayCargador: string
  condicionesParking: string
  hayAparcabicis: string
  hayAutobuses: string
  hayComedor: string
  hayCafeteria: string
  precioMenu: string
  hayGuarderia: string
  cuantiaGuarderia: string
  direccion: Direccion
}

export interface InfoTeletrabajo {
  id: number
  hayTeletrabajo: string
  requisitos: string
  dias: string
  otraCCAA: string
  conciliacion: string
}

export interface InfoInstalaciones {
  id: number
  accesibles: string
  hayDuchas: string
  bañoAdaptado: string
  gimnasio: string
  otros: string
}

export interface InfoMovilidad {
  id: number
  movilidadInterna: string
  posibilidadSalir: string
  comisionServicio: string
}

export interface InfoPuesto {
  id: number
  nivel: string
  equipoTIC: string
  infoSistemas: string
  infoDesarrollo: string
  tipoProyectos: string
  proyectosFuturos: string
  hayOficinaCalidad: string
  funciones: string
  hayQueViejar: string
}

export interface InfoSalario {
  id: number
  hayProductividad: string
  cuantiaProductividad: string
  condicionesProductividad: string
  hayPagaObjetivos: string
  cuantiaPagaObjetivos: string
  hayGuardias: string
  observaciones: string
  salario: number
}


export interface InfoGenerarProps {
  encuesta: Encuesta
}

export interface FechaProps {
  valor: Dayjs,
  disabled: boolean
}

export interface InfoPuestoProps {
  infoPuesto: InfoPuesto
}

export interface InfoSalarioProps {
  infoSalario: InfoSalario
}

export interface InfoHorarioProps {
  infoHorario: InfoHorario
}
export interface InfoInstalacionesProps {
  infoInstalaciones: InfoInstalaciones
}

export interface InfoServiciosProps {
  infoServicios: InfoServicios
}

export interface InfoTeletrabajoProps {
  infoTeletrabajo: InfoTeletrabajo
}

export interface InfoMovilidadProps {
  infoMovilidad: InfoMovilidad
}


export interface Destino {
  dir3: string
  organismo: string
  provincia: string
  encuestas: number
  sueldoTotal: number
  teletrabajo: number
  viajar: number
  accesible: number
  tardes: number
  aparamiento: number
  guarderia: number
  tardesPorcentaje: string
  viajarPorcentaje: string
  aparamientoPorcentaje: string
  accesiblePorcentaje: string
  fiabilidad: string
  guarderiaPorcentaje: string
  teletrabajoPorcentaje: string
}
