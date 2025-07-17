export interface Proyeccion {
  anio: number;
  valorInicial: number;
  valorFinal: number;
  rendimientoEstimado: number; // %
  devolucionFiscalEstimada: number; // $
  inflacion?: number;
}
